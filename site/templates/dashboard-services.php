<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$user = wire('user');
$input = wire('input');
$page = wire('page');
$pages = wire('pages');
$sanitizer = wire('sanitizer');
$urls = wire('urls');

check_user($user);
$company_page = get_user_company($user);
check_user_company($company_page);

if ($input->post('action')) {
    // Usuwanie usłygi
    if ($input->post->action === 'delete-service') {
        delete_page($sanitizer->int($input->post->service_id));
    }
}

$page_title = $sanitizer->text($page->title);

$services_container = $company_page->get('name=uslugi');
$services = $services_container->find('template=service, limit=5, sort=title');
$pagination = get_pagination($services);

// Modal - potwierdzenie usuwania usługi
$modalMarkup = '
    <h5 class="text-center">Jesteś pewien, że chcesz usunąć usługę?</h5>
    <form class="row mt-5" action="' . $page->url . '" method="post" name="delete-confirmation">
        <div class="col"><button data-dismiss="modal" type="button" class="cancel-button btn btn-round btn-success w-100">Anuluj</button></div>
        <div class="col"><button type="submit" class="confirm-button btn btn-round btn-danger w-100">Usuń</button></div>
        <input type="hidden" name="action" value="delete-service">
        <input type="hidden" name="service_id">   
    </form>
';


// Opis uslugi - hack
$service_description_hidden = getFormField('hidden');
$service_description_hidden_phone = getFormField('hidden');
$service_description_hidden->name = 'service_description_hidden';
$service_description_hidden_phone->name = 'service_description_hidden';

// Opis uslugi
$service_description_field = getFormField("service_description", true);
$service_description_field_phone = getFormField("service_description", true);
$service_description_field->className = "service-description-desktop col-12 mb-3";
$service_description_field_phone->className = "service-description-phone col-12 mb-4";

// Cena uslugi
$service_price_field = getFormField("number", true);
$service_price_field->label = "Cena usługi";
$service_price_field->name = "product_price";
$service_price_field->className = "col-12 col-sm-6 mb-0 mb-sm-4";
$service_price_field->appendText = "PLN";
$service_price_field->inputmask = "\d+";
$service_price_field->msgRequired = "Pole z ceną usługi musi być wypełnione.";

$service_price_field_phone = getFormField("number", true);
$service_price_field_phone->label = "Cena usługi";
$service_price_field_phone->name = "product_price";
$service_price_field_phone->className = "col-12 col-sm-6 mb-0 mb-sm-4";
$service_price_field_phone->appendText = "PLN";
$service_price_field_phone->inputmask = "\d+";
$service_price_field_phone->msgRequired = "Pole z ceną usługi musi być wypełnione.";


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once "partials/_head.php" ?>

    <!-- Wysiwyg -->
    <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css">

    <!-- crop images: Cropper CSS -->
    <link rel="stylesheet" href="<?php echo $urls->css ?>cropper.css">

</head>
<body>

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Page title -->
<?php include_once "partials/_panel-page-title.php" ?>

<!-- Content -->
<div class="main-content bg-light pb-3 pt-0">

    <div class="section">
        <div class="container">
            <div class="row">

                <!-- Sidebar -->
                <?php include_once "partials/_panel-menu.php" ?>

                <!-- Content body -->
                <div class="col-lg-8">

                    <div class="pb-3 mb-3 h-100">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5 h-100">

                            <nav class="d-none d-sm-block" aria-label="breadcrumb">
                                <ol class="breadcrumb mb-3 mb-sm-0">
                                    <li class="breadcrumb-item"><a href="<?= $pages->get('template=dashboard')->url ?>">Panel</a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><?= $page_title ?></li>
                                </ol>
                            </nav>

                            <h5 class="font-weight-700 mb-0 mb-sm-4 section-title-4 text-center text-lg-left pl-3">Lista usług</h5>

                            <?php

                            if ($input->get->action === 'service-updated') {
                                echo render_alert('Usługa została zaktualizowana.', 'light');
                            }

                            if ($input->get->action === 'service-added') {
                                echo render_alert('Nowa usługa została dodana.', 'light');
                            }

                            if ($input->post->action === 'delete-service') {
                                echo render_alert('Usługa została trwale usunięta.', 'light');
                            }

                            ?>

                            <nav class="d-none d-sm-block">
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-first-tab" data-toggle="tab" href="#nav-first" role="tab" aria-controls="nav-first" aria-selected="true">Zarejestrowane</a>
                                    <a class="nav-item nav-link" id="nav-second-tab" data-toggle="tab" href="#nav-second" role="tab" aria-controls="nav-profile" aria-selected="false">Dodaj usługę</a>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab">

                                    <?php

                                        foreach ($services as $service) {
                                    ?>
                                        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                            <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                                <a href="<?php echo $service->url ?>">
                                                    <?php
                                                        if($service->service_image) {
                                                    ?>
                                                        <img src="<?php echo $service->service_image->url ?>" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                                    <?php
                                                        } else {
                                                    ?>
                                                        <img src="<?php echo $urls->images ?>image-placeholder.jpg" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                                    <?php
                                                        }
                                                    ?>
                                                </a>
                                            </div>

                                            <div class='col-12 col-sm-4 col-xl-6 pt-sm-0 text-center text-lg-left'>
                                                <a href="<?php echo $service->url ?>">
                                                    <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'><span><?php echo $sanitizer->text($service->service_name); ?></span></p>
                                                </a>
                                            </div>

                                            <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                                <?php
                                                    if($service->service_price) {
                                                ?>
                                                    <span class='product-price badge badge-pill badge-danger d-inline-block'><?php echo $sanitizer->float($service->service_price); ?> PLN</span>
                                                <?php
                                                    }
                                                ?>
                                            </div>

                                            <div class='col-12 col-sm-3 col-xl-2 mt-2 mt-sm-0 text-center'>
                                                <a href="<?php echo $service->url ?>" class='d-inline-block d-sm-block text-center text-sm-left mb-0 mr-2 mr-sm-0' title='Oferta'>Podgląd</a>

                                                <a href="<?php echo $pages->get('template=dashboard-edit-service')->url . '?id=' . $sanitizer->text($service->id) ?>" class='d-inline-block d-sm-block text-center text-sm-left mb-0 mr-2 mr-sm-0' title='Edycja'>Edytuj</a>

                                                <a data-id="<?php echo $service->id ?>" data-toggle="modal" href="#confirmation" class='d-inline-block d-sm-block text-center text-sm-left mb-0 mr-2 mr-sm-0' title='Usuwanie'>Usuń</a>
                                            </div>
                                        </div>
                                    <?php
                                        }
                                    ?>

                                    <nav class="mt-3" aria-label="Companies navigation">
                                        <?php
                                            echo $pagination;
                                        ?>
                                    </nav>

                                    <div class="d-flex justify-content-center flex-wrap mt-4 w-100">
                                        <div class="d-none d-sm-block col-12 col-sm-5 px-0">
                                            <a href=" <?= $pages->get('template=dashboard')->url ?>" class="kbf-back-button btn btn-round btn-secondary mb-4 w-100 text-white">Powrót</a>
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane fade d-none d-sm-block" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">

                                    <form novalidate="novalidate" enctype="multipart/form-data" method="post" id="add-service" name="add-service" class="img-cropper">
                                        <div class="row justify-content-center">

                                            <div class="col-12 mb-4">
                                                <div class="input-group input-group-md input-group-round">
                                                    <label class="text-uppercase px-3">Nazwa usługi</label>
                                                    <div class="input-group-inner">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text input-group-icon"><i class="fa fa-info"></i></span>
                                                        </div>

                                                        <input autocomplete="off" type="text" class="form-control form-control-md" id="service_name" name="service_name"
                                                               required="true"
                                                               oninput="this.setCustomValidity('')"
                                                               data-msg-required="Wypełnienie pola z nazwą usługi jest wymagane."
                                                               data-inputmask-regex="[A-Za-z\sążźćłóęńśĄŻŹĆŁÓĘŃŚ]+"
                                                        >

                                                        <div class="input-focus-bg"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 mb-4 text-carrot error d-none">W celu wysłania formularza należy wypełnić pole "Nazwa".</div>

                                            <?= $service_description_hidden->render(false); ?>

                                            <?= $service_price_field->render(false); ?>
                                            <div class="d-flex flex-column justify-content-center col-12 col-sm-6">
                                                <span class="d-inline-block"><?= render_info_message("Podaj cenę usługi. Wypełnienie pola z ceną usługi jest wymagane podczas jej rejestracji.", "mt-4") ?></span>
                                                <div class="header-shadow-wrapper position-static z-index-0"></div>
                                            </div>

                                            <?= $service_description_field->render(false); ?>

                                            <div class="image_area col-4">
                                                <label for="upload_image">
                                                    <img src="<?php echo $urls->images ?>image-placeholder.jpg" id="uploaded_image" class="d-block mx-auto img-fluid img-thumbnail" />
                                                    <div class="overlay" id="selectImage">
                                                        <div class="text">Kliknij, aby wybrać obraz.</div>
                                                    </div>
                                                    <input type="file" class="image" id="upload_image" accept="image/*" style="display:none" />
                                                </label>

                                                <label id="upload-error" class="error kbf-error-message d-none">Dodanie obrazu jest wymagane.</label>

                                            </div>
                                            <div class="d-none d-lg-flex col-8">
                                                <p class="kbf-form-info align-self-center">
                                                    Kliknij, aby dodać obraz przedstawiający usługę.
                                                </p>
                                            </div>

                                            <div class="d-flex justify-content-between flex-wrap mt-4 w-100">
                                                <div class="col-12 col-sm-5 px-0">
                                                    <a href=" <?= $pages->get('template=dashboard')->url ?>" class="kbf-back-button btn btn-round btn-secondary mb-4 w-100 text-white">Powrót</a>
                                                </div>
                                                <div class="col-12 col-sm-5 px-0">
                                                    <button type="submit" class="btn btn-round btn-primary mb-0 mb-sm-4 w-100 text-white">Zarejestruj</button>
                                                </div>
                                            </div>


                                        </div>
                                    </form>


                                    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">Przytnij obraz do wymaganych wymiarów przed przesłaniem.</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="img-container">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <img src="" id="sample_image" />
                                                            </div>
                                                            <div class="col-md-6 text-center">
                                                                <p>Podgląd przyciętego obrazu</p>
                                                                <div class="preview mx-auto img-thumbnail"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Wróć</button>
                                                    <button type="button" id="crop" class="btn btn-primary">Przytnij</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div class="d-sm-none" >

                                <form novalidate="novalidate" enctype="multipart/form-data" method="post" id="add-service-phone" name="add-service-phone" class="img-cropper">
                                    <div class="row justify-content-center">

                                        <h5 class="font-weight-700 mb-0 section-title-4 text-center my-4 pl-3 d-sm-none">Dodaj usługę</h5>

                                        <div class="col-12 mb-3">
                                            <div class="input-group input-group-md input-group-round">
                                                <label class="text-uppercase px-3">Nazwa usługi</label>
                                                <div class="input-group-inner">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text input-group-icon"><i class="fa fa-info"></i></span>
                                                    </div>

                                                    <input autocomplete="off" type="text" class="form-control form-control-md" id="service_name" name="service_name"
                                                           required="true"
                                                           oninput="this.setCustomValidity('')"
                                                           data-msg-required="Wypełnienie pola z nazwą usługi jest wymagane."
                                                           data-inputmask-regex="[A-Za-z\sążźćłóęńśĄŻŹĆŁÓĘŃŚ]+"
                                                    >

                                                    <div class="input-focus-bg"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <?= $service_description_hidden_phone->render(false); ?>

                                        <?= $service_price_field_phone->render(false); ?>
                                        <div class="d-flex flex-column justify-content-center col-12 col-sm-6">
                                            <span class="d-inline-block"><?= render_info_message("Podaj cenę usługi. Wypełnienie pola z ceną usługi jest wymagane podczas jej rejestracji.", "mt-4") ?></span>
                                            <div class="header-shadow-wrapper position-static z-index-0"></div>
                                        </div>

                                        <?= $service_description_field_phone->render(false); ?>
                                        <div class="d-flex flex-column justify-content-center col-12 col-sm-6">
                                            <span class="d-inline-block"><?= render_info_message("Opisz usługę świadczoną przez firmę.", "mt-0") ?></span>
                                            <div class="header-shadow-wrapper position-static z-index-0"></div>
                                        </div>

                                        <div class="col-12 mx-lg-0 mx-auto px-0">
                                            <label class="text-uppercase px-3">Obraz dla usługi</label>
                                        </div>

                                        <div class="image_area col-12 mb-3 position-relative">
                                            <label for="upload_image">
                                                <img src="<?php echo $urls->images ?>image-placeholder.jpg" id="uploaded_image" class="d-block mx-auto img-fluid img-thumbnail" />
                                                <div class="overlay" id="selectImage">
                                                    <div class="text">Kliknij aby wybrać obraz.</div>
                                                </div>
                                                <input type="file" class="image" id="upload_image" data-msg-required="Dodanie obrazu jest wymagane." accept="image/*" style="display:none" />

                                            </label>

                                            <div id="upload-error" class="error kbf-error-message d-none">Dodanie obrazu jest wymagane.</div>

                                        </div>
                                        <div class="d-flex flex-column justify-content-center col-12 col-sm-6">
                                            <span class="d-inline-block"><?= render_info_message("Kliknij, aby dodać obraz dla usługi. Dodanie obrazu ułatwi identyfikacje wizualną usługi w KBF.", "mt-0") ?></span>
                                            <div class="header-shadow-wrapper position-static z-index-0"></div>
                                        </div>


                                        <div class="d-flex justify-content-between flex-wrap mt-4 w-100">
                                            <div class="col-12 col-sm-5 px-0">
                                                <a href=" <?= $pages->get('template=dashboard')->url ?>" class="kbf-back-button btn btn-round btn-secondary mb-4 w-100 text-white">Powrót</a>
                                            </div>
                                            <div class="col-12 col-sm-5 px-0">
                                                <button type="submit" class="btn btn-round btn-primary mb-0 w-100 text-white">Zarejestruj</button>
                                            </div>
                                        </div>


                                    </div>
                                </form>


                                <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Przytnij obraz do wymaganych wymiarów przed przesłaniem.</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="img-container">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <img src="" id="sample_image" />
                                                        </div>
                                                        <div class="col-md-6 text-center">
                                                            <p>Podgląd przyciętego obrazu</p>
                                                            <div class="preview mx-auto img-thumbnail"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Wróć</button>
                                                <button type="button" id="crop" class="btn btn-primary">Przytnij</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <?= render_modal("confirmation", "Potwierdzenie", $modalMarkup) ?>
</div>

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Cropper -->
<script src="<?php echo $urls->js ?>vendor/cropper.js"></script>

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard-services.js"></script>
<script>

    $(function () {
        // Ustaw tooltips
        $('.tooltip-btn').tooltip()
        $('.tooltip-btn-light').tooltip({
            template: '<div class="tooltip tooltip-light" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        })
    })

</script>
</body>
</html>
