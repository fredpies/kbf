<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$urls = wire('urls');
$pages = wire('pages');

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once "partials/_head.php" ?>
    <!-- Perfect scrollbar-->
    <link rel="stylesheet" href="<?php echo $urls->css ?>perfect-scrollbar.css">
</head>
<body id="home">

<!-- Footer for desktop -->
<div class="desktop-footer d-none d-md-block">
    <?php include_once "partials/_footer.php" ?>
</div>

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Banner -->
<?php include "partials/banner-index.php" ?>

<!-- Top Search Section -->
<div id="home-top-section" class="bg-image overflow-hidden" data-img-src="<?php echo $urls->images ?>section1-bg.png">

    <div class="row">

        <div id="industriesSidebar" class="col-3 d-none d-xl-block bg-light text-dark-gray pt-3">

            <p class="text-center mb-1">Wybierze branżę</p>

            <div class="row px-3">
                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=ADMINISTRACJA, URZĘDY I FUNDACJE" ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-blush add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/overview-icon-01.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">ADMINISTRACJA, URZĘDY I FUNDACJE</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=BIURO I DOM" ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-secondary add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-15.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">BIURO I DOM</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=BUDOWNICTWO I WYPOSAŻENIE"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-warning add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-02.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">BUDOWNICTWO I WYPOSAŻENIE</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=EDUKACJA, NAUKA, KULTURA, SZTUKA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-indigo add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/pen-info.svg" alt="icon" class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">EDUKACJA, NAUKA, KULTURA, SZTUKA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=MEDIA, KOMPUTERY, INTERNET, REKLAMA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-success add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/service-info-box-icon-04.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">MEDIA, KOMPUTERY, INTERNET I REKLAMA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=MEDYCYNA, ZDROWIE I URODA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-primary add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/overview-icon-03.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">MEDYCYNA, ZDROWIE I URODA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=MOTORYZACJA, TRANSPORT, KOMUNIKACJA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-carrot add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-06.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">MOTORYZACJA, TRANSPORT, KOMUNIKACJA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=PRACA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-sky add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-13.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">PRACA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-cente mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=PRAWO, FINANSE, TŁUMACZENIA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-orchid add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/service-icon-25.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">PRAWO, FINANSE, TŁUMACZENIA</h6>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=PRZEMYSŁ, AUTOMATYKA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-rose add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-04.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">PRZEMYSŁ, AUTOMATYKA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=TURYSTYKA, SPORT, REKREACJA, HOTELE"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-indigo add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/overview-icon-02.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">TURYSTYKA, SPORT, REKREACJA, HOTELE</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=WŁÓKIENNICTWO, ODZIEŻ, OBUWIE"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-success add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/hero-banner-3-icon-02.svg" alt="icon"
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">WŁÓKIENNICTWO, ODZIEŻ, OBUWIE</h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-xl-4"></div>
                <div class="col-lg-6 col-xl-4">
                    <div class="icon-info-5 text-center mt-2 mb-2">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO, OGRODNICTWO"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-2 bg-scarlet add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/hero-banner-3-icon-03.svg" alt="icon"
                                     class="img-fluid" industriesSidebar>
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700">ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO,
                                    OGRODNICTWO</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-4"></div>
            </div>

            <button id="industriesSidebarButton" class="d-none d-xl-block btn btn-sm btn-round btn-warning mt-5 sidebarActionButton">Branże</button>

        </div>

        <div id="top-section" class="w-100">

            <div class="container pt-5 pt-lg-0 h-100">

                <div class="row no-gutters justify-content-center h-100">

                    <div class="col-12 col-lg-6 col-lg-4 col-xl-5 px-4 d-flex">

                        <div class="align-self-center w-100">
                            <div class="align-self-center align-self-xl-start w-100 px-md-5 mt-2 mt-lg-3 mb-3">
                                <div class="text-center text-lg-left add-animate slide-animate" data-animated="fadeInRight">

                                    <form action="<?= $pages->get("template=companies")->url; ?>" type="GET">
                                        <div class="row">
                                            <div class="col">
                                                <p style="color: white; font-size: 0.8rem !important;" class="text-left w-100 mb-1">Szukana
                                                    fraza</p>
                                                <div class="input-group input-group-sm input-group-round mb-3">
                                                    <div class="input-group-inner">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text input-group-icon"><i
                                                                        class="fa fa-search" aria-hidden="true"></i></span>
                                                        </div>
                                                        <input id="search" autocomplete="off" type="text" name="keywords"
                                                               class="form-control form-control-sm">
                                                        <div class="bg-white input-focus-bg"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!--  Provinces area switcher-->
                                        <div class="kbf-index-area-switcher row no-gutters justify-content-between">
                                            <div data-name="province_name" id="provinces"
                                                 class="dropdown col-12 col-xl-6 mb-2">
                                                <label style="font-size: 0.8rem !important;" class="text-left w-100 mb-1" for="provinces-button">Województwo</label>
                                                <button style="font-size: 0.65rem !important;" class="btn btn-sm btn-round btn-primary px-2 mx-0 mb-3 mb-md-0 dropdown-toggle w-full"
                                                        type="button"
                                                        id="provinces-button" data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false"></button>
                                            </div>

                                            <div data-name="area_name" id="areas" class="dropdown col-12 col-xl-6">
                                                <label style="font-size: 0.8rem !important;" class="text-left w-100 mb-1" for="areas-button">Powiat</label>
                                                <button style="font-size: 0.65rem !important;" class="btn btn-sm btn-round btn-primary px-2 mx-0 mb-0 dropdown-toggle w-full"
                                                        type="button" id="areas-button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false"></button>
                                            </div>
                                        </div>
                                        <button type="submit"
                                                class="kbf-search w-100 btn btn-round btn-sm btn-warning mt-5 mt-lg-3">Znajdź firmę
                                        </button>
                                    </form>


                                </div>
                            </div>
                            <div style="font-size: 0.8rem !important;" class="d-none d-lg-block align-self-end align-self-xl-start px-5 my-5 mt-xl-0">
                                <h2 style="font-size: 1.5rem !important;" class="font-weight-800 text-white mb-3 mt-5 mb-3 mt-0 px-2">Znajdź firmę<br>gdziekolwiek
                                    jesteś</h2>

                                <div class="text-white-75 pb-3 px-2">KBF to ogólnopolski Katalog Branżowy Firm,
                                    baza firm, instytucji i urzędów. Wpisz w polu wyszukiwania frazę, określ rejon i wciśnij
                                    “ZNAJDŻ FIRMĘ”.
                                </div>

                                <div class="text-white-75 pb-1 mb-4 px-2">Jeśli chcesz zlokalizować firmę na mapie,
                                    wybierz “SZUKAJ NA MAPIE”.
                                </div>

                            </div>
                        </div>

                    </div>
                    <div style="max-height: 100%" class="position-relative col-12 col-md-6 col-lg-5 px-0 d-flex justify-content-center">
                        <img class="align-self-end img-fluid" style="transform: translateX(-3%); max-width: 100%; max-height: 90%" src="<?= $urls->images ?>phone-map-hand.png" alt="image">
                        <div class="button-container d-flex justify-content-center">
                            <a href="/kbf/mapa/" class="btn btn-round btn-sm btn-primary on-img-button mb-0 d-inline-block align-self-center">Szukaj na mapie</a>
                        </div>
                    </div>


                </div>


            </div>


        </div>
    </div>
</div>

<!-- Content -->
<div class="main-content py-0">

    <!-- Industries section -->
    <div class="section bg-light d-xl-none">
        <div class="container">

            <div class="row mb-5">
                <div class="col-lg-8 offset-lg-2">
                    <div class="text-center mt-4">

                        <h2 class="h1 font-weight-800 line-height-sm mb-4">Szukaj według branży</h2>

                        <div class="zz-separator zz-separator-wide ml-auto mr-auto mb-4" data-width="93px"></div>

                        <div data-height="20px"></div>

                        <div class="lead">
                            Wybierz branżę, aby wyświetlić listę firm.
                        </div>

                        <div data-height="40px"></div>

                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=ADMINISTRACJA, URZĘDY I FUNDACJE" ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-blush add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/overview-icon-01.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">ADMINISTRACJA, URZĘDY I FUNDACJE</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=BIURO I DOM" ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-secondary add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-15.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">BIURO I DOM</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=BUDOWNICTWO I WYPOSAŻENIE"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-warning add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-02.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">BUDOWNICTWO I WYPOSAŻENIE</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=EDUKACJA, NAUKA, KULTURA, SZTUKA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-indigo add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/pen-info.svg" alt="icon" class="img-fluid"
                                     data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">EDUKACJA, NAUKA, KULTURA, SZTUKA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=MEDIA, KOMPUTERY, INTERNET, REKLAMA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-success add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/service-info-box-icon-04.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">MEDIA, KOMPUTERY, INTERNET I REKLAMA</h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=MEDYCYNA, ZDROWIE I URODA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-primary add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/overview-icon-03.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">MEDYCYNA, ZDROWIE I URODA</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=MOTORYZACJA, TRANSPORT, KOMUNIKACJA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-carrot add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-06.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">MOTORYZACJA, TRANSPORT, KOMUNIKACJA</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=PRACA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-sky add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-13.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">PRACA</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=PRAWO, FINANSE, TŁUMACZENIA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-orchid add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/service-icon-25.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">PRAWO, FINANSE, TŁUMACZENIA</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=PRZEMYSŁ, AUTOMATYKA"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-rose add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/counter-icon-04.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">PRZEMYSŁ, AUTOMATYKA</h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col d-none d-sm-none d-md-none d-lg-block"></div>
                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=TURYSTYKA, SPORT, REKREACJA, HOTELE"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-indigo add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/overview-icon-02.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">TURYSTYKA, SPORT, REKREACJA, HOTELE</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=WŁÓKIENNICTWO, ODZIEŻ, OBUWIE"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-success add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/hero-banner-3-icon-02.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">WŁÓKIENNICTWO, ODZIEŻ, OBUWIE</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col">
                    <div class="icon-info-5 text-center pb-4 mb-5">
                        <a class="icon-info-link"
                           href="<?php echo $pages->get("template=companies")->url . "?industry=ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO, OGRODNICTWO"; ?>">
                            <div class="icon-element d-flex align-items-center justify-content-center mb-4 bg-scarlet add-animate faster"
                                 data-animated="zoomIn">
                                <img src="<?php echo $urls->svg ?>upload/hero-banner-3-icon-03.svg" alt="icon"
                                     class="img-fluid" data-width="48px" data-height="48px">
                            </div>
                            <div class="icon-info-text px-4 pt-3">
                                <h6 class="font-weight-700">ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO,
                                    OGRODNICTWO</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col d-none d-sm-none d-md-none d-lg-block"></div>
            </div>

            <div class="d-none hidden-lg-down" data-height="15px"></div>

        </div>
        <hr>
    </div>

</div>


<!-- Footer -->
<div class="d-xl-none">
    <?php include_once "partials/_footer.php" ?>
</div>

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Index js -->
<script src="<?php echo $urls->js ?>index.js"></script>

</body>
</html>