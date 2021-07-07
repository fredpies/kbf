<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$pages = wire('pages');
$sanitizer = wire('sanitizer');
$session = wire('session');
$urls = wire('urls');

$home_page_url = $pages->get(1)->url;

if (isset($input->company_id)) {
    $company_id = $sanitizer->selectorValue($input->company_id);
}
else $session->redirect($home_page_url);

if (isset($input->job_id)) {
    $job_id = $sanitizer->selectorValue($input->job_id);
}
else $session->redirect($home_page_url);

$company_page = $pages->get("template=company,company_id=$company_id");
$company_page->of(false);
$current_cv_counter = $sanitizer->int($company_page->company_cv_counter);
$current_cv_counter = ++$current_cv_counter;
$company_page->company_cv_counter = $current_cv_counter;
$company_page->save();
$company_page->of(true);

// Przygotuj dane
$company_data = sanitize_company_data($company_page);
$job_data = sanitize_job_data($pages->get("template=job,id=$job_id"))

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>

</head>
<body>

<!-- Preloader -->
<?php //include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Content -->
<div class="main-content py-0 mt-4">
    <div class="container">
        <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">OFERTA PRACY</h3>
        <div class="row">
            <div class="col-12 col-md-6 col-xl-7 px-0">
                <?php render_company_info($company_data);?>
            </div>

            <div class="col-md-6 col-xl-5">
                <div class="job-description mt-md-0 my-4">
                    <div class="job-info">
                        <div class="job-info-element mb-3">
                            <div class="no-gutters row">
                                <div class="col-3 col-lg-1 col-sm-2 d-flex flex-column justify-content-center info-element-icon">
                                    <img class="d-block h-50 mx-auto w-100" src="<?php echo $urls->images ?>pin.svg" alt="area">
                                </div>
                                <div class="col-9 col-sm-10 d-flex flex-column justify-content-center">
                                    <div class="info-element-contents p-2">
                                        <span class="d-block font-weight-700"><?php echo $job_data["job_city"] ?></span>
                                        <span class="d-block"><?php echo $job_data["job_province_name"] ?></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="job-info-element mb-3">
                            <div class="no-gutters row">
                                <div class="col-3 col-lg-1 col-sm-2 d-flex flex-column justify-content-center info-element-icon">
                                    <img class="d-block h-50 mx-auto w-50" src="<?php echo $urls->images ?>clock.svg" alt="expire">
                                </div>
                                <div class="col-9 col-sm-10 d-flex flex-column justify-content-center">
                                    <div class="info-element-contents p-2">
                                        <span class="d-block font-weight-700">Oferta ważna do :</span>
                                        <span class="d-block"><?php echo $job_data["job_expire"] ?></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="job-info-element mb-3">
                            <div class="no-gutters row">
                                <div class="col-3 col-lg-1 col-sm-2 d-flex flex-column justify-content-center info-element-icon">
                                    <img class="d-block h-50 mx-auto w-100" src="<?php echo $urls->images ?>businessman.svg" alt="job type">
                                </div>
                                <div class="col-9 col-sm-10 d-flex flex-column justify-content-center">
                                    <div class="info-element-contents p-2">
                                        <span class="d-block font-weight-700">Rodzaj etatu :</span>
                                        <span class="d-block"><?php echo $job_data["job_type"] ?></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">Potwierdzenie</h3>
            <div class="bg-white rounded-xl shadow-sm mb-3 mb-md-5">
                <div class="card-body pt-0">

                    <?= render_alert('Aplikacja została wysłana do pracodawcy. Po jej rozpatrzeniu otrzymasz powiadomienie na adres e-mail podany w formularzu.', 'primary', false); ?>

                    <div class="col-12 d-flex mt-5">
                        <button type="button" class="kbf-back-button d-inline-block mt-0 mx-auto btn btn-round shadow-none btn-secondary">Wróć do oferty</button>
                    </div>

                </div>

                <hr class="mb-3 mb-md-0">

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

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>send-cv-confirmation.js"></script>
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
