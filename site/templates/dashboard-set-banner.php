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

$banners_container = $company_page->get('name=banery');
$page_title = $sanitizer->text($page->title);


if (!$input->get('id') || !$input->get('type')) {
    wire('session')->redirect($pages->get('template=dashboard')->url);
}

$bannerId = $input->get('id');
$bannerType = $input->get('type');
$newBanner = $pages->get($bannerId);
$message = "";

if($bannerType === 'INDEX') {
    $message = "Nowy baner reklamowy na stronie głównej.";
}
if($bannerType === 'INDUSTRY') {
    $message = "Nowy baner reklamowy na stronie firm.";
}
if($bannerType === 'JOB') {
    $message = "Nowy baner reklamowy na stronie ofert pracy.";
}

$bannerIndex = $banners_container->get('template=banner, banner_location_index=1');
$bannerIndustries = $banners_container->get('template=banner, banner_location_industry=1');
$bannerJobs = $banners_container->get('template=banner, banner_location_job=1');

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>

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
                            <p>Proszę potwierdzić ustawienie nowego banera reklamowego.</p>

                            <p>Stan konta firmy zostanie pomniejszony o kwotę zakupu baneru w przypadku gdy baner nie jest aktywny/zakupiony.</p>
                            <p class="mb-5">(Gdy firma nie posiada wymaganej kwoty, nastąpi przekierowanie na stronę z możliwością zapłaty/doładowania konta.)</p>

                            <h6 class="font-weight-700 mb-4 section-title-4 text-center"><?= $message ?></h6>
                            <img src="<?php echo $newBanner->banner_image->url ?>" alt="" class="img-fluid border rounded mb-5" style="height: 100px; object-fit: cover;" />

                            <div class="row">
                                <div class="col-12 col-lg-6 text-center text-md-right align-self-center mt-4 mx-auto">
                                    <form method="post" action="<?= $pages->get('template=dashboard-banners')->url ?>" name="dashboard-edit-job" class="mt-5">
                                        <input type="hidden" name="action" value="set-banner">
                                        <input type="hidden" name="id" value="<?= $bannerId ?>">
                                        <input type="hidden" name="type" value="<?= $bannerType ?>">
                                        <div class="row justify-content-center">
                                            <div class="col-12 col-md-6">
                                                <button type="button" onclick="window.history.back()" class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">
                                                    Wróć
                                                </button>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <button type="submit" class="send-cv btn btn-round btn-block shadow-none btn-primary mr-lg-4">Potwierdź</button>
                                            </div>
                                        </div>
                                    </form>
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
<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard-set-banner.js"></script>
</body>
</html>
