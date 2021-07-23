<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$urls = wire('urls');
$sanitizer = wire('sanitizer');

$user = wire('user');
$pages = wire('pages');
$session = wire('session');

check_user($user);
$company_page = get_user_company($user);
check_user_company($company_page);

if (!$session->company_page_id) {
    if ($company_page) {
        $session->set('company_page_id', $company_page->id);
    }
}

// Informacje o firmie
$company_data = sanitize_company_data($company_page);
$filtered_company = filter_company_name($company_data);

$company_name = $filtered_company["company_name"];
$company_address = $filtered_company["company_address"];
$company_city = $filtered_company["company_city"];
$company_description_html = $company_data["company_description_html"];
$company_subscription_expire = date('Y-m-d', $sanitizer->date($company_page->company_subscription_expire));

// Usługi
$services_count = get_services_count($company_page);

// Oferty pracy
// TODO: sprawdzaanie daty oferty - counter tylko na aktywne
$jobs = $company_page->find("title=Oferty Pracy");
$jobs_count = 0;
if ($jobs->count()) $jobs_count = $jobs[0]->children()->count();

// TODO: brakjujące counters w małych panelach: sprzadane produkty, otrzymane cv, banery aktywne i zapisane

// TODO: pozycjonerzy

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

                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <div class="row align-items-stretch">
                                <div class="col-12 col-md-7">
                                    <h5 class="font-weight-700 mb-2 section-title-4 text-left"><?= $company_name ?></h5>

                                    <?php if (!empty($company_data["company_regon"])) echo "<div class=\"company-address mb-2 small\">REGON: ".$company_data["company_regon"]."</div>"; ?>

                                    <div class="company-street"><?= $company_address ?></div>
                                    <div class="company-zip-city">
                                        <span class="company-zip"><?= $company_data['company_zip'] ?></span>
                                        <span class="company-city"><?= $company_city ?></span>
                                    </div>

                                    <?php
                                    // Tylko pierwszy telefon
                                    if (!empty($company_data["company_phone_1"]) && empty($company_data["company_phone_2"]))
                                        echo "<a class=\"d-block text-dark text-nowrap\" href=\"tel:" . filter_phone_fax_number($company_data["company_phone_1"]) . "\"><i class=\"fas fa-phone-alt mr-2\"></i>" . filter_phone_fax_number($company_data["company_phone_1"]) . "</a>";

                                    // Obydwa telefony
                                    if (!empty($company_data["company_phone_1"]) && !empty($company_data["company_phone_2"]))
                                        echo "<a class=\"d-block text-dark text-nowrap\" href=\"tel:" . filter_phone_fax_number($company_data["company_phone_1"]) . "\"><i class=\"fas fa-phone-alt mr-2\"></i>" . filter_phone_fax_number($company_data["company_phone_1"]) .
                                            "<a class=\"d-block text-dark text-nowrap\" href=\"tel:" . $company_data["company_phone_2"] . "\"><i class=\"fas fa-phone-alt mr-2\"></i>" . filter_phone_fax_number($company_data["company_phone_2"]) . "</a>";

                                    // Wyswietl fax jesli istnieje
                                    if (!empty($company_data["company_fax"]))
                                        echo "<a class=\"d-block text-dark text-nowrap\" href=\"fax:" . filter_phone_fax_number($company_data["company_fax"]) . "\"><i class=\"fas fa-fax mr-2\"></i>" . filter_phone_fax_number($company_data["company_fax"]) . "</a>";

                                    // Wyswietl www jesli istnieje
                                    if (!empty($company_data["company_www"]))
                                        echo "<a class=\"d-block text-dark text-nowrap\" href=\"http://" . $company_data["company_www"] . "\" target=\”_blank\”><i class=\"fas fa-globe mr-2\"></i>" . $company_data["company_www"] . "</a>";
                                    ?>
                                </div>

                                <div class="col-12 col-md-5 text-left text-md-right mt-4 mt-md-0">
                                    <span class="d-block">w KBF od <strong><?= date('Y-m-d', $company_page->created) ?></strong></span>
                                    <span class="d-block">abonament ważny do <strong><?= $company_subscription_expire ?></strong></span>
                                </div>
                            </div>

                            <div class="row py-3">
                                <div class="col-12">
                                    <p><?= $company_description_html ?></p>
                                    <a href="<?php echo $pages->get(1)->url ?>panel/dane-firmy" class="d-block text-primary text-nowrap text-right">Edytuj</a>
                                </div>
                            </div>

                            <div class="row pt-4">

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-indigo border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center">
                                            <a href="<?php echo $pages->get(1)->url ?>panel/produkty" class="text-white">
                                                <i class="fas fa-shopping-basket fa-lg mr-2"></i>
                                                <span class="mt-1">PRODUKTY</span>
                                            </a>
                                        </div>

                                        <div class="card-body d-flex flex-column flex-wrap justify-content-between">
                                            <div class="d-flex w-100 justify-content-between">
                                                <span class="d-inline-block">W ofercie</span>
                                                <span class="d-inline-block ml-auto font-weight-bold"><?= get_products_all_count($company_page) ?></span>
                                            </div>
                                            <div class="d-flex w-100 justify-content-between">
                                                <span class="d-inline-block">Sprzedane</span>
                                                <span class="d-inline-block ml-auto font-weight-bold"><?= get_products_sold_all_count($company_page) ?></span>
                                            </div>
                                            <a href="<?= $pages->get('template=dashboard-add-product')->url ?>" class="d-block w-100 btn btn-sm btn-round btn-outline-light mt-4 mb-0">DODAJ PRODUKT</a>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-rose border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center">
                                            <a href="<?php echo $pages->get(1)->url ?>panel/uslugi" class="text-white">
                                                <i class="fas fa-shipping-fast fa-lg mr-2"></i>
                                                <span class="mt-1">USŁUGI</span>
                                            </a>
                                        </div>
                                        <div class="card-body d-flex flex-column flex-wrap justify-content-between">
                                            <div class="d-flex w-100 justify-content-between">
                                                <span class="d-inline-block">Zarejestrowane</span>
                                                <span class="d-inline-block ml-auto font-weight-bold">0</span>
                                            </div>
                                            <button type="button" class="d-block w-100 btn btn-sm btn-round btn-outline-light mt-4 mb-0">DODAJ USŁUGĘ</button>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-carrot border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center">
                                            <a href="<?php echo $pages->get(1)->url ?>panel/oferty-pracy" class="text-white">
                                                <i class="fas fa-address-book fa-lg mr-2"></i>
                                                <span class="mt-1">OFERTY PRACY</span>
                                            </a>
                                        </div>
                                        <div class="card-body d-flex flex-column flex-wrap justify-content-between">
                                            <div class="d-flex w-100 justify-content-between">
                                                <span class="d-inline-block">Aktywne</span>
                                                <span class="d-inline-block ml-auto font-weight-bold"><?= $jobs_count ?></span>
                                            </div>
                                            <div class="d-flex w-100 justify-content-between">
                                                <span class="d-inline-block">Otrzymane CV</span>
                                                <span class="d-inline-block ml-auto font-weight-bold">0</span>
                                            </div>
                                            <a href="<?= $pages->get('template=dashboard-add-job')->url ?>" class="d-block w-100 btn btn-sm btn-round btn-outline-light mt-4 mb-0">DODAJ OFERTĘ</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-secondary border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center">
                                            <a href="<?php echo $pages->get(1)->url ?>panel/banery" class="text-white">
                                                <i class="fas fa-gift fa-lg mr-2"></i>
                                                <span class="mt-1">BANERY</span>
                                            </a>
                                        </div>
                                        <div class="card-body d-flex flex-column flex-wrap justify-content-between">
                                            <div class="d-flex w-100 justify-content-between">
                                                <span class="d-inline-block">Aktywne</span>
                                                <span class="d-inline-block ml-auto font-weight-bold">0</span>
                                            </div>
                                            <div class="d-flex w-100 justify-content-between">
                                            <span class="d-inline-block">Zapisane</span>
                                            <span class="d-inline-block ml-auto font-weight-bold">0</span>
                                        </div>
                                            <button type="button" class="d-block w-100 btn btn-sm btn-round btn-outline-light mt-4 mb-0">DODAJ BANER</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-purple border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center">
                                            <a href="#" class="text-white">
                                                <i class="fas fa-people-arrows fa-lg mr-2"></i>
                                                <span class="mt-1">POZYCJONERZY</span>
                                            </a>
                                        </div>
                                        <div class="card-body d-flex flex-column flex-wrap justify-content-between">
                                            <div class="d-flex w-100 justify-content-between">
                                                <span class="d-inline-block">Zarejestrowani</span>
                                                <span class="d-inline-block ml-auto font-weight-bold">0</span>
                                            </div>
                                            <button type="button" class="d-block w-100 btn btn-sm btn-round btn-outline-light mt-4 mb-0">ZAREJESTRUJ</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white-75 bg-dark border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center border-0">
                                            <div class="text-white">
                                                <i class="fas fa-money-bill fa-lg mr-2"></i>
                                                <span class="mt-1">STAN KONTA</span>
                                            </div>
                                        </div>
                                        <div class="divider-1 divider-light-1 m-0"></div>
                                        <div class="card-body">
                                            <h6 class="text-white text-center"><?= $company_page->company_funds ?> PLN</h6>
                                            <button type="button" class="d-block w-100 btn btn-sm btn-round btn-outline-light mt-4 mb-0">DODAJ ŚRODKI</button>
                                            <button type="button" class="d-block w-100 btn btn-sm btn-round btn-outline-light mt-2 mb-0">WYPŁAĆ</button>
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

<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard.js"></script>
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
