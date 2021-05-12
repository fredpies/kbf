<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

// Przygotuj dane o firmie
$company_data = get_company_data($page, $sanitizer);
$lat = $company_data["lat"];
$lon = $company_data["lon"];
$company_description_html = $company_data["company_description_html"];
$company_keywords = $company_data["company_keywords"];

// Zarejestrowane produkty firmy
$products_group = $page->find("title=Produkty");
if ($products_group->count()) $products = $products_group[0]->children();
else $products = array();

// Uslugi firmy
$services_group = $page->find("title=Usługi");
if ($services_group->count()) $company_services = $services_group[0]->children();
else $company_services = array();

// Oferty pracy
$jobs_group = $page->find("title=Oferty Pracy");
if ($jobs_group->count()) $jobs = $jobs_group[0]->children();
else $jobs = array();

$job_excerpt_background_image = $urls->images . "upload/service-card-box-01.png";

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="<?php echo $urls->css ?>leaflet.css">
</head>
<body>

<!-- Preloader -->
<?php //include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Content -->
<div class="main-content py-0">
    <div class="container">

        <!-- Company info-->
        <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">INFORMACJE O FIRMIE</h3>

        <div class="bg-white p-md-5 px-4 rounded-xl shadow-sm mb-3 mb-md-5">

            <!-- Company details -->
            <div class="row">
                <div class="col-12 col-md-7 px-0">
                    <?php  show_company_info($pages, $company_data); ?>
                </div>

                <!-- Minimap -->
                <div class="col-12 col-md-4 my-3 my-md-0 no-gutters">
                    <div id="kbf-minimap" data-lat="<?php if(isset($lat) && !empty($lat)) echo $lat; ?>" data-lon="<?php if(isset($lon) && !empty($lon)) echo $lon; ?>"></div>
                </div>
                <div class="col-12 col-md-1 text-center text-md-right mb-3">
                    <a href="#" class="text-dark tooltip-btn p-1 mr-n1" data-toggle="tooltip" data-placement="right" title="Dodaj do ulubionych">
                        <img src="<?php echo $urls->images ?>heart.svg" alt="heart-image" class="d-inline-block">
                    </a>
                </div>
                <div class="col-12">

                    <?php

                    // Opis firmy
                    if (!empty($company_description_html))
                        echo "<div class=\"company-description my-2 my-md-4\">" . $company_description_html . "<div style=\"z-index: 0;\" class=\"header-shadow-wrapper d-sm-none\"></div>" . "</div>";
                    ?>

                </div>

            </div>

            <!-- Company products phone -->
            <?php
            if (count($products) > 0) {
                echo "<div class=\"company-products-phone  d-sm-none font-weight-600 my-4 text-primary text-uppercase\">Produkty</div>";
                echo "<div class=\"d-sm-none font-weight-600 mt-4 position-relative text-primary text-uppercase\">";

                foreach ($products as $product) {

                    $product_data = get_product_data($product, $sanitizer);
                    show_product_info($product_data, $sanitizer, "phone");

                }

                echo "</div>";
            }

            ?>

            <!-- Company services phone -->
            <?php

            if (count($company_services) > 0) {
                echo "<div class=\"company-products-phone d-sm-none font-weight-600 my-4 text-primary text-uppercase\">Usługi</div>";
                echo "<div class=\"d-sm-none font-weight-600 mt-4 position-relative text-primary text-uppercase\">";

                foreach ($company_services as $company_service) {

                    $service_data = get_service_data($company_service, $sanitizer);
                    show_service_info($service_data, $sanitizer, "phone");

                }

                echo "</div>";
            }

            ?>

            <!-- Company jobs phone -->
            <?php

            if (count($jobs) > 0) {

                echo "<div class=\"company-jobs-phone d-sm-none font-weight-600 my-4 text-primary text-uppercase\">oferty pracy</div>";
                echo "<div class=\"row d-sm-none px-3\">";

                foreach ($jobs as $job) {
                        $job_data = get_job_data($job, $sanitizer);
                        show_job_info($urls, $job_data, "phone");
                }

                echo "</div>";
            }

            ?>

            <!-- Tabs-->
            <div class="row pb-4 mb-5">
                <div class="col d-none d-sm-block mt-sm-4">
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="active company-products nav-item nav-link" id="nav-first-tab" data-toggle="tab"
                               href="#company-products-pane" role="tab" aria-controls="company-products-pane"
                               aria-selected="true">PRODUKTY</a>
                            <a class="company-services nav-item nav-link" id="nav-second-tab" data-toggle="tab"
                               href="#company-services-pane" role="tab" aria-controls="nav-profile"
                               aria-selected="false">Usługi</a>
                            <a class="company-jobs nav-item nav-link" id="nav-third-tab" data-toggle="tab"
                               href="#company-jobs-pane" role="tab" aria-controls="company-jobs-pane"
                               aria-selected="false">oferty pracy</a>
                        </div>
                    </nav>

                    <div class="tab-content" id="nav-tabContent">

                        <!-- Company products -->
                        <div class="tab-pane fade active show" id="company-products-pane" role="tabpanel"
                             aria-labelledby="nav-first-tab">

                            <?php
                            if (count($products) === 0) echo "<p>Firma nie posiada aktualnie zarejestrowanych produktów.</p>";
                            if (count($products) > 0) {

                                echo "<div class=\"row\">";

                                foreach ($products as $product) {

                                    $product_data = get_product_data($product, $sanitizer);
                                    show_product_info($product_data, $sanitizer);

                                }

                                echo "</div>";
                            }

                            ?>


                        </div>
                        <div class="tab-pane fade" id="company-services-pane" role="tabpanel"
                             aria-labelledby="nav-second-tab">

                            <!-- Company services -->
                            <?php

                            if (count($company_services) === 0) echo "<p>Firma nie posiada aktualnie zarejestrowanych usług.</p>";

                            if (count($company_services) > 0) {

                                echo "<div class=\"row\">";

                                foreach ($company_services as $company_service) {

                                    $service_data = get_service_data($company_service, $sanitizer);
                                    show_service_info($service_data, $sanitizer);

                                }

                                echo "</div>";
                            }


                            ?>

                        </div>

                        <div class="tab-pane fade" id="company-jobs-pane" role="tabpanel"
                             aria-labelledby="nav-third-tab">

                            <!-- Company jobs-->
                            <?php

                            if (count($jobs) === 0 ) echo "Firma nie posiada aktualnie zarejestrowanych ofert pracy.";
                            if (count($jobs) > 0) {

                                echo "<div class=\"row\">";
                                foreach ($jobs as $job) {
                                    $job_data = get_job_data($job, $sanitizer);
                                    show_job_info($urls, $job_data); // Urls jest wymagane do lokalizacji obrazow
                                }
                            }
                            echo "</div>"

                            ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Leaflet js -->
<script src="<?php echo $urls->js ?>vendor/leaflet.js"></script>

<!-- Leaflet Providers js -->
<script src="<?php echo $urls->js ?>vendor/leaflet-providers.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>company.js"></script>
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
