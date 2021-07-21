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

if ($input->post('action') && $input->post->action === 'set-banner') {
    if ($input->post->id !== "") {
        $bannerPage = $pages->get($input->post->id);
        $bannerPage->of(false);
        $banners_container = $company_page->get('name=banery');

        if($input->post->type === "INDEX") {
            //TODO: zmniejszenie account company balance? przekierowanie na strone doładowania? ustawienie kwoty w zaleznosci od rodzaju banera
            $prevBanner = $banners_container->get('template=banner, banner_location_index=1');

            if($prevBanner && $prevBanner->banner_image !== null) {
                $prevBanner = $banners_container->get('template=banner, banner_location_index=1');
                $prevBanner->of(false);
                $prevBanner->banner_location_index = false;
                $prevBanner->save();
                $prevBanner->of(true);

                $bannerPage->banner_expire = $prevBanner->banner_expire;
            } else {
                //TODO: dla miesiaca, wybory opcji
                $bannerPage->banner_expire = $sanitizer->datetime(date('Y-m-d', strtotime('+1 year')));
            }
            $bannerPage->banner_location_index = true;
        }
        if($input->post->type === "INDUSTRY") {
            //TODO: zmniejszenie account company balance? przekierowanie na strone doładowania? ustawienie kwoty w zaleznosci od rodzaju banera
            $prevBanner = $banners_container->get('template=banner, banner_location_industry=1');

            if($prevBanner && $prevBanner->banner_image !== null) {
                $prevBanner->of(false);
                $prevBanner->banner_location_industry = false;
                $prevBanner->save();
                $prevBanner->of(true);

                $bannerPage->banner_expire = $prevBanner->banner_expire;
            } else {
                //TODO: dla miesiaca, wybory opcji
                $bannerPage->banner_expire = $sanitizer->datetime(date('Y-m-d', strtotime('+1 year')));
            }
            $bannerPage->banner_location_industry = true;
        }
        if($input->post->type === "JOB") {
            //TODO: zmniejszenie account company balance? przekierowanie na strone doładowania? ustawienie kwoty w zaleznosci od rodzaju banera
            $prevBanner = $banners_container->get('template=banner, banner_location_job=1');

            if($prevBanner !== null && $prevBanner->banner_image !== null) {
                $prevBanner->of(false);
                $prevBanner->banner_location_job = false;
                $prevBanner->save();
                $prevBanner->of(true);

                $bannerPage->banner_expire = $prevBanner->banner_expire;
            } else {
                //TODO: dla miesiaca, wybory opcji
                $bannerPage->banner_expire = $sanitizer->datetime(date('Y-m-d', strtotime('+1 year')));
            }
            $bannerPage->banner_location_job = true;
        }
        $bannerPage->save();
        $bannerPage->of(true);
    }
}

$page_title = $sanitizer->text($page->title);

$banners_container = $company_page->get('name=banery');
$banners = $banners_container->find('template=banner, limit=6, sort=title');
$pagination = get_pagination($banners);

$bannerIndex = $banners_container->get('template=banner, banner_location_index=1');
$bannerIndustries = $banners_container->get('template=banner, banner_location_industry=1');
$bannerJobs = $banners_container->get('template=banner, banner_location_job=1');

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
                            <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left"><?= $page_title ?></h5>
                            <p>Przeciągnij zapisany baner na pole wybranego banera reklamowego aby go zmienić lub wykupić.</p>

                            <div class="row">

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 bg-warning border-0 shadow">
                                        <div class="card-body text-center">
                                            <?php
                                                $banner_img_url = $urls->images."image-placeholder.jpg";
                                                if($bannerIndex !== null && $bannerIndex->banner_image !== null) {
                                                    $banner_img_url = $bannerIndex->banner_image->url;
                                                }
                                            ?>
                                            <img id="bannerIndex" src="<?php echo $banner_img_url ?>" alt="baner-image" class="img-fluid border rounded" style="height: 100px; object-fit: cover;">
                                            <h6 class="text-white my-3">Witryna Startowa</h6>
                                            <div class="text-white font-weight-bold">
                                                <?php
                                                    if($bannerIndex !== null && $bannerIndex->banner_image !== null) {
                                                ?>
                                                    <span class="d-block">aktywny do:</span>
                                                    <span class="d-block"><?php echo date('d.m.Y', $bannerIndex->banner_expired) ?></span>
                                                <?php
                                                    } else {
                                                ?>
                                                    <span class="d-block"></span>
                                                    <span class="d-block">140 PLN/ROK</span>
                                                <?php }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 bg-secondary border-0 shadow">
                                        <div class="card-body text-center">
                                            <?php
                                                $banner_img_url = $urls->images."image-placeholder.jpg";
                                                if($bannerIndustries !== null && $bannerIndustries->banner_image !== null) {
                                                    $banner_img_url = $bannerIndustries->banner_image->url;
                                                }
                                            ?>
                                            <img id="bannerIndustry" src="<?php echo $banner_img_url ?>" alt="" class="img-fluid border rounded" style="height: 100px; object-fit: cover;">
                                            <h6 class="text-white my-3">Firmy</h6>
                                            <div class="text-white font-weight-bold">
                                                <?php
                                                if($bannerIndustries !== null && $bannerIndustries->banner_image !== null) {
                                                    ?>
                                                    <span class="d-block">aktywny do:</span>
                                                    <span class="d-block"><?php echo date('d.m.Y', $bannerIndustries->banner_expired) ?></span>
                                                    <?php
                                                } else {
                                                    ?>
                                                    <span class="d-block"></span>
                                                    <span class="d-block">120 PLN/ROK</span>
                                                <?php }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-sky border-0 shadow">
                                        <div class="card-body text-center">
                                            <?php
                                                $banner_img_url = $urls->images."image-placeholder.jpg";
                                                if($bannerJobs !== null && $bannerJobs->banner_image !== null) {
                                                    $banner_img_url = $bannerJobs->banner_image->url;
                                                }
                                            ?>
                                            <img id="bannerJob" src="<?php echo $banner_img_url ?>" alt="" class="img-fluid border rounded" style="height: 100px; object-fit: cover;">
                                            <h6 class="text-white my-3">Oferty pracy</h6>
                                            <div class="text-white font-weight-bold">
                                                <?php
                                                if($bannerJobs !== null && $bannerJobs->banner_image !== null) {
                                                    ?>
                                                    <span class="d-block">aktywny do:</span>
                                                    <span class="d-block"><?php echo date('d.m.Y', $bannerJobs->banner_expired) ?></span>
                                                    <?php
                                                } else {
                                                    ?>
                                                    <span class="d-block"></span>
                                                    <span class="d-block">100 PLN/ROK</span>
                                                <?php }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-first-tab" data-toggle="tab" href="#nav-first" role="tab" aria-controls="nav-first" aria-selected="true">Zapisane banery</a>
                                    <a class="nav-item nav-link" id="nav-second-tab" data-toggle="tab" href="#nav-second" role="tab" aria-controls="nav-profile" aria-selected="false">Dodaj nowy</a>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab">
                                    <?php
                                        if ($input->get->action === 'banner-added') {
                                            echo render_alert('Baner został dodany.', 'light');
                                        }
                                    ?>
                                    <div class="row">
                                        <?php
                                        foreach ($banners as $banner) {
                                            ?>
                                            <div class="col-lg-6 col-xl-4 mb-4">
                                                <div class="card h-100 mb-0 bg-light border-0 shadow">
                                                    <div class="card-body text-center">
                                                            <?php
                                                            if($banner->banner_image) {
                                                                ?>
                                                                <img id="<?php echo $banner->id ?>" src="<?php echo $banner->banner_image->url ?>" draggable="true" alt="baner-image" class="img-fluid border rounded banner-img-draggable" style="height: 100px; object-fit: cover; cursor: move;">
                                                                <?php
                                                            } else {
                                                                ?>
                                                                <img src="<?php echo $urls->images ?>image-placeholder.jpg" alt="baner-image" class="img-fluid border rounded" style="height: 100px;">
                                                                <?php
                                                            }
                                                            ?>
                                                        <h6 class="text-black-50 mt-3"><?php echo $banner->banner_name ?></h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <?php
                                        }
                                        ?>

                                        <nav class="mt-3" aria-label="Navigation">
                                            <?php echo $pagination; ?>
                                        </nav>

                                    </div>

                                </div>

                                <div class="add-banner tab-pane fade" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">
                                    <form enctype="multipart/form-data" method="post" id="add-banner" name="add-banner" class="img-cropper">
                                        <div class="row justify-content-center">

                                            <div class="col-12 col-lg-6 mb-3">
                                                <div class="input-group input-group-lg input-group-round">
                                                    <label class="text-uppercase px-3">Nazwa:</label>
                                                    <div class="input-group-inner">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text input-group-icon"><i class="fa fa-gift"></i></span>
                                                        </div>

                                                        <input autocomplete="off" type="text" class="form-control form-control-lg" id="banner_name" name="banner_name"
                                                               required="true"
                                                               oninput="this.setCustomValidity('')"
                                                               oninvalid="this.setCustomValidity('Nazwa jest wymagana.')"
                                                               data-msg-required="Nazwa usługi jest wymagana."
                                                               data-inputmask-regex="[A-Za-z\sążźćłóęńśĄŻŹĆŁÓĘŃŚ]+"
                                                        />

                                                        <div class="input-focus-bg"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-none d-lg-flex col-6">
                                                <p class="kbf-form-info align-self-center">
                                                    Wpisz nazwę banera. <br/>Wypełnienie pola jest wymagane.
                                                </p>
                                            </div>

                                            <div class="col-12 mb-4 text-carrot error d-none">W celu wysłania formularza należy wypełnić pole "Nazwa".</div>

                                            <div class="col-12 col-lg-6 mb-3">
                                                <div class="form-group">
                                                    <label class="text-uppercase px-3">Odnośnik:</label>
                                                    <input type="text" class="form-control form-round form-control-lg" id="banner_target_url" name="banner_target_url" >
                                                </div>
                                            </div>
                                            <div class="d-none d-lg-flex col-6">
                                                <p class="kbf-form-info align-self-center">
                                                    To link do strony, do której baner zaprowadzi po kliknięciu.
                                                    (jeśli nie zostanie podany nastąpi przekierowanie na stronę szczegółów firmy w portalu KBF)
                                                </p>
                                            </div>

                                            <label class="text-uppercase font-weight-bold px-3 mt-3">Grafika - baner - wyświetlany na monitorach:</label>
                                            <div class="image_area col-12 col-lg-12">

                                                <label for="upload_image" class="w-100">
                                                    <img src="<?php echo $urls->images ?>image-placeholder.jpg" id="uploaded_image" class="d-block mx-auto img-fluid img-thumbnail" />
                                                    <div class="overlay" id="selectImage">
                                                        <div class="text">Kliknij aby wybrać obraz.</div>
                                                    </div>
                                                    <input type="file" class="image" id="upload_image" accept="image/*" style="display:none" />
                                                </label>
                                            </div>
                                            <div class="d-none d-lg-flex col-12">
                                                <p class="kbf-form-info align-self-center m-auto">
                                                    Kliknij aby wybrać plik. Grafika jest wymagana. Minimalna rozdzielczość zapewniająca dobrą jakość wyświetlanego obrazu to 1920x140px.
                                                </p>
                                            </div>

                                            <label class="text-uppercase font-weight-bold px- mt-5">Grafika - baner - wyświetlany na urządzeniach mobilnych:</label>
                                            <div class="image_area col-12 col-lg-12">
                                                <label for="upload_image_mobile" class="w-100">
                                                    <img src="<?php echo $urls->images ?>image-placeholder.jpg" id="uploaded_image_mobile" class="d-block mx-auto img-fluid img-thumbnail" />
                                                    <div class="overlay" id="selectImage">
                                                        <div class="text">Kliknij aby wybrać obraz.</div>
                                                    </div>
                                                    <input type="file" class="image" id="upload_image_mobile" accept="image/*" style="display:none" />
                                                </label>
                                            </div>
                                            <div class="d-none d-lg-flex col-12">
                                                <p class="kbf-form-info align-self-center m-auto">
                                                    Kliknij aby wybrać plik. Grafika jest wymagana. Minimalna rozdzielczość zapewniająca dobrą jakość wyświetlanego obrazu to 600x140px.
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
                                                            <div class="col-md-12">
                                                                <img src="" id="sample_image" />
                                                            </div>
                                                            <div class="col-md-12 text-center mt-3">
                                                                <p>Podgląd przyciętego obrazu</p>
                                                                <div class="preview mx-auto img-thumbnail" style="width: 100% !important;"></div>
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

                                    <div class="modal fade" id="modalMobile" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
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
                                                            <div class="col-md-12">
                                                                <img src="" id="sample_image_mobile" />
                                                            </div>
                                                            <div class="col-md-12 text-center mt-3">
                                                                <p>Podgląd przyciętego obrazu</p>
                                                                <div class="preview mx-auto img-thumbnail" style="width: 100% !important;"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Wróć</button>
                                                    <button type="button" id="cropMobile" class="btn btn-primary">Przytnij</button>
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
<script src="<?php echo $urls->js ?>dashboard-banners.js"></script>
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
