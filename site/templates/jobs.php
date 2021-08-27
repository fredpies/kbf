<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$input = wire('input');
$urls = wire('urls');
$pages = wire('pages');

// Pobierz tablice sub branz jezeli podano branze
if ($input->industry) {
    $sub_industry = get_sub_industries($input->industry);
}

// Pobierz sub branze jezeli wystepuja
if ($input->sub_industry) {
    $sub_industry = $input->sub_industry;
}

// Pobierz dane o ofertach pracy na podstawie filtra
$jobs = $pages->find(get_filter_selector($input, 'job'));

// Paginacja ofert pracy
$pagination = get_pagination($jobs);

// Mapa
$map_url = $pages->get("template=map")->url;

// Strona glowna
$home_page_url = $pages->get(1)->url;

?>

<!DOCTYPE html>
<html lang="pl">
<head>

    <?php include_once "partials/_head.php" ?>

    <!-- Perfect scrollbar-->
    <link rel="stylesheet" href="<?php echo $urls->css?>perfect-scrollbar.css">

</head>
<body>

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Page title -->
<div class="bg-light">
    <div class="container">
        <div class="row pt-5 pb-2">

            <div class="col-12 col-lg-4 ">
                <h5 class="font-weight-800 mb-0 text-center text-lg-left">OFERTY PRACY</h5>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center justify-content-lg-start px-0 mb-0">
                        <li class="breadcrumb-item text-uppercase"><a href="<?php echo $home_page_url ?>">Strona główna</a></li>
                        <li class="breadcrumb-item text-uppercase text-nowrap active" aria-current="page">Oferty pracy
                        </li>
                    </ol>
                </nav>

            </div>


        </div>
    </div>
</div>

<!-- Content -->
<div class="main-content bg-light py-0">

    <div class="section">
        <div class="container">
            <div class="row">

                <!-- Sidebar -->
                <div class="col-lg-4">
                    <div class="pb-3 mb-3">
                        <div class="bg-white rounded-xl shadow-sm py-5">

                            <form autocomplete="off" method="get" role="form" action="<?= $pages->get("template=jobs")->url; ?>">

                                <div class="px-4 px-md-5 px-lg-4 px-xl-5">
                                    <div class="input-group input-group-lg input-group-round w-100">
                                        <div class="input-group-inner">
                                            <input name="keywords" type="text" style="font-size: 0.83rem" class="form-control form-control-md" value="<?php if (isset($keywords)) echo $keywords ?>">
                                            <div class="input-group-append">
                                                <button class="kbf-search-button btn btn-round btn-primary shadow-none mb-0"
                                                        type="submit">Szukaj
                                                </button>
                                            </div>
                                            <div class="input-focus-bg"></div>
                                        </div>
                                    </div>

                                    <div class="my-2" style="font-size: 0.75rem;"><span class="text-right"><i class="fas fa-info text-primary mr-2"></i></span>Wpisz dowolne wyrażenie (frazę) w polu
                                        wyszukiwania w celu ograniczenia listy wyników.
                                    </div>
                                    <a href="<?php echo $map_url ?>" style="font-size: 0.83rem" class="d-block mt-4 text-primary">Wyszukaj na mapie</a>
                                    <div class="mb-2 mt-2" style="font-size: 0.75rem;"><span class="text-right"><i class="fas fa-info text-primary mr-2"></i></span>Możesz zlokalizować firmy na mapie
                                        wybierając powyższy link.
                                    </div>

                                </div>
                                <hr>

                                <div class="text-center d-lg-none">
                                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                            data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <i class="fas fa-bars fa-lg mt-4"></i>
                                    </button>
                                </div>

                                <div class="my-2 px-5 d-lg-none" style="font-size: 0.75rem;"><span class="text-right"><i
                                                class="fas fa-info text-primary mr-2"></i></span>
                                    Użyj powyższego przycisku filtrowania w celu ograniczenia liczby wyników według zadanych kryteriów.
                                </div>


                                <div id="sidebarMenu" class="d-lg-block collapse">

                                    <!-- Industries switcher-->
                                    <div class="row">
                                        <h6 class="font-weight-700 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">BRANŻA</h6>

                                        <div data-name="industry" id="industries" class="dropdown col-12 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">
                                            <button class="btn btn-round btn-primary px-3 mx-0 mb-3 mb-md-0 dropdown-toggle w-full"
                                                    type="button"
                                                    id="industries-button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                            </button>
                                        </div>

                                        <div data-name="sub-industry" id="sub-industries" class="dropdown col-12 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">
                                            <button class="btn btn-round btn-primary px-3 mx-0 mb-2 dropdown-toggle w-full"
                                                    type="button"
                                                    id="sub-industries-button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                            </button>
                                        </div>

                                        <div data-name="sub-sub-industry" id="sub-sub-industries" class="dropdown col-12 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">
                                            <button class="btn btn-round btn-primary px-3 mx-0 mb-2 dropdown-toggle w-full"
                                                    type="button"
                                                    id="sub-industries-button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                            </button>
                                        </div>

                                    </div>
                                    <!-- End of industries switcher-->

                                    <!-- Provinces area switcher-->
                                    <div class="list-group list-group-flush py-0">
                                        <div class="kbf-index-area-switcher row">
                                            <h6 class="font-weight-700 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">
                                                WOJEWÓDZTWO</h6>
                                            <div data-start-value="<?php if (isset($input->province_name) && $input->province_name !== 'Wszystkie') echo $input->province_name ?>"
                                                 data-name="province_name" id="provinces"
                                                 class="dropdown col-12 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">
                                                <button class="btn btn-round btn-primary px-3 mx-0 mb-3 mb-md-0 dropdown-toggle w-100"
                                                        type="button"
                                                        id="provinces-button" data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false"></button>
                                            </div>

                                            <h6 class="font-weight-700 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">POWIAT</h6>
                                            <div data-start-value="<?php if (isset($input->area_name) && $input->area_name !== 'Wszystkie') echo $input->area_name ?>" data-name="area_name" id="areas"
                                                 class="dropdown col-12 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">
                                                <button class="btn btn-round btn-primary px-3 mx-0 mb-0 dropdown-toggle w-100"
                                                        type="button" id="areas-button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false"></button>
                                            </div>
                                        </div>
                                        <!-- End of provinces area switcher-->

                                    </div>
                                    <!-- End of provinces area switcher-->

                                    <div class="row">
                                        <div class="col-12 px-4 px-md-5 px-lg-4 px-xl-5 mt-5">
                                            <button type="submit" class="kbf-filter-button btn btn-round btn-warning btn-block">Filtruj</button>
                                        </div>
                                    </div>

                            </form>

                            <form method="get" action="<?= $pages->get("template=companies")->url; ?>" role="form">
                                <div class="row">
                                    <div class="col-12 px-4 px-md-5 px-lg-4 px-xl-5 mt-2">
                                        <button type="submit" class="kbf-reset-button btn btn-round btn-danger btn-block">Wyczyść</button>
                                    </div>
                                </div>

                            </form>

                        </div>


                    </div>
                </div>
                <!-- End of sidebar-->

            </div>

                <!-- Content body -->
                <div class="col-lg-8">

                    <div class="pb-3 mb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <h5 class="font-weight-700 section-title-4 text-left pb-2 mb-1">
                                Oferty pracy
                            </h5>

                            <div class="row">
                                <div class="col-12 col-xl-7">
                                    <div class="font-weight-400">Liczba znalezionych ofert pracy: <span class="font-weight-600"><?php echo $jobs->getTotal() ?></span></div>

                                    <?php

                                    if ( $jobs->getTotal() > 0 ) echo '<div class="my-3" style="font-size: 0.75rem;"><span class="text-right"><i class="fas fa-info text-primary mr-2"></i></span>Wybierz ofertę pracy w celu wyświetlenia szczegółów.</div>';
                                    else echo '<div class="my-3" style="font-size: 0.75rem;"><span class="text-right"><i class="fas fa-info text-primary mr-2"></i></span>Zmień kryteria wyszukiwania aby wyświetlić oferty pracy.</div>';

                                    ?>


                                </div>

                                <div class="col-12 col-xl-5"></div>

                            </div>


                            <nav class="mt-3" aria-label="Companies navigation">
                                <?php

                                // Paginacja
                                echo $pagination
                                ?>
                            </nav>


                            <?php
                                // Lista ofert pracy
                                foreach ($jobs as $job) {
                                    $jobs_data = sanitize_job_data($job);
                                    render_job_list_item($jobs_data);
                                }
                            ?>


                            <nav class="mt-3" aria-label="Companies navigation">
                                <?php

                                // Paginacja
                                echo $pagination
                                ?>
                            </nav>

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
<script src="<?php echo $urls->js ?>jobs.js"></script>
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
