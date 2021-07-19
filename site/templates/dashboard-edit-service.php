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
check_user_company(get_user_company($user));

if (!$input->get('id')) {
    wire('session')->redirect($pages->get('template=dashboard')->url); // Przekieruj na dashboard jezeli nie podano id
}

$editId = $input->get('id');
$service = $pages->get($editId);
$page_title = $sanitizer->text($page->title);

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
<div class="main-content bg-light pt-0">

    <div class="section">
        <div class="container">
            <div class="row">

                <!-- Sidebar -->
                <?php include_once "partials/_panel-menu.php" ?>

                <!-- Content body -->
                <div class="col-lg-8">

                    <div class="pb-3 mb-3 h-100">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5 h-100">

                            <nav class="d-none d-sm-block mb-3" aria-label="breadcrumb">
                                <ol class="breadcrumb mb-3 mb-sm-0 p-0">
                                    <li class="breadcrumb-item">
                                        <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left">
                                            <a href="<?= $pages->get('template=dashboard-services')->url ?>">Usługi</a>
                                        </h5>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left d-inline-block"><?= $page_title ?></h5>
                                    </li>
                                </ol>
                            </nav>

                            <form enctype="multipart/form-data" method="post" id="edit-service" name="edit-service" class="img-cropper">
                                <input type="hidden" id="service_id" name="service_id" value="<?= $editId ?>">

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
                                                       value="<?php echo $sanitizer->text($service->service_name) ?>"
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
                                            <textarea class="form-control form-round form-control-lg" rows="5" id="service_description" name="service_description"><?php echo $sanitizer->textarea($service->service_description) ?></textarea>
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
                                            <input type="number" class="form-control form-round form-control-lg" id="service_price" name="service_price" value="<?php echo $sanitizer->float($service->service_price) ?>">
                                        </div>
                                    </div>
                                    <div class="d-none d-lg-flex col-6">
                                        <p class="kbf-form-info align-self-center">
                                            Podaj cenę. (opcjonalnie)
                                        </p>
                                    </div>

                                    <div class="image_area col-12 col-lg-6">
                                        <label for="upload_image">
                                            <?php
                                            if($service->service_image) {
                                                ?>
                                                <img src="<?php echo $service->service_image->url ?>" id="uploaded_image" class="d-block mx-auto img-fluid img-thumbnail" />
                                                <?php
                                            } else {
                                                ?>
                                                <img src="<?php echo $urls->images ?>image-placeholder.jpg" id="uploaded_image" class="d-block mx-auto img-fluid img-thumbnail" />
                                                <?php
                                            }
                                            ?>

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
                                                <button type="button" onclick="window.history.back()" class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">
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

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<script src="<?php echo $urls->js ?>vendor/cropper.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard-edit-service.js"></script>

</body>
</html>
