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


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once "partials/_head.php" ?>
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

                            <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left"><?= $page_title ?></h5>

                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-first-tab" data-toggle="tab" href="#nav-first" role="tab" aria-controls="nav-first" aria-selected="true">Moje usługi</a>
                                    <a class="nav-item nav-link" id="nav-second-tab" data-toggle="tab" href="#nav-second" role="tab" aria-controls="nav-profile" aria-selected="false">Dodaj nową</a>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab">

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

                                            <div class='col-12 col-sm-3 col-xl-2 mt-2 mt-sm-0 text-center text-sm-left'>
                                                <a href="<?php echo $service->url ?>" class='d-inline-block d-sm-block text-center mb-0 mr-2 mr-sm-0' title='Oferta'>Szczegóły</a>

                                                <a href="<?php echo $pages->get('template=dashboard-edit-service')->url . '?id=' . $sanitizer->text($service->id) ?>" class='d-inline-block d-sm-block text-center mb-0 mr-2 mr-sm-0' title='Edycja'>Edytuj</a>

                                                <a data-id="<?php echo $service->id ?>" data-toggle="modal" href="#confirmation" class='d-inline-block d-sm-block text-center mb-0 mr-2 mr-sm-0' title='Usuwanie'>Usuń</a>
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

                                </div>

                                <div class="tab-pane fade" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">

                                    <form enctype="multipart/form-data" method="post" id="add-service" name="add-service" class="img-cropper">
                                        <div class="row justify-content-center">

                                            <div class="col-12 col-lg-6 mb-3">
                                                <div class="input-group input-group-lg input-group-round">
                                                    <label class="text-uppercase px-3">Nazwa usługi:</label>
                                                    <div class="input-group-inner">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text input-group-icon"><i class="fa fa-shipping-fast"></i></span>
                                                        </div>

                                                        <input autocomplete="off" type="text" class="form-control form-control-lg" id="service_name" name="service_name"
                                                               required="true"
                                                               oninput="this.setCustomValidity('')"
                                                               oninvalid="this.setCustomValidity('Nazwa usługi jest wymagana.')"
                                                               data-msg-required="Nazwa usługi jest wymagana."
                                                               data-inputmask-regex="[A-Za-z\sążźćłóęńśĄŻŹĆŁÓĘŃŚ]+"
                                                        >

                                                        <div class="input-focus-bg"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-none d-lg-flex col-6">
                                                <p class="kbf-form-info align-self-center">
                                                    Wpisz nazwę usługi. <br/>Wypełnienie pola jest wymagane.
                                                </p>
                                            </div>

                                            <div class="col-12 mb-4 text-carrot error d-none">W celu wysłania formularza należy wypełnić pole "Nazwa".</div>

                                            <div class="col-12 col-lg-6 mb-3">
                                                <div class="form-group">
                                                    <label class="text-uppercase px-3">Opis:</label>
                                                    <textarea class="form-control form-round form-control-lg" rows="5" id="service_description" name="service_description" placeholder=""></textarea>
                                                </div>
                                            </div>
                                            <div class="d-none d-lg-flex col-6">
                                                <p class="kbf-form-info align-self-center">
                                                    Uzupełnij opis. (opcjonalnie)
                                                </p>
                                            </div>

                                            <div class="col-12 col-lg-6 mb-3">
                                                <div class="form-group">
                                                    <label class="text-uppercase px-3">Cena:</label>
                                                    <input type="number" class="form-control form-round form-control-lg" id="service_price" name="service_price">
                                                </div>
                                            </div>
                                            <div class="d-none d-lg-flex col-6">
                                                <p class="kbf-form-info align-self-center">
                                                    Podaj cenę. (opcjonalnie)
                                                </p>
                                            </div>

                                            <div class="image_area col-12 col-lg-6">
                                                <label for="upload_image">
                                                    <img src="<?php echo $urls->images ?>image-placeholder.jpg" id="uploaded_image" class="d-block mx-auto img-fluid img-thumbnail" />
                                                    <div class="overlay" id="selectImage">
                                                        <div class="text">Kliknij aby wybrać obraz.</div>
                                                    </div>
                                                    <input type="file" class="image" id="upload_image" accept="image/*" style="display:none" />
                                                </label>
                                            </div>
                                            <div class="d-none d-lg-flex col-6">
                                                <p class="kbf-form-info align-self-center">
                                                    Kliknij aby dodać obraz. (opcjonalnie)
                                                </p>
                                            </div>

                                            <div class="col-12 col-lg-6 text-center text-md-right align-self-center mt-4">
                                                <div class="row justify-content-center">
                                                    <div class="col-12 col-md-6">
                                                        <button type="button" onclick="location.reload();" class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">
                                                            Wróć
                                                        </button>
                                                    </div>
                                                    <div class="col-12 col-md-6">
                                                        <button type="submit" class="send-cv btn btn-round btn-block shadow-none btn-primary mr-lg-4">Zapisz</button>
                                                    </div>
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
    </div>

    <?= render_modal("confirmation", "Potwierdzenie", $modalMarkup) ?>
</div>

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<script src="<?php echo $urls->js ?>vendor/cropper.js"></script>

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
