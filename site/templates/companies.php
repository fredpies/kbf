<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

// Pobierz dane o firmach na podstawie filtra
$companies = $pages->find(get_filter_query($input, 'company', $sanitizer, $database, $db));

// Paginacja listy firm
$pagination = get_pagination($companies);

// Mapa
$map_url = $pages->get("template=map")->url;

// Strona glowna
$home_page_url = $pages->get(1)->url;

?>

<!DOCTYPE html>
<html lang="en">
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

<!-- Banner -->
<?php include_once "partials/banner-companies.php" ?>

<!-- Page title -->
<div class="bg-light">
    <div class="container">
        <div class="row pt-5 pb-2">

            <div class="col-12 col-lg-4 ">
                <h5 class="font-weight-800 mb-0 text-center text-lg-left">FIRMY W KBF</h5>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center justify-content-lg-start px-0 mb-0">
                        <li class="breadcrumb-item text-uppercase"><a href="<?php echo $home_page_url ?>">Strona główna</a></li>
                        <li class="breadcrumb-item text-uppercase text-nowrap active" aria-current="page">Lista podmiotów
                        </li>
                    </ol>
                </nav>

            </div>

            <div class="kbf-filter-badges-container d-none d-lg-block col">
                <div class="row">
                    <div class="col-8"><h6>Wyświetlane branże</h6></div>

                    <div class="kbf-badge-filter-actions col-4 text-right">
                        <a class="kbf-badge-filter-actions-refresh mt-4 pr-2 text-primary">Odśwież</a>
                        <a class="kbf-badge-filter-actions-reset mt-4 text-primary">Usuń filtr</a>
                    </div>
                </div>

                <div class="kbf-filter-badges flex-wrap"></div>
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

                            <form autocomplete="off" action="<?php echo $page->url ?>">

                                <div class="px-4 px-md-5 px-lg-4 px-xl-5">
                                    <div class="input-group input-group-lg input-group-round w-100">
                                        <div class="input-group-inner">
                                            <input name="keywords" type="text" style="font-size: 0.83rem" class="form-control form-control-lg" value="<?php if(isset($keywords)) echo $keywords ?>">
                                            <div class="input-group-append">
                                                <button class="kbf-search-button btn btn-round btn-primary shadow-none mb-0"
                                                        type="submit">Szukaj
                                                </button>
                                            </div>
                                            <div class="input-focus-bg"></div>
                                        </div>
                                    </div>

                                    <div class="my-2" style="font-size: 0.75rem;"><span class="text-right"><i class="fas fa-info text-primary mr-2"></i></span>Wpisz dowolne wyrażenie (frazę) w polu wyszukiwania w celu ograniczenia listy wyników.</div>
                                    <a href="<?php echo $map_url ?>" style="font-size: 0.83rem" class="d-block mt-4 text-primary">Wyszukaj na mapie</a>
                                    <div class="mb-2 mt-2" style="font-size: 0.75rem;"><span class="text-right"><i class="fas fa-info text-primary mr-2"></i></span>Możesz zlokalizować firmy na mapie wybierając powyższy link.</div>

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

                                    <h6 class="font-weight-700 px-4 px-md-5 px-lg-4 px-xl-5 pt-2 mb-3">BRANŻA</h6>
                                    <div class="list-group list-group-flush pt-0">
                                        <div class="accordion px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-0"
                                             id="industriesAccordion">
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry1Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry1" aria-expanded="true"
                                                        aria-controls="industry1">
                                                        ADMINISTRACJA, URZĘDY I FUNDACJE
                                                    </h5>
                                                </div>
                                                <div id="industry1" class="collapse show" aria-labelledby="industry1Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("URZĘDY CENTRALNE", $sub_industry)) echo "checked" ?>
                                                                   id="urzedyCentralne" name="sub_industry[]" value="URZĘDY CENTRALNE">
                                                            <label class="custom-control-label" for="urzedyCentralne">Urzędy Centralne</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("URZĘDY LOKALNE", $sub_industry)) echo "checked" ?>
                                                                   id="urzedyLokalne" name="sub_industry[]" value="URZĘDY LOKALNE">
                                                            <label class="custom-control-label" for="urzedyLokalne">Urzędy Lokalne</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ORGANIZACJE FUNDACJE STOWARZYSZENIA", $sub_industry)) echo "checked" ?>
                                                                   id="organizacjeFundacjeStowarzyszenia" name="sub_industry[]" value="ORGANIZACJE FUNDACJE STOWARZYSZENIA">
                                                            <label class="custom-control-label"
                                                                   for="organizacjeFundacjeStowarzyszenia">Organizacje, Fundacje i Stowarzyszenia</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry2Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry2" aria-expanded="true"
                                                        aria-controls="industry2">
                                                        BIURO I DOM
                                                    </h5>
                                                </div>
                                                <div id="industry2" class="collapse" aria-labelledby="industry2Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("NIERUCHOMOŚCI", $sub_industry)) echo "checked" ?>
                                                                   id="nieruchomosci" name="sub_industry[]" value="NIERUCHOMOŚCI">
                                                            <label class="custom-control-label" for="nieruchomosci">Nieruchomości</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("USŁUGI DLA BIURA I DOMU", $sub_industry)) echo "checked" ?>
                                                                   id="uslugiDlaBiuraIDomu" name="sub_industry[]" value="USŁUGI DLA BIURA I DOMU">
                                                            <label class="custom-control-label" for="uslugiDlaBiuraIDomu">Usługi dla biura i domu</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ARTYKUŁY DLA BIURA I DOMU", $sub_industry)) echo "checked" ?>
                                                                   id="artykulyDlaBiuraIDomu" name="sub_industry[]" value="ARTYKUŁY DLA BIURA I DOMU">
                                                            <label class="custom-control-label" for="artykulyDlaBiuraIDomu">Artykuły dla biura i domu</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("SKLEPY I HURTOWNIE", $sub_industry)) echo "checked" ?>
                                                                   id="sklepyIHurtownie" name="sub_industry[]" value="SKLEPY I HURTOWNIE">
                                                            <label class="custom-control-label" for="sklepyIHurtownie">Sklepy i hurtownie</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry3Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry3" aria-expanded="true"
                                                        aria-controls="industry3">
                                                        BUDOWNICTWO I WYPOSAŻENIE
                                                    </h5>
                                                </div>
                                                <div id="industry3" class="collapse" aria-labelledby="industry3Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("BUDOWNICTWO OGÓLNE", $sub_industry)) echo "checked" ?>
                                                                   id="budownictwoOgolne" name="sub_industry[]" value="BUDOWNICTWO OGÓLNE">
                                                            <label class="custom-control-label" for="budownictwoOgolne">Budownictwo ogólne</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("BUDOWLANE MATERIALY I USŁUGI", $sub_industry)) echo "checked" ?>
                                                                   id="budowlaneMaterialyIUslugi" name="sub_industry[]" value="BUDOWLANE MATERIALY I USŁUGI">
                                                            <label class="custom-control-label"
                                                                   for="budowlaneMaterialyIUslugi">Budowlane materiały i usługi</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PROJEKTOWANIE I POMIARY", $sub_industry)) echo "checked" ?>
                                                                   id="projektowanieIPomiary" name="sub_industry[]" value="PROJEKTOWANIE I POMIARY">
                                                            <label class="custom-control-label" for="projektowanieIPomiary">Projektowanie i pomiary</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("KONSTRUKCJE I INSTALACJE", $sub_industry)) echo "checked" ?>
                                                                   id="konstrukcjeIInstalacje" name="sub_industry[]" value="KONSTRUKCJE I INSTALACJE">
                                                            <label class="custom-control-label"
                                                                   for="konstrukcjeIInstalacje">Konstrukcje i Instalacje</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("WYPOSAŻENIE", $sub_industry)) echo "checked" ?>
                                                                   id="wyposazenie" name="sub_industry[]" value="WYPOSAŻENIE">
                                                            <label class="custom-control-label" for="wyposazenie">Wyposażenie</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry4Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry4" aria-expanded="true"
                                                        aria-controls="industry4">
                                                        EDUKACJA, NAUKA, KULTURA, SZTUKA
                                                    </h5>
                                                </div>
                                                <div id="industry4" class="collapse" aria-labelledby="industry4Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("INSTYTUCJE EDUKACYJNE I KULTURALNE", $sub_industry)) echo "checked" ?>
                                                                   id="instytucjeEdukacyjneIKulturalne" name="sub_industry[]" value="INSTYTUCJE EDUKACYJNE I KULTURALNE">
                                                            <label class="custom-control-label"
                                                                   for="instytucjeEdukacyjneIKulturalne">Instytucje edukacyjne i kulturalne</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("SZKOŁY I SZKOLENIE", $sub_industry)) echo "checked" ?>
                                                                   id="szkolyISzkolenia" name="sub_industry[]" value="SZKOŁY I SZKOLENIE">
                                                            <label class="custom-control-label" for="szkolyISzkolenia">Szkoły i Szkolenia</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("SKLEPY I USŁUGI BRANŻOWE", $sub_industry)) echo "checked" ?>
                                                                   id="sklepyIUslugiBranzowe" name="sub_industry[]" value="SKLEPY I USŁUGI BRANŻOWE">
                                                            <label class="custom-control-label" for="sklepyIUslugiBranzowe">Sklepy i Usługi Branżowe</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ARTYŚCI", $sub_industry)) echo "checked" ?>
                                                                   id="artysci" name="sub_industry[]" value="ARTYŚCI">
                                                            <label class="custom-control-label"
                                                                   for="artysci">Artyści</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry5Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry5" aria-expanded="true"
                                                        aria-controls="industry5">
                                                        MEDIA, KOMPUTERY, INTERNET I REKLAMA
                                                    </h5>
                                                </div>
                                                <div id="industry5" class="collapse" aria-labelledby="industry5Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRASA", $sub_industry)) echo "checked" ?> id="prasa" name="sub_industry[]" value="PRASA">
                                                            <label class="custom-control-label" for="prasa">Prasa</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("RADIO", $sub_industry)) echo "checked" ?> id="radio" name="sub_industry[]" value="RADIO">
                                                            <label class="custom-control-label" for="radio">Radio</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("TV", $sub_industry)) echo "checked" ?> id="tv" name="sub_industry[]" value="TV">
                                                            <label class="custom-control-label" for="tv">TV</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("MULTIMEDIA", $sub_industry)) echo "checked" ?>
                                                                   id="multimedia" name="sub_industry[]" value="MULTIMEDIA">
                                                            <label class="custom-control-label"
                                                                   for="multimedia">Multimedia</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("SPRZĘT I AKCESORIA KOMPUTEROWE", $sub_industry)) echo "checked" ?>
                                                                   id="sprzetIAkcesoriaKomputerowe" name="sub_industry[]" value="SPRZĘT I AKCESORIA KOMPUTEROWE">
                                                            <label class="custom-control-label"
                                                                   for="sprzetIAkcesoriaKomputerowe">Sprzęt i akcesoria komputerowe</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("USŁUGI KOMPUTEROWE I INFORMATYCZNE", $sub_industry)) echo "checked" ?>
                                                                   id="uslugiKomputeroweIInformatyczne" name="sub_industry[]" value="USŁUGI KOMPUTEROWE I INFORMATYCZNE">
                                                            <label class="custom-control-label"
                                                                   for="uslugiKomputeroweIInformatyczne">Usługi komputerowe i informatyczne</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("OPROGRAMOWANIE", $sub_industry)) echo "checked" ?>
                                                                   id="oprogramowanie" name="sub_industry[]" value="OPROGRAMOWANIE">
                                                            <label class="custom-control-label" for="oprogramowanie">Oprogramowanie</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PORTALE I SERWISY", $sub_industry)) echo "checked" ?>
                                                                   id="portaleISerwisy" name="sub_industry[]" value="PORTALE I SERWISY">
                                                            <label class="custom-control-label" for="portaleISerwisy">Portale i serwisy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("E-BUSINES", $sub_industry)) echo "checked" ?>
                                                                   id="eBiznes" name="sub_industry[]" value="E-BUSINES">
                                                            <label class="custom-control-label"
                                                                   for="eBiznes">E-biznes</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("@-CAFE", $sub_industry)) echo "checked" ?> id="cafe" name="sub_industry[]" value="@-cafe">
                                                            <label class="custom-control-label" for="cafe">@-CAFE</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("DOSTAWCY INTERNETU", $sub_industry)) echo "checked" ?>
                                                                   id="dostawcyInternetu" name="sub_industry[]" value="DOSTAWCY INTERNETU">
                                                            <label class="custom-control-label" for="dostawcyInternetu">Dostawcy internetu</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("HOSTING", $sub_industry)) echo "checked" ?>
                                                                   id="hosting" name="sub_industry[]" value="HOSTING">
                                                            <label class="custom-control-label"
                                                                   for="hosting">Hosting</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("TELEKOMUNIKACJA", $sub_industry)) echo "checked" ?>
                                                                   id="telekomunikacja" name="sub_industry[]" value="TELEKOMUNIKACJA">
                                                            <label class="custom-control-label" for="telekomunikacja">Telekomunikacja</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("MARKETING I REKLAMA", $sub_industry)) echo "checked" ?>
                                                                   id="marketingIReklama" name="sub_industry[]" value="MARKETING I REKLAMA">
                                                            <label class="custom-control-label" for="marketingIReklama">Marketing i reklama</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("SKLEPY INTERNETOWE", $sub_industry)) echo "checked" ?>
                                                                   id="sklepyInternetowe" name="sub_industry[]" value="SKLEPY INTERNETOWE">
                                                            <label class="custom-control-label" for="sklepyInternetowe">Sklepy internetowe</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("KATALOGI I WYSZUKIWARKI", $sub_industry)) echo "checked" ?>
                                                                   id="katalogiIWyszukiwarki" name="sub_industry[]" value="KATALOGI I WYSZUKIWARKI">
                                                            <label class="custom-control-label" for="katalogiIWyszukiwarki">Katalogi i wyszukiwarki</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PROJEKTOWANIE STRON WWW", $sub_industry)) echo "checked" ?>
                                                                   id="projektowanieStronWWW" name="sub_industry[]" value="PROJEKTOWANIE STRON WWW">
                                                            <label class="custom-control-label" for="projektowanieStronWWW">Projektowanie stron www</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("INTERNET", $sub_industry)) echo "checked" ?>
                                                                   id="internet" name="sub_industry[]" value="INTERNET">
                                                            <label class="custom-control-label"
                                                                   for="internet">Internet</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("TARGI I WYSTAWY", $sub_industry)) echo "checked" ?>
                                                                   id="targiIWystawy" name="sub_industry[]" value="TARGI I WYSTAWY">
                                                            <label class="custom-control-label" for="targiIWystawy">Targi i wystawy</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry6Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry6" aria-expanded="true"
                                                        aria-controls="industry6">
                                                        MEDYCYNA, ZDROWIE I URODA
                                                    </h5>
                                                </div>
                                                <div id="industry6" class="collapse" aria-labelledby="industry6Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("OPIEKA ZDROWOTNA", $sub_industry)) echo "checked" ?>
                                                                   id="opiekaZdrowotna" name="sub_industry[]" value="OPIEKA ZDROWOTNA">
                                                            <label class="custom-control-label" for="opiekaZdrowotna">Opieka Zdrowotna</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("FARMACEUTYKA", $sub_industry)) echo "checked" ?>
                                                                   id="farmaceutyka" name="sub_industry[]" value="FARMACEUTYKA">
                                                            <label class="custom-control-label" for="farmaceutyka">Farmaceutyka</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PIELĘGNACJA I URODA", $sub_industry)) echo "checked" ?>
                                                                   id="pielęgnacjaIUroda" name="sub_industry[]" value="PIELĘGNACJA I URODA">
                                                            <label class="custom-control-label" for="pielęgnacjaIUroda">Pielęgnacja i Uroda</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("LEKARZE - SPECJALNOŚCI", $sub_industry)) echo "checked" ?>
                                                                   id="lekarzeSpecjalności" name="sub_industry[]" value="LEKARZE - SPECJALNOŚCI">
                                                            <label class="custom-control-label" for="lekarzeSpecjalności">Lekarze - specjalności</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry7Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry7" aria-expanded="true"
                                                        aria-controls="industry7">
                                                        MOTORYZACJA, TRANSPORT, KOMUNIKACJA
                                                    </h5>
                                                </div>
                                                <div id="industry7" class="collapse" aria-labelledby="industry7Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("KOMUNIKACJA", $sub_industry)) echo "checked" ?>
                                                                   id="komunikacja" name="sub_industry[]" value="KOMUNIKACJA">
                                                            <label class="custom-control-label" for="komunikacja">Komunikacja</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("TRANSPORT I SPEDYCJA", $sub_industry)) echo "checked" ?>
                                                                   id="transportISpedycja" name="sub_industry[]" value="TRANSPORT I SPEDYCJA">
                                                            <label class="custom-control-label" for="transportISpedycja">Transport i Spedycja</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PALIWA, OLEJE, SMARY", $sub_industry)) echo "checked" ?>
                                                                   id="paliwaOlejeSmary" name="sub_industry[]" value="PALIWA, OLEJE, SMARY">
                                                            <label class="custom-control-label" for="paliwaOlejeSmary">Paliwa, oleje, smary</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("SAMOCHODY I MOTOCYKLE", $sub_industry)) echo "checked" ?>
                                                                   id="samochodyIMotocykle" name="sub_industry[]" value="SAMOCHODY I MOTOCYKLE">
                                                            <label class="custom-control-label" for="samochodyIMotocykle">Samochody i Motocykle</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry8Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry8" aria-expanded="true"
                                                        aria-controls="industry8">
                                                        PRACA
                                                    </h5>
                                                </div>
                                                <div id="industry8" class="collapse" aria-labelledby="industry8Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("AGENCJE POŚREDNICTWA PRACY", $sub_industry)) echo "checked" ?>
                                                                   id="agencjePosrednictwaPracy" name="sub_industry[]" value="AGENCJE POŚREDNICTWA PRACY">
                                                            <label class="custom-control-label"
                                                                   for="agencjePosrednictwaPracy">Agencje pośrednictwa pracy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("AGENCJE DORADZTWA PERSONALNEGO", $sub_industry)) echo "checked" ?>
                                                                   id="agencjeDoradztwaPersonalnego" name="sub_industry[]" value="AGENCJE DORADZTWA PERSONALNEGO">
                                                            <label class="custom-control-label"
                                                                   for="agencjeDoradztwaPersonalnego">Agencje doradztwa personalnego</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRACA ZA GRANICĄ", $sub_industry)) echo "checked" ?>
                                                                   id="pracaZaGranica" name="sub_industry[]" value="PRACA ZA GRANICĄ">
                                                            <label class="custom-control-label" for="pracaZaGranica">Praca za granicą</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("INTERNETOWE PORTALE PRACY", $sub_industry)) echo "checked" ?>
                                                                   id="internetowePortalePracy" name="sub_industry[]" value="INTERNETOWE PORTALE PRACY">
                                                            <label class="custom-control-label"
                                                                   for="internetowePortalePracy">Internetowe portale pracy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("KURSY I SZKOLENIA PRACOWNICZE", $sub_industry)) echo "checked" ?>
                                                                   id="kursyISzkoleniaPracownicze" name="sub_industry[]" value="KURSY I SZKOLENIA PRACOWNICZE">
                                                            <label class="custom-control-label"
                                                                   for="kursyISzkoleniaPracownicze">Kursy i szkolenia pracownicze</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ZARABIANIE W INTERNECIE", $sub_industry)) echo "checked" ?>
                                                                   id="zarabianieWInternecie" name="sub_industry[]" value="ZARABIANIE W INTERNECIE">
                                                            <label class="custom-control-label" for="zarabianieWInternecie">Zarabianie w internecie</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry9Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry9" aria-expanded="true"
                                                        aria-controls="industry9">
                                                        PRAWO, FINANSE, TŁUMACZENIA
                                                    </h5>
                                                </div>
                                                <div id="industry9" class="collapse" aria-labelledby="industry9Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("DORADZTWO PRAWNE", $sub_industry)) echo "checked" ?>
                                                                   id="doradztwoPrawne" name="sub_industry[]" value="DORADZTWO PRAWNE">
                                                            <label class="custom-control-label" for="doradztwoPrawne">Doradztwo prawne</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("BIZNES I EKONOMIA", $sub_industry)) echo "checked" ?>
                                                                   id="biznesIEkonomia" name="sub_industry[]" value="BIZNES I EKONOMIA">
                                                            <label class="custom-control-label" for="biznesIEkonomia">Biznes i ekonomia</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("RZECZOZNAWCY", $sub_industry)) echo "checked" ?>
                                                                   id="rzeczoznawcy" name="sub_industry[]" value="RZECZOZNAWCY">
                                                            <label class="custom-control-label" for="rzeczoznawcy">Rzeczoznawcy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("FINANSOWANIE", $sub_industry)) echo "checked" ?>
                                                                   id="finansowanie" name="sub_industry[]" value="FINANSOWANIE">
                                                            <label class="custom-control-label" for="finansowanie">Finansowanie</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("UBEZPIECZENIA", $sub_industry)) echo "checked" ?>
                                                                   id="ubezpieczenia" name="sub_industry[]" value="UBEZPIECZENIA">
                                                            <label class="custom-control-label" for="ubezpieczenia">Ubezpieczenia</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("TŁUMACZENIA", $sub_industry)) echo "checked" ?>
                                                                   id="tlumaczenia" name="sub_industry[]" value="TŁUMACZENIA">
                                                            <label class="custom-control-label" for="tlumaczenia">Tłumaczenia</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("KONSULTING", $sub_industry)) echo "checked" ?>
                                                                   id="konsulting" name="sub_industry[]" value="KONSULTING">
                                                            <label class="custom-control-label"
                                                                   for="konsulting">Konsulting</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("DORADZTWO GOSPODARCZE", $sub_industry)) echo "checked" ?>
                                                                   id="doradztwoGospodarcze" name="sub_industry[]" value="DORADZTWO GOSPODARCZE">
                                                            <label class="custom-control-label" for="doradztwoGospodarcze">Doradztwo gospodarcze</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ORGANIZACJE GOSPODARCZE I BIZNESOWE", $sub_industry)) echo "checked" ?>
                                                                   id="organizacjeGospodarczeIBiznesowe" name="sub_industry[]" value="ORGANIZACJE GOSPODARCZE I BIZNESOWE">
                                                            <label class="custom-control-label"
                                                                   for="organizacjeGospodarczeIBiznesowe">Organizacje gospodarcze i biznesowe</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("INFORMACJA GOSPODARCZA", $sub_industry)) echo "checked" ?>
                                                                   id="informacjaGospodarcza" name="sub_industry[]" value="INFORMACJA GOSPODARCZA">
                                                            <label class="custom-control-label" for="informacjaGospodarcza">Informacja gospodarcza</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry10Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry10" aria-expanded="true"
                                                        aria-controls="industry10">
                                                        PRZEMYSŁ, AUTOMATYKA
                                                    </h5>
                                                </div>
                                                <div id="industry10" class="collapse" aria-labelledby="industry10Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ CHEMICZNY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslChemiczny" name="sub_industry[]" value="PRZEMYSŁ CHEMICZNY">
                                                            <label class="custom-control-label" for="przemyslChemiczny">Przemysł chemiczny</label>
                                                        </div>

                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ ENERGETYCZNY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslEnergetyczny" name="sub_industry[]" value="PRZEMYSŁ ENERGETYCZNY">
                                                            <label class="custom-control-label" for="przemyslEnergetyczny">Przemysł energetyczny</label>
                                                        </div>

                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ MASZYNOWY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslMaszynowy" name="sub_industry[]" value="PRZEMYSŁ MASZYNOWY">
                                                            <label class="custom-control-label" for="przemyslMaszynowy">Przemysł maszynowy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ HUTNICZY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslHutniczy" name="sub_industry[]" value="PRZEMYSŁ HUTNICZY">
                                                            <label class="custom-control-label" for="przemyslHutniczy">Przemysł hutniczy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ WYDOBYWCZY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslWydobywczy" name="sub_industry[]" value="PRZEMYSŁ WYDOBYWCZY">
                                                            <label class="custom-control-label" for="przemyslWydobywczy">Przemysł wydobywczy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ MORSKI", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslMorski" name="sub_industry[]" value="PRZEMYSŁ MORSKI">
                                                            <label class="custom-control-label" for="przemyslMorski">Przemysł morski</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("OPAKOWANIA I ETYKIETY", $sub_industry)) echo "checked" ?>
                                                                   id="opakowaniaIEtykiety" name="sub_industry[]" value="OPAKOWANIA I ETYKIETY">
                                                            <label class="custom-control-label" for="opakowaniaIEtykiety">Opakowania i Etykiety</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ DRZEWNY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslDrzewny" name="sub_industry[]" value="PRZEMYSŁ DRZEWNY">
                                                            <label class="custom-control-label" for="przemyslDrzewny">Przemysł drzewny</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("AUTOMATYKA", $sub_industry)) echo "checked" ?>
                                                                   id="automatyka" name="sub_industry[]" value="AUTOMATYKA">
                                                            <label class="custom-control-label"
                                                                   for="automatyka">Automatyka</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ SPOŻYWCZY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslSpozywczy" name="sub_industry[]" value="PRZEMYSŁ SPOŻYWCZY">
                                                            <label class="custom-control-label" for="przemyslSpozywczy">Przemysł spożywczy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ ELEKTROTECHNICZNY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslElektrotechniczny" name="sub_industry[]" value="PRZEMYSŁ ELEKTROTECHNICZNY">
                                                            <label class="custom-control-label"
                                                                   for="przemyslElektrotechniczny">Przemysł elektrotechniczny</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ METALOWY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslMetalowy" name="sub_industry[]" value="PRZEMYSŁ METALOWY">
                                                            <label class="custom-control-label" for="przemyslMetalowy">Przemysł metalowy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ WŁÓKIENNICZY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslWlokienniczy" name="sub_industry[]" value="PRZEMYSŁ WŁÓKIENNICZY">
                                                            <label class="custom-control-label" for="przemyslWlokienniczy">Przemysł włókienniczy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("TWORZYWA SZTUCZNE", $sub_industry)) echo "checked" ?>
                                                                   id="tworzywaSztuczne" name="sub_industry[]" value="TWORZYWA SZTUCZNE">
                                                            <label class="custom-control-label" for="tworzywaSztuczne">Tworzywa sztuczne</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ PALIWOWY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslPaliwowy" name="sub_industry[]" value="PRZEMYSŁ PALIWOWY">
                                                            <label class="custom-control-label" for="przemyslPaliwowy">Przemysł paliwowy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("MAGAZYNY I SKŁADY", $sub_industry)) echo "checked" ?>
                                                                   id="magazynyISklady" name="sub_industry[]" value="MAGAZYNY I SKŁADY">
                                                            <label class="custom-control-label" for="magazynyISklady">Magazyny i składy</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRZEMYSŁ NARZĘDZIOWY", $sub_industry)) echo "checked" ?>
                                                                   id="przemyslNarzedziowy" name="sub_industry[]" value="PRZEMYSŁ NARZĘDZIOWY">
                                                            <label class="custom-control-label" for="przemyslNarzedziowy">Przemysł narzędziowy</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry11Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry11" aria-expanded="true"
                                                        aria-controls="industry11">
                                                        TURYSTYKA, SPORT, REKREACJA, HOTELE
                                                    </h5>
                                                </div>
                                                <div id="industry11" class="collapse" aria-labelledby="industry11Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ROZRYWKA I GASTRONOMIA", $sub_industry)) echo "checked" ?>
                                                                   id="rozrywkaIGastronomia" name="sub_industry[]" value="ROZRYWKA I GASTRONOMIA">
                                                            <label class="custom-control-label" for="rozrywkaIGastronomia">Rozrywka i gastronomia</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("NOCLEG / POBYT", $sub_industry)) echo "checked" ?>
                                                                   id="noclegPobyt" name="sub_industry[]" value="NOCLEG / POBYT">
                                                            <label class="custom-control-label" for="noclegPobyt">Nocleg / Pobyt</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("AKTYWNY WYPOCZYNEK", $sub_industry)) echo "checked" ?>
                                                                   id="aktywnyWypoczynek" name="sub_industry[]" value="AKTYWNY WYPOCZYNEK">
                                                            <label class="custom-control-label" for="aktywnyWypoczynek">Aktywny wypoczynek</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ODZIEŻ, SPRZĘT, EKWIPUNEK I WYPOSAŻENIE", $sub_industry)) echo "checked" ?>
                                                                   id="odziezSprzetEkwipunekWyposazenie" name="sub_industry[]" value="ODZIEŻ, SPRZĘT, EKWIPUNEK I WYPOSAŻENIE">
                                                            <label class="custom-control-label"
                                                                   for="odziezSprzetEkwipunekWyposazenie">Odzież, sprzęt, ekwipunek i wyposażenie</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ORGANIZACJA WYPOCZYNKU", $sub_industry)) echo "checked" ?>
                                                                   id="organizacjaWypoczynku" name="sub_industry[]" value="ORGANIZACJA WYPOCZYNKU">
                                                            <label class="custom-control-label" for="organizacjaWypoczynku">Organizacja wypoczynku</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("KLUBY I ORGANIZACJE SPORTOWE", $sub_industry)) echo "checked" ?>
                                                                   id="klubyIOrganizacjeSportowe" name="sub_industry[]" value="KLUBY I ORGANIZACJE SPORTOWE">
                                                            <label class="custom-control-label"
                                                                   for="klubyIOrganizacjeSportowe">Kluby i organizacje sportowe</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry12Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry12" aria-expanded="true"
                                                        aria-controls="industry12">
                                                        WŁÓKIENNICTWO, ODZIEŻ, OBUWIE
                                                    </h5>
                                                </div>
                                                <div id="industry12" class="collapse" aria-labelledby="industry12Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ODZIEŻ", $sub_industry)) echo "checked" ?> id="odziez" name="sub_industry[]" value="ODZIEŻ">
                                                            <label class="custom-control-label" for="odziez">Odzież</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("OBUWIE", $sub_industry)) echo "checked" ?> id="obuwie" name="sub_industry[]" value="OBUWIE">
                                                            <label class="custom-control-label" for="obuwie">Obuwie</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("GALANTERIA", $sub_industry)) echo "checked" ?>
                                                                   id="galanteria" name="sub_industry[]" value="GALANTERIA">
                                                            <label class="custom-control-label"
                                                                   for="galanteria">Galanteria</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("PRALNIE", $sub_industry)) echo "checked" ?>
                                                                   id="pralnie" name="sub_industry[]" value="PRALNIE">
                                                            <label class="custom-control-label"
                                                                   for="pralnie">Pralnie</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("FARBIARNIE", $sub_industry)) echo "checked" ?>
                                                                   id="farbiarnie" name="sub_industry[]" value="FARBIARNIE">
                                                            <label class="custom-control-label"
                                                                   for="farbiarnie">Farbiarnie</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("DYWANY I WYKŁADZINY", $sub_industry)) echo "checked" ?>
                                                                   id="dywanyIWykladziny" name="sub_industry[]" value="DYWANY I WYKŁADZINY">
                                                            <label class="custom-control-label" for="dywanyIWykladziny">Dywany i wykładziny</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("USŁUGI DROBNE", $sub_industry)) echo "checked" ?>
                                                                   id="uslugiDrobne" name="sub_industry[]" value="USŁUGI DROBNE">
                                                            <label class="custom-control-label" for="uslugiDrobne">Usługi drobne</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("POŚCIEL, KOCE", $sub_industry)) echo "checked" ?>
                                                                   id="poscielKoce" name="sub_industry[]" value="POŚCIEL, KOCE">
                                                            <label class="custom-control-label" for="poscielKoce">Pościel, koce</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("BIELIZNA", $sub_industry)) echo "checked" ?>
                                                                   id="bielizna" name="sub_industry[]" value="BIELIZNA">
                                                            <label class="custom-control-label"
                                                                   for="bielizna">Bielizna</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("FIRANY I ZASŁONY", $sub_industry)) echo "checked" ?>
                                                                   id="firanyIZaslony" name="sub_industry[]" value="FIRANY I ZASŁONY">
                                                            <label class="custom-control-label" for="firanyIZaslony">Firany i zasłony</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("TEKSTYLIA", $sub_industry)) echo "checked" ?>
                                                                   id="tekstylia" name="sub_industry[]" value="TEKSTYLIA">
                                                            <label class="custom-control-label"
                                                                   for="tekstylia">Tekstylia</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("TKANINY I DZIANINY", $sub_industry)) echo "checked" ?>
                                                                   id="tkaninyIDzianiny" name="sub_industry[]" value="TKANINY I DZIANINY">
                                                            <label class="custom-control-label" for="tkaninyIDzianiny">Tkaniny i dzianiny</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ODZIEŻ ROBOCZA", $sub_industry)) echo "checked" ?>
                                                                   id="odziezRobocza" name="sub_industry[]" value="ODZIEŻ ROBOCZA">
                                                            <label class="custom-control-label" for="odziezRobocza">Odzież robocza</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header shadow-sm" id="industry13Header">
                                                    <h5 class="accordion-title" data-toggle="collapse"
                                                        data-target="#industry13" aria-expanded="true"
                                                        aria-controls="industry13">
                                                        ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO, OGRODNICTWO
                                                    </h5>
                                                </div>
                                                <div id="industry13" class="collapse" aria-labelledby="industry13Header"
                                                     data-parent="#industriesAccordion">
                                                    <div class="card-body pb-1">
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ART. OGÓLNOSPOŻYWCZE - DETAL", $sub_industry)) echo "checked" ?>
                                                                   id="artOgolnospozywczeDetal" name="sub_industry[]" value="ART. OGÓLNOSPOŻYWCZE - DETAL">
                                                            <label class="custom-control-label"
                                                                   for="artOgolnospozywczeDetal">Art. ogólnospożywcze - detal</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ART. OGÓLNOSPOŻYWCZE - PRODUKCJA I HURT", $sub_industry)) echo "checked" ?>
                                                                   id="artOgolnospozywczeProdukcjaIHurt" name="sub_industry[]" value="ART. OGÓLNOSPOŻYWCZE - PRODUKCJA I HURT">
                                                            <label class="custom-control-label"
                                                                   for="artOgolnospozywczeProdukcjaIHurt">Art. ogólnospożywcze - produkcja i hurt</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ŻYWNOŚĆ DIETETYCZNA", $sub_industry)) echo "checked" ?>
                                                                   id="zywnoscDietetyczna" name="sub_industry[]" value="ŻYWNOŚĆ DIETETYCZNA">
                                                            <label class="custom-control-label" for="zywnoscDietetyczna">Żywność dietetyczna</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("CUKIERNIE I PIEKARNIE", $sub_industry)) echo "checked" ?>
                                                                   id="cukiernieIPiekarnie" name="sub_industry[]" value="CUKIERNIE I PIEKARNIE">
                                                            <label class="custom-control-label" for="cukiernieIPiekarnie">Cukiernie i piekarnie</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("RYBY I RYBOŁÓWSTWO", $sub_industry)) echo "checked" ?>
                                                                   id="rybyIRybolowstwo" name="sub_industry[]" value="RYBY I RYBOŁÓWSTWO">
                                                            <label class="custom-control-label" for="rybyIRybolowstwo">Ryby i rybołówstwo</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("MASZYNY I URZĄDZENIA ROLNICZE", $sub_industry)) echo "checked" ?>
                                                                   id="maszynyIUrzadzeniaRolnicze" name="sub_industry[]" value="MASZYNY I URZĄDZENIA ROLNICZE">
                                                            <label class="custom-control-label"
                                                                   for="maszynyIUrzadzeniaRolnicze">Maszyny i urządzenia rolnicze</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ROLNICZE ARTYKUŁY", $sub_industry)) echo "checked" ?>
                                                                   id="rolniczeArtykuly" name="sub_industry[]" value="ROLNICZE ARTYKUŁY">
                                                            <label class="custom-control-label" for="rolniczeArtykuly">Rolnicze artykuły</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ZOOLOGICZNE ARTYKUŁY", $sub_industry)) echo "checked" ?>
                                                                   id="zoologiczneArtykuly" name="sub_industry[]" value="ZOOLOGICZNE ARTYKUŁY">
                                                            <label class="custom-control-label" for="zoologiczneArtykuly">Zoologiczne artykuły</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("LEŚNICTWO", $sub_industry)) echo "checked" ?>
                                                                   id="lesnictwo" name="sub_industry[]" value="LEŚNICTWO">
                                                            <label class="custom-control-label"
                                                                   for="lesnictwo">Leśnictwo</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ŻYWNOŚĆ NATURALNA", $sub_industry)) echo "checked" ?>
                                                                   id="zywnoscNaturalna" name="sub_industry[]" value="ŻYWNOŚĆ NATURALNA">
                                                            <label class="custom-control-label" for="zywnoscNaturalna">Żywność naturalna</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("OGRODNICTWO", $sub_industry)) echo "checked" ?>
                                                                   id="ogrodnictwo" name="sub_industry[]" value="OGRODNICTWO">
                                                            <label class="custom-control-label" for="ogrodnictwo">Ogrodnictwo</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("ZWIERZĘTA HODOWLANE", $sub_industry)) echo "checked" ?>
                                                                   id="zwierzetaHodowlane" name="sub_industry[]" value="ZWIERZĘTA HODOWLANE">
                                                            <label class="custom-control-label" for="zwierzetaHodowlane">Zwierzęta hodowlane</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("EKOLOGIA", $sub_industry)) echo "checked" ?>
                                                                   id="ekologia" name="sub_industry[]" value="EKOLOGIA">
                                                            <label class="custom-control-label"
                                                                   for="ekologia">Ekologia</label>
                                                        </div>
                                                        <div class="form-group custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" <?php if (isset($sub_industry) && in_array("WARZYWA I OWOCE", $sub_industry)) echo "checked" ?>
                                                                   id="warzywaIOwoce" name="sub_industry[]" value="WARZYWA I OWOCE">
                                                            <label class="custom-control-label" for="warzywaIOwoce">Warzywa i owoce</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="list-group list-group-flush py-0">

                                        <!-- Provinces area switcher-->
                                        <div class="kbf-index-area-switcher row">
                                            <h6 class="font-weight-700 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">
                                                WOJEWÓDZTWO</h6>
                                            <div data-start-value="<?php if (isset($province_name)) echo $province_name ?>" data-name="province_name" id="provinces"
                                                 class="dropdown col-12 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">
                                                <button class="btn btn-round btn-primary px-3 mx-0 mb-3 mb-md-0 dropdown-toggle w-100"
                                                        type="button"
                                                        id="provinces-button" data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false"></button>
                                            </div>

                                            <h6 class="font-weight-700 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">POWIAT</h6>
                                            <div data-start-value="<?php if (isset($area_name)) echo $area_name ?>" data-name="area_name" id="areas"
                                                 class="dropdown col-12 px-4 px-md-5 px-lg-4 px-xl-5 mt-2 mb-3">
                                                <button class="btn btn-round btn-primary px-3 mx-0 mb-0 dropdown-toggle w-100"
                                                        type="button" id="areas-button" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false"></button>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="text-center px-4 px-md-5 px-lg-4 px-xl-5 pt-2 mt-4 mb-0">
                                        <button type="submit" style="width: 50%" class="kbf-filter-button btn btn-round btn-warning">Filtruj</button>
                                    </div>

                            </form>

                            <form action="<?php echo $page->url ?>" role="form">
                                <div class="text-center px-4 px-md-5 px-lg-4 px-xl-5 pt-2 mt-4 mb-0">
                                    <button type="submit" style="width: 50%" class="kbf-reset-button btn btn-round btn-danger">Wyczyść</button>
                                </div>
                            </form>

                        </div>


                    </div>
                </div>

            </div>

                <!-- Content body -->
                <div class="col-lg-8">

                    <div class="pb-3 mb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <div class="kbf-list-header">
                                <h5 class="font-weight-700 section-title-4 text-left pb-2 mb-1">
                                    Lista podmiotów
                                </h5>

                                <div class="row">
                                    <div class="col-12 col-xl-7">
                                        <div class="font-weight-400">Liczba znalezionych podmiotów: <span class="font-weight-600"><?php echo $companies->getTotal() ?></span></div>

                                        <?php

                                        if ( $companies->getTotal() > 0 ) echo '<div class="my-3" style="font-size: 0.75rem;"><span class="text-right"><i class="fas fa-info text-primary mr-2"></i></span>Wybierz nazwę firmy w celu wyświetlenia szczegółów.</div>';
                                        else echo '<div class="my-3" style="font-size: 0.75rem;"><span class="text-right"><i class="fas fa-info text-primary mr-2"></i></span>Zmień kryteria wyszukiwania aby wyświetlić firmy.</div>';

                                        ?>


                                    </div>

                                    <div class="col-12 col-xl-5"></div>

                                </div>

                            </div>

                            <nav class="mt-3" aria-label="Companies navigation">
                                <?php

                                // Paginacja
                                echo $pagination
                                ?>
                            </nav>

                            <?php
                            // Lista firm
                            foreach ($companies as $company) {
                                $company_data = get_company_data($company, $sanitizer);
                                show_company_list_item($company_data, $urls);
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
<script src="<?php echo $urls->js ?>companies.js"></script>
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
