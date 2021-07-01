<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

check_redirect(wire('user'));

$pages = wire('pages');
$page = wire('page');
$urls = wire('urls');
$sanitizer = wire('sanitizer');

$page_title = $sanitizer->text($page->title);

// TODO: Nalezy zmienic na dane zalogowanego uzytkownika/firmy
$company_page = $pages->get(348487);

$services_group = $company_page->find("name=uslugi");
if ($services_group->count()) $services = $services_group[0]->children();
else $services = array();

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

                    <div class="pb-3 mb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

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
                                        foreach ($services as $service) {
                                    ?>
                                        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                            <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                                <a href="#">
                                                    <img src="<?php echo $service->service_image->url ?>" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                                </a>
                                            </div>

                                            <div class='col-12 col-sm-4 col-xl-6 pt-sm-0 text-center text-lg-left'>
                                                <a href="#">
                                                    <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'><span><?php echo $sanitizer->text($service->service_name); ?></span></p>
                                                </a>
                                            </div>

                                            <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                                <span class='product-price badge badge-pill badge-danger d-inline-block'><?php echo $sanitizer->float($service->service_price); ?> PLN</span>
                                            </div>

                                            <div class='col-12 col-sm-3 col-xl-2 mt-2 mt-sm-0 text-center text-sm-left'>
                                                <a href="<?php echo $service->url ?>" class='d-inline-block d-sm-block text-center mb-0 mr-2 mr-sm-0' title='oferta'>Szczegóły</a>
                                                <a href="#" class='d-inline-block d-sm-block text-center mb-0 mr-2 mr-sm-0' title='oferta'>Edytuj</a>
                                                <a href="#" class="d-inline-block d-sm-block text-center text-dark tooltip-btn" data-toggle="tooltip" data-placement="right" title="" data-original-title="Usuń">
                                                    <img width="25" height="25" class="d-inline-block" src="<?php echo $urls->images ?>trash.svg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    <?php
                                        }
                                    ?>

                                    <div class="text-center mx-auto">
                                        <nav aria-label="navigation">
                                            <ul class="pagination pagination-round justify-content-center">
                                                <li class="page-item">
                                                    <a class="page-link" href="#" aria-label="Previous">
                                                        <span aria-hidden="true">«</span>
                                                        <span class="sr-only">Poprzednia</span>
                                                    </a>
                                                </li>
                                                <li class="page-item active"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#" aria-label="Next">
                                                        <span aria-hidden="true">»</span>
                                                        <span class="sr-only">Następna</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>

                                <div class="tab-pane fade add-service" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">
                                    <p>Formularz dodawania usługi</p>

                                    <div class="image_area w-50">
                                        <form method="post">
                                            <label for="upload_image">
                                                <img src="<?php echo $urls->images ?>image-placeholder.jpg" id="uploaded_image" class="d-block mx-auto img-fluid img-thumbnail" />
                                                <div class="overlay" id="selectImage">
                                                    <div class="text">Kliknij aby wybrać obraz.</div>
                                                </div>
                                                <input type="file" name="image" class="image" id="upload_image" accept="image/*" style="display:none" />
                                            </label>
                                        </form>
                                    </div>

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
