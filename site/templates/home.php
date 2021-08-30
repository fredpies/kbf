<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

?>
<!DOCTYPE html>
<html lang="en" class="home">
<head>
    <?php include_once "partials/_head.php" ?>
    <!-- Perfect scrollbar-->
    <link rel="stylesheet" href="<?php echo $urls->css ?>perfect-scrollbar.css">
</head>
<body style="background-color: #1c2833;">
<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu-home.php" ?>

<!-- Top Search Section -->
<div class="bg-image overflow-hidden" data-img-src="<?php echo $urls->images ?>section1-bg.png">



    <div class="row h-100">
        <button id="industriesSidebarOpenButton" class="btn btn-round btn-warning mt-5 sidebarActionButton d-none" style="position: absolute; z-index: 1002; top: 250px; left: 10px;">&#9776; Firmy wg branży</button>

        <div id="industriesSidebar" class="col-3 d-none d-xl-block bg-light text-dark-gray pt-4">

            <div class="row">

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=ADMINISTRACJA, URZĘDY I FUNDACJE" ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-blush add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/overview-icon-01.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">ADMINISTRACJA, URZĘDY I FUNDACJE</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=BIURO I DOM" ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-secondary add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/counter-icon-15.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">BIURO I DOM</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=BUDOWNICTWO I WYPOSAŻENIE"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-warning add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/counter-icon-02.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">BUDOWNICTWO I WYPOSAŻENIE</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=EDUKACJA, NAUKA, KULTURA, SZTUKA"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-indigo add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/pen-info.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">EDUKACJA, NAUKA, KULTURA, SZTUKA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=MEDIA, KOMPUTERY, INTERNET, REKLAMA"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-success add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/service-info-box-icon-04.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">MEDIA, KOMPUTERY, INTERNET I REKLAMA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=MEDYCYNA, ZDROWIE I URODA"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-primary add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/overview-icon-03.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">MEDYCYNA, ZDROWIE I URODA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=MOTORYZACJA, TRANSPORT, KOMUNIKACJA"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-carrot add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/counter-icon-06.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">MOTORYZACJA, TRANSPORT, KOMUNIKACJA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=PRACA"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-sky add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/counter-icon-13.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">PRACA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=PRAWO, FINANSE, TŁUMACZENIA"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-orchid add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/service-icon-25.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">PRAWO, FINANSE, TŁUMACZENIA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=PRZEMYSŁ, AUTOMATYKA"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-rose add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/counter-icon-04.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">PRZEMYSŁ, AUTOMATYKA</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=TURYSTYKA, SPORT, REKREACJA, HOTELE"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-indigo add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/overview-icon-02.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">TURYSTYKA, SPORT, REKREACJA, HOTELE</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=WŁÓKIENNICTWO, ODZIEŻ, OBUWIE"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-success add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/hero-banner-3-icon-02.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">WŁÓKIENNICTWO, ODZIEŻ, OBUWIE</h6>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-12 mb-4">
                    <div class="icon-info-2 mx-3">
                        <a class="icon-info-link" href="<?php echo $pages->get("template=companies")->url . "?industry=ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO, OGRODNICTWO"; ?>">
                            <div class="icon-element" data-width="none">
                                <div class="icon-element-inner d-flex align-items-center justify-content-center bg-scarlet add-animate fast" data-animated="zoomIn" data-width="30px" data-height="30px">
                                    <img src="<?php echo $urls->svg ?>upload/hero-banner-3-icon-03.svg" alt="" class="img-fluid" data-width="20px" data-height="20px">
                                </div>
                            </div>
                            <div class="icon-info-text">
                                <h6 class="font-weight-700 pl-2 my-auto">ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO, OGRODNICTWO</h6>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

            <button id="industriesSidebarCloseButton" class="d-none d-xl-block btn btn-round btn-warning mt-5 sidebarActionButton" style="position: absolute; right: -75px; top: 150px; z-index: 1002;"><<</button>

        </div>


        <div id="top-section" class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9">

            <div class="container d-flex flex-column">
                <div class="row page-header-block-height">

                    <div class="col-12 d-block pl-1 pr-4">
                        <!-- Banner KBF -->
                        <?php include "partials/banner-index.php" ?>

                        <div class="row">

                            <div class="col-12 col-md-12 col-lg-10 text-center">
                                <div style="width: 75%;" class="align-self-end align-self-xl-start mx-auto px-md-5 mt-2 mb-2">
                                    <div class="text-center text-lg-left add-animate slide-animate" data-animated="fadeInRight">

                                        <form action="<?php echo $pages->get("template=companies")->url; ?>" type="GET">
                                            <!-- Provinces area switcher-->
                                            <div class="kbf-index-area-switcher row">
                                                <div data-name="province_name" id="provinces" class="dropdown col-12 col-xl-6 mb-3">
                                                    <button class="btn btn-lg btn-round btn-primary px-3 mx-0 mb-3 mb-md-0 dropdown-toggle w-full"
                                                            type="button"
                                                            id="provinces-button" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">Województwo</button>
                                                </div>

                                                <div data-name="area_name" id="areas" class="dropdown col-12 col-xl-6">
                                                    <button class="btn btn-lg btn-round btn-primary px-3 mx-0 mb-0 dropdown-toggle w-full"
                                                            type="button" id="areas-button" data-toggle="dropdown"
                                                            aria-haspopup="true" aria-expanded="false">Powiat</button>
                                                </div>
                                            </div>

                                            <!-- Search text and button-->
                                            <div class="row">
                                                <div class="col">
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
                                                <div class="col">
                                                    <button type="submit"
                                                            class="kbf-search w-100 btn btn-round btn-lg btn-warning mt-3">Znajdź firmę
                                                    </button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <a href="/kbf/mapa/">
                                    <img src="<?php echo $urls->images ?>mapa-pl.png" alt="Szukaj na mapie" style="width: 40%;">
                                </a>

                            </div>

                            <div class="col-0 col-md-0 col-lg-2 d-none d-xl-block">

                                <div class="col-12 mb-2 mb-xl-4">
                                    <a href="<?php echo $pages->get("template=companies")->url; ?>" class="text-reset">
                                        <div class="bg-white text-center rounded-xl shadow-sm pt-xxl-3">
                                            <div class="pt-3 pb-2">
                                                <img src="<?php echo $urls->svg ?>upload/directory-cate-icon-02.svg" alt="icon"
                                                     class="add-animate faster" data-animated="zoomIn" data-width="44px"
                                                     data-height="44px">
                                            </div>
                                            <h6 class="font-weight-700 pb-xl-3">Firmy</h6>
                                            <p class="d-none d-xxl-block pb-3"><?php echo $pages->count("template=company"); ?></p>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-12 mb-2 mb-xl-4">
                                    <a href="<?php echo $pages->get("template=products")->url; ?>" class="text-reset add-animate"
                                       data-animated="rotateIn">
                                        <div class="bg-white text-center rounded-xl shadow-sm">
                                            <div class="pt-3 pb-2">
                                                <img src="<?php echo $urls->svg ?>upload/directory-benefits-icon-02.svg" alt="icon"
                                                     class="add-animate faster" data-animated="zoomIn" data-width="44px"
                                                     data-height="44px">
                                            </div>
                                            <h6 class="font-weight-700 pb-xl-3">Produkty</h6>
                                            <p class="d-none d-xxl-block pb-3"><?php echo $pages->count("template=product"); ?></p>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-12 mb-2 mb-xl-4">
                                    <a href="<?php echo $pages->get("template=services")->url; ?>" class="text-reset">
                                        <div class="bg-white text-center rounded-xl shadow-sm">
                                            <div class="pt-3 pb-2">
                                                <img src="<?php echo $urls->svg ?>upload/directory-cate-icon-04.svg" alt="icon"
                                                     class="add-animate faster" data-animated="zoomIn" data-width="44px"
                                                     data-height="44px">
                                            </div>
                                            <h6 class="font-weight-700 pb-3">Usługi</h6>
                                            <p class="d-none d-xxl-block pb-xl-3"><?php echo $pages->count("template=service"); ?></p>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-12 mb-2 mb-xl-4">
                                    <a href="<?php echo $pages->get("template=jobs")->url; ?>" class="text-reset">
                                        <div class="bg-white text-center rounded-xl shadow-sm">
                                            <div class="pt-3 pb-2">
                                                <img src="<?php echo $urls->svg ?>upload/directory-cate-icon-08.svg" alt="icon"
                                                     class="add-animate faster" data-animated="zoomIn" data-width="44px"
                                                     data-height="44px">
                                            </div>
                                            <h6 class="font-weight-700 pb-xl-3">Praca</h6>
                                            <p class="d-none d-xxl-block pb-3"><?php echo $pages->count("template=job"); ?></p>
                                        </div>
                                    </a>
                                </div>

                            </div>

                        </div>

                        <img src="<?php echo $urls->images ?>responsive.png" alt="Szukaj na mapie" class="img-fluid" style="width: 60px; position:relative; bottom: 0px; left: 90%;">
                        <!-- Banner Google-->
                        <?php include "partials/banner-google.php" ?>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>



<!-- Content -->
<div class="main-content py-0">
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