<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once "partials/_head.php" ?>
    <!-- Perfect scrollbar-->
    <link rel="stylesheet" href="<?php echo $urls->css ?>perfect-scrollbar.css">
</head>
<body>
<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Top Search Section -->
<div class="bg-image overflow-hidden" data-img-src="<?php echo $urls->images ?>section1-bg.png">
    <button id="industriesSidebarOpenButton" class="btn btn-round btn-warning mt-5 sidebarActionButton d-none">&#9776;
        Firmy wg branży
    </button>

    <div class="row">

        <div id="industriesSidebar" class="col-3 d-none d-xl-block bg-light text-dark-gray pt-4">

            <div class="row">
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
                                <h6 class="font-weight-700 mb-3">ADMINISTRACJA, URZĘDY I FUNDACJE</h6>
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
                                <h6 class="font-weight-700 mb-3">BIURO I DOM</h6>
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
                                <h6 class="font-weight-700 mb-3">BUDOWNICTWO I WYPOSAŻENIE</h6>
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
                                <h6 class="font-weight-700 mb-3">EDUKACJA, NAUKA, KULTURA, SZTUKA</h6>
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
                                <h6 class="font-weight-700 mb-3">MEDIA, KOMPUTERY, INTERNET I REKLAMA</h6>
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
                                <h6 class="font-weight-700 mb-3">MEDYCYNA, ZDROWIE I URODA</h6>
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
                                <h6 class="font-weight-700 mb-3">MOTORYZACJA, TRANSPORT, KOMUNIKACJA</h6>
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
                                <h6 class="font-weight-700 mb-3">PRACA</h6>
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
                                <h6 class="font-weight-700 mb-3">PRAWO, FINANSE, TŁUMACZENIA</h6>
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
                                <h6 class="font-weight-700 mb-3">PRZEMYSŁ, AUTOMATYKA</h6>
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
                                <h6 class="font-weight-700 mb-3">TURYSTYKA, SPORT, REKREACJA, HOTELE</h6>
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
                                <h6 class="font-weight-700 mb-3">WŁÓKIENNICTWO, ODZIEŻ, OBUWIE</h6>
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
                                     class="img-fluid">
                            </div>
                            <div class="icon-info-text text-center">
                                <h6 class="font-weight-700 mb-3">ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO,
                                    OGRODNICTWO</h6>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-6 col-xl-4"></div>
            </div>

        </div>


        <div id="top-section" class="col">
            <button id="industriesSidebarCloseButton"
                    class="d-none d-xl-block btn btn-round btn-warning mt-5 sidebarActionButton"><<
            </button>
            <div class="container d-flex flex-column">
                <div class="row page-header-block-height">

                    <div class="col-lg-6 d-flex d-xl-block">

                        <div class="align-self-end align-self-xl-start w-100 px-md-5 mt-2 mb-3 mb-lg-5">
                            <div class="text-center text-lg-left add-animate slide-animate" data-animated="fadeInRight">

                                <form action="<?php echo $pages->get("template=companies")->url; ?>" type="GET">
                                    <div class="row">
                                        <div class="col">
                                            <p style="color: white; font-size: 1rem;" class="text-left w-100">Szukana
                                                fraza</p>
                                            <div class="input-group input-group-lg input-group-round mb-4 mt-3">
                                                <div class="input-group-inner">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text input-group-icon"><i
                                                                    class="fa fa-search" aria-hidden="true"></i></span>
                                                    </div>
                                                    <input id="search" autocomplete="off" type="text" name="keywords"
                                                           class="form-control form-control-lg">
                                                    <div class="bg-white input-focus-bg"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Provinces area switcher-->
                                    <div class="kbf-index-area-switcher row">
                                        <div data-name="province_name" id="provinces"
                                             class="dropdown col-12 col-xl-6 mb-3">
                                            <label class="text-left w-100" for="provinces-button">Województwo</label>
                                            <button class="btn btn-lg btn-round btn-primary px-3 mx-0 mb-3 mb-md-0 dropdown-toggle w-full"
                                                    type="button"
                                                    id="provinces-button" data-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false"></button>
                                        </div>

                                        <div data-name="area_name" id="areas" class="dropdown col-12 col-xl-6">
                                            <label class="text-left w-100" for="areas-button">Powiat</label>
                                            <button class="btn btn-lg btn-round btn-primary px-3 mx-0 mb-0 dropdown-toggle w-full"
                                                    type="button" id="areas-button" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false"></button>
                                        </div>
                                    </div>
                                    <button type="submit"
                                            class="kbf-search w-100 btn btn-round btn-lg btn-warning mt-5">Znajdź firmę
                                    </button>
                                </form>


                            </div>
                        </div>

                        <div class="d-none d-xl-block align-self-end align-self-xl-start px-5 my-5">
                            <h1 class="display-7 font-weight-800 text-white mb-3 mb-4 mt-0 px-2">Znajdź firmę<br>gdziekolwiek
                                jesteś</h1>

                            <div class="lead-sm text-white-75 pb-3 mb-3 px-2">KBF to ogólnopolski Katalog Branżowy Firm,
                                baza firm, instytucji i urzędów. Wpisz w polu wyszukiwania frazę, określ rejon i wciśnij
                                “ZNAJDŻ FIRMĘ”.
                            </div>

                            <div class="lead-sm text-white-75 pb-1 mb-4 px-2">Jeśli chcesz zlokalizować firmę na mapie,
                                wybierz “WYSZUKAJ NA MAPIE”.
                            </div>
                            <a href="<?php echo $pages->get("template=map")->url; ?>"
                               class="d-none d-md-block text-warning px-2 mx-2 ml-0 mr-3 mb-5">WYSZUKAJ NA MAPIE</a>

                        </div>

                    </div>

                    <div class="col-lg-6 d-flex d-xl-none px-md-5">

                        <div class="align-self-end align-self-xl-start my-lg-5">
                            <h1 class="display-7 font-weight-800 text-white mb-3 mb-lg-5 mt-3 px-2">Znajdź firmę<br>gdziekolwiek
                                jesteś</h1>

                            <div class="lead-sm text-white-75 pb-2 pb-xl-3 mb-3 mb-lg-5 px-2">KBF to ogólnopolski
                                Katalog Branżowy Firm, baza firm, instytucji i urzędów. Wpisz w polu wyszukiwania frazę,
                                określ rejon i wciśnij “ZNAJDŻ FIRMĘ”.
                            </div>

                            <div class="lead-sm text-white-75 pb-1 mb-4 px-2">Jeśli chcesz zlokalizować firmę na mapie,
                                wybierz “WYSZUKAJ NA MAPIE”.
                            </div>
                            <a href="<?php echo $pages->get("template=map")->url; ?>"
                               class="d-none d-md-block text-warning px-2 mx-2 ml-md-0 mr-md-3 mb-md-3">WYSZUKAJ NA
                                MAPIE</a>

                        </div>


                    </div>

                    <div class="col-12 d-lg-none d-xl-flex col-xl-6 order-xl-2 px-md-5">
                        <div class="align-self-end w-100 px-5">
                            <div class="px-md-5 mt-md-4 img-container">
                                <div class="d-none d-xl-block" data-height="120px"></div>
                                <img src="<?php echo $urls->images ?>phone-map-hand.png" alt="image"
                                     class="img-fluid add-animate slide-animate" data-animated="slideInLeft">
                                <a href="<?php echo $pages->get("template=map")->url; ?>"
                                   class="btn btn-round btn-lg btn-primary mb-2 on-img-button">Wyszukaj na mapie</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

<!-- Banner -->
<?php include "partials/banner-index.php" ?>

<!-- Content -->
<div class="main-content py-0">

    <!-- Industries section -->
    <div class="section bg-light py-5 d-xl-none">
        <div class="container">

            <div class="row my-5">
                <div class="col-lg-8 offset-lg-2">
                    <div class="text-center mt-3">

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
                                <h6 class="font-weight-700 mb-3">ADMINISTRACJA, URZĘDY I FUNDACJE</h6>
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
                                <h6 class="font-weight-700 mb-3">BIURO I DOM</h6>
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
                                <h6 class="font-weight-700 mb-3">BUDOWNICTWO I WYPOSAŻENIE</h6>
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
                                <h6 class="font-weight-700 mb-3">EDUKACJA, NAUKA, KULTURA, SZTUKA</h6>
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
                                <h6 class="font-weight-700 mb-3">MEDIA, KOMPUTERY, INTERNET I REKLAMA</h6>
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
                                <h6 class="font-weight-700 mb-3">MEDYCYNA, ZDROWIE I URODA</h6>
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
                                <h6 class="font-weight-700 mb-3">MOTORYZACJA, TRANSPORT, KOMUNIKACJA</h6>
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
                                <h6 class="font-weight-700 mb-3">PRACA</h6>
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
                                <h6 class="font-weight-700 mb-3">PRAWO, FINANSE, TŁUMACZENIA</h6>
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
                                <h6 class="font-weight-700 mb-3">PRZEMYSŁ, AUTOMATYKA</h6>
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
                                <h6 class="font-weight-700 mb-3">TURYSTYKA, SPORT, REKREACJA, HOTELE</h6>
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
                                <h6 class="font-weight-700 mb-3">WŁÓKIENNICTWO, ODZIEŻ, OBUWIE</h6>
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
                                <h6 class="font-weight-700 mb-3">ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO,
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

    <!-- Categories section -->
    <div class="section bg-light py-5">
        <div class="container">

            <div class="row my-5">
                <div class="col-lg-8 offset-lg-2">
                    <div class="text-center">

                        <h5 class="font-weight-400">Przeglądaj według kategorii</h5>

                        <div data-height="3px"></div>
                        <div class="title-divider-round"></div>

                    </div>
                </div>
            </div>

            <div class="row mb-5">

                <div class="col-md-6 col-lg-3">
                    <a href="<?php echo $pages->get("template=companies")->url; ?>" class="text-reset">
                        <div class="bg-white text-center rounded-xl shadow-sm p-4">
                            <div class="py-4 mt-2">
                                <img src="<?php echo $urls->svg ?>upload/directory-cate-icon-02.svg" alt="icon"
                                     class="add-animate faster" data-animated="zoomIn" data-width="64px"
                                     data-height="64px">
                            </div>
                            <h5 class="font-weight-700">Firmy</h5>
                            <div class="pb-2">
                                <p><?php echo $pages->count("template=company"); ?></p>
                            </div>
                        </div>
                    </a>
                    <div data-height="30px"></div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <a href="<?php echo $pages->get("template=products")->url; ?>" class="text-reset add-animate"
                       data-animated="rotateIn">
                        <div class="bg-white text-center rounded-xl shadow-sm p-4">
                            <div class="py-4 mt-2">
                                <img src="<?php echo $urls->svg ?>upload/directory-benefits-icon-02.svg" alt="icon"
                                     class="add-animate faster" data-animated="zoomIn" data-width="64px"
                                     data-height="64px">
                            </div>
                            <h5 class="font-weight-700">Produkty</h5>
                            <div class="pb-2">
                                <p><?php echo $pages->count("template=product"); ?></p>
                            </div>
                        </div>
                    </a>
                    <div data-height="30px"></div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <a href="<?php echo $pages->get("template=services")->url; ?>" class="text-reset">
                        <div class="bg-white text-center rounded-xl shadow-sm p-4">
                            <div class="py-4 mt-2">
                                <img src="<?php echo $urls->svg ?>upload/directory-cate-icon-04.svg" alt="icon"
                                     class="add-animate faster" data-animated="zoomIn" data-width="64px"
                                     data-height="64px">
                            </div>
                            <h5 class="font-weight-700">Usługi</h5>
                            <div class="pb-2">
                                <p><?php echo $pages->count("template=service"); ?></p>
                            </div>
                        </div>
                    </a>
                    <div data-height="30px"></div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <a href="<?php echo $pages->get("template=jobs")->url; ?>" class="text-reset">
                        <div class="bg-white text-center rounded-xl shadow-sm p-4">
                            <div class="py-4 mt-2">
                                <img src="<?php echo $urls->svg ?>upload/directory-cate-icon-08.svg" alt="icon"
                                     class="add-animate faster" data-animated="zoomIn" data-width="64px"
                                     data-height="64px">
                            </div>
                            <h5 class="font-weight-700">Praca</h5>
                            <div class="pb-2">
                                <p><?php echo $pages->count("template=job"); ?></p>
                            </div>
                        </div>
                    </a>
                    <div data-height="30px"></div>
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

<!-- Index js -->
<script src="<?php echo $urls->js ?>index.js"></script>

</body>
</html>