<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

// Przygotuj dane o ofercie pracy
$job_data = sanitize_job_data($page);

// Przygotuj dane o firmie
$company_data = sanitize_company_data($job_data["job_company"]);
$company_keywords = $company_data["company_keywords"]; // Potrzebne do SEO

// Inne oferty pracy firmy
$other_job_offers = $job_data["siblings"];

// Wysylanie cv
$send_cv_page_url = $pages->get("template=send-cv")->url;

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

<!-- Content -->
<div class="main-content py-0 mt-4">

    <div class="container">

        <!-- Title -->
        <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">OFERTA PRACY</h3>
        <div class="row">

            <!-- Company info -->
            <div class="col-12 col-md-6 col-xl-7 px-0">
                <?php render_company_info($company_data);?>
            </div>
            <!-- End company info -->

            <!-- Right offer info-->
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
            <!-- End of right offer info-->

            <!-- Left dark panel-->
            <div class="col-12 col-xl-4 mb-4">
                <div class="bg-image bg-viridian-100 border-0 card shadow text-white" data-img-src="<?php echo $urls->images ?>upload/service-card-box-01.png" style="height: 100%;">
                    <div class="card-body company-job-description company-job-description-full position-relative">
                        <div class="card-text">Poszukujemy osoby na stanowisko: <h5 class="d-block font-weight-600 my-3 text-warning"><?php echo $job_data["job_name"] ?></h5>
                        <?php echo $job_data["job_description"] ?>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of left dark panel-->

            <!-- Job details-->
            <div class="col-12 col-xl-8">
                <div class="job-details mb-xl-4 row">
                    <div class="col-md-4 mb-4 mb-xl-0">
                        <div class="card job-responsibilites" style="height: 100%;">
                            <div class="card-body px-md-2 px-lg-3 py-3">
                                <h5 class="card-title pl-md-1">Zakres obowiązków</h5>
                                <ul class="list-group list-group-flush pb-0">

                                    <?php

                                    // Zakres obowiazkow
                                    if (count($job_data["job_responsibilities"]) > 0) {
                                        foreach ($job_data["job_responsibilities"] as $job_responsibility) {
                                            echo "<li class=\"list-group-item\">$job_responsibility->job_responsibility</li>";
                                        }
                                    }
                                    ?>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-xl-0">
                        <div class="card job-requirements" style="height: 100%;">
                            <div class="card-body px-md-2 px-lg-3 py-3">
                                <h5 class="card-title pl-md-1">Wymagania</h5>
                                <ul class="list-group list-group-flush pb-0">

                                    <?php

                                    // Wymagania
                                    if (count($job_data["job_requirements"]) > 0) {
                                        foreach ($job_data["job_requirements"] as $job_requirement) {
                                            echo "<li class=\"list-group-item\">$job_requirement->job_requirement</li>";
                                        }
                                    }
                                    ?>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4 mb-xl-0">
                        <div class="card job-requirements" style="height: 100%;">
                            <div class="card-body px-md-2 px-lg-3 py-3">
                                <h5 class="card-title pl-md-1">Nasza oferta</h5>
                                <ul class="list-group list-group-flush pb-0">

                                    <?php

                                    // Oferta pracodawcy
                                    if (count($job_data["job_offers"]) > 0) {
                                        foreach ($job_data["job_offers"] as $job_offer) {
                                            echo "<li class=\"list-group-item\">$job_offer->job_offer</li>";
                                        }
                                    }
                                    ?>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of job details-->



            <!-- Send cv-->
            <div class="col-12 col-lg-4 mx-auto">

                    <form method="get" action="<?= $send_cv_page_url ?>">

                        <div class="col-12 text-center text-md-right align-self-center mt-4">
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-5">
                                    <button type="submit" class="send-cv btn btn-round btn-block shadow-none btn-primary mr-lg-4">Wyślij CV</button>
                                </div>
                                <div class="col-12 col-md-5">
                                    <button type="button"
                                            class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">
                                        Powrót
                                    </button>
                                </div>
                            </div>
                        </div>

                        <input name="company_id" value="<?= $company_data["company_id"] ?>" type="hidden">
                        <input name="job_id" value="<?= $job_data["job_id"] ?>" type="hidden">

                    </form>

            </div>
            <!-- End of send cv-->


            </div>
        <!-- End of title -->

        <!-- More jobs -->
        <?php

        // Wyswietl inne oferty pracy pracodawcy jezeli istnieja
        if (count($other_job_offers) > 0) {
            echo "<h3 class=\"font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase\">Zobacz również</h3>";
            echo "<div class=\"row d-none d-sm-flex mb-5\">";

            $offer_counter = 1;
            $max_offers = 6; // Maksymalna liczna innych ofert do wyswietlenia

            foreach ($other_job_offers as $other_job_offer) {
                if ($offer_counter > $max_offers) break;
                $job_data = sanitize_job_data($other_job_offer);
                render_job_info($job_data);
                $offer_counter++;
            }

            echo "</div>";

            // Oferty dla telefonu
            echo "<div class=\"row d-sm-none\">";
            echo "<div class=\"col-md-6 col-lg-4\">";

            foreach ($other_job_offers as $other_job_offer) {
                if ($offer_counter > $max_offers) break;
                $job_data = sanitize_job_data($other_job_offer);
                render_job_info($job_data, "phone");
                $offer_counter++;
            }

            echo "</div></div>";

        }

        ?>

</div>


<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Main script -->
<script src="<?php echo $urls->js ?>job.js"></script>
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
