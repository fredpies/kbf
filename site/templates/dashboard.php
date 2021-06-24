<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$user = wire('user');
$pages = wire('pages');

check_redirect($user);
$company_page = get_user_company($user);
$company_page_data = array();

if ($company_page) {
    $company_page_data = sanitize_company_data($company_page);
}


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
<div class="bg-light">
    <div class="container">
        <div class="row pt-5 pb-4">

            <div class="col-12 col-lg-4 ">
                <h5 class="font-weight-800 mb-0 text-center text-lg-left">MOJE KBF</h5>
            </div>

        </div>
    </div>
</div>

<!-- Content -->
<div class="main-content bg-light pt-0">

    <div class="section">
        <div class="container">
            <div class="row">

                <!-- Sidebar -->
                <?php include_once "partials/_panel-menu.php" ?>

                <!-- Content body -->
                <div class="col-lg-8">

                    <div class="pb-3 mb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <div class="row">
                                <div class="col-12 col-md-7">
                                    <h5 class="font-weight-700 mb-2 section-title-4 text-left"><?= $company_page_data["company_name"] ?></h5>
                                    <div class="company-street"><?= $company_page_data["company_address"] ?></div>
                                    <div class="company-zip-city">
                                        <span class="company-zip"><?= $company_page_data["company_zip"] ?></span>
                                        <span class="company-city"><?= $company_page_data["company_city"] ?></span>
                                    </div>
                                    <a class="text-dark text-nowrap" href="tel:602879723"><i class="fas fa-phone-alt mr-2"></i><?= $company_page_data["company_phone_1"] ?></a>
                                </div>

                                <div class="col-12 col-md-5 text-center text-md-right">
                                    <span class="d-block">w KBF od <strong>07.08.2021</strong></span>
                                    <span class="d-block">abonament ważny do <strong>07.08.2022</strong></span>
                                </div>
                            </div>

                            <div class="row py-3">
                                <div class="col-12">
                                    <p><?= $company_page_data["company_description_html"] ?></p>
                                    <a href="<?php echo $pages->get(1)->url ?>panel/dane-firmy" class="d-block text-primary text-nowrap text-right">Edytuj</a>
                                </div>
                            </div>

                            <div class="row pt-5">

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-indigo border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center">
                                            <a href="#" class="text-white">
                                                <i class="fas fa-shopping-basket fa-lg mr-2"></i>
                                                <span class="mt-1">PRODUKTY</span>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span>W ofercie</span>
                                                <span class="font-weight-bold"><?= get_products_count($company_page) ?></span>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span>Sprzedane</span>
                                                <span class="font-weight-bold">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-rose border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center">
                                            <a href="#" class="text-white">
                                                <i class="fas fa-shipping-fast fa-lg mr-2"></i>
                                                <span class="mt-1">USŁUGI</span>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span>W ofercie</span>
                                                <span class="font-weight-bold"><?= get_services_count($company_page) ?></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-carrot border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center">
                                            <a href="#" class="text-white">
                                                <i class="fas fa-address-book fa-lg mr-2"></i>
                                                <span class="mt-1">OFERTY PRACY</span>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span>Aktywne</span>
                                                <span class="font-weight-bold"><?= get_jobs_count($company_page) ?></span>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span>Otrzymane CV</span>
                                                <span class="font-weight-bold">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-secondary border-0 shadow">
                                        <div class="card-header font-weight-700 text-uppercase text-center">
                                            <a href="#" class="text-white">
                                                <i class="fas fa-gift fa-lg mr-2"></i>
                                                <span class="mt-1">BANERY</span>
                                            </a>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span>Aktywne</span>
                                                <span class="font-weight-bold">0</span>
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span>Zapisane</span>
                                                <span class="font-weight-bold">0</span>
                                            </div>
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
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center">
                                                <span>Zarejestrowani</span>
                                                <span class="font-weight-bold">0</span>
                                            </div>
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
                                           <h6 class="text-white text-center">150 PLN</h6>
                                           <button type="button" class="w-100 btn btn-round btn-warning mt-3 mb-0">WYPŁATA</button>
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

</div>

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

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
