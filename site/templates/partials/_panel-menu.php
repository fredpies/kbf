<?php namespace ProcessWire;
include_once "partials/_init.php";


$user = wire('user');
$page = wire('page');
$pages = wire('pages');
$urls = wire('urls');
$company_page = get_user_company($user);
$company_logo_url = '';

if ($company_page->company_logo) $company_logo_url = $company_page->company_logo->url;
else $company_logo_url = $urls->images . 'upload/company-logo.png';

?>
<!-- Sidebar -->
<div class="col-lg-4">
    <div class="sidebar-contents">

        <div class="bg-white rounded-xl shadow-sm pt-5 pb-3">

            <div class="text-center px-4 px-md-5 px-lg-4 px-xl-5">

                <div data-height="1px"></div>

                <div class="pb-2 mb-4">
                    <a href="<?php echo $pages->get(1)->url ?>panel">
                        <img src="<?= $company_logo_url ?>" alt="company-logo" class="img-fluid rounded-circle" style="height: 80px;">
                    </a>
                </div>

                <h6 class="font-weight-700 mb-0"><?= $company_page->company_name ?></h6>
                <small><?= $company_page->company_email ?></small>
                <div class="mt-2">
                    <span class="badge badge-pill badge-primary mb-2"><?= $company_page->industry ?></span>
                    <span class="badge badge-pill badge-warning"><?= $company_page->sub_industry ?></span>
                </div>

            </div>

            <div class="text-center d-lg-none">
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars fa-lg text-dark mt-4"></i>
                </button>
            </div>

            <div id="sidebarMenu" class="d-lg-block collapse">

                <ul class="list-group list-group-flush py-0">
                    <a href="<?php echo $pages->get(1)->url ?>panel/banery" class="<?php if ($page->title === 'Banery') echo 'active' ?> list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <h6 class="font-weight-700">Banery</h6>
                        <small class="text-white font-weight-600 text-uppercase bg-secondary rounded-xl px-2 mb-1">0</small>
                    </a>
                    <a href="<?php echo $pages->get(1)->url ?>panel/produkty" class="<?php if ($page->title === 'Produkty' || $page->title === 'Dodaj produkt' || $page->title === 'Edytuj produkt' ) echo 'active' ?> list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <h6 class="font-weight-700">Produkty</h6>
                        <small class="text-white font-weight-600 text-uppercase bg-indigo rounded-xl px-2 mb-1"><?= get_products_count($company_page) ?></small>
                    </a>
                    <a href="<?php echo $pages->get(1)->url ?>panel/uslugi" class="<?php if ($page->title === 'Us??ugi') echo 'active' ?> list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <h6 class="font-weight-700">Us??ugi</h6>
                        <small class="text-white font-weight-600 text-uppercase bg-rose rounded-xl px-2 mb-1"><?= get_services_count($company_page) ?></small>
                    </a>
                    <a href="<?php echo $pages->get(1)->url ?>panel/oferty-pracy" class="<?php if ($page->title === 'Oferty Pracy' || $page->title === 'Dodaj ofert?? pracy' || $page->title === 'Edytuj ofert?? pracy' ) echo 'active' ?> list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <h6 class="font-weight-700">Oferty pracy</h6>
                        <small class="text-white font-weight-600 text-uppercase bg-carrot rounded-xl px-2 mb-1"><?= get_jobs_count($company_page) ?></small>
                    </a>
                </ul>

                <h6 class="font-weight-700 px-4 px-md-5 px-lg-4 px-xl-5 pt-2">
                    <img src="<?php echo $urls->images ?>heart.svg" alt="favourite" class="d-inline-block">
                    <span>Ulubione</span>
                </h6>
                <ul class="list-group list-group-flush py-0">
                    <a href="<?php echo $pages->get(1)->url ?>panel/ulubione-firmy" class="<?php if ($page->title === 'Ulubione firmy') echo 'active' ?> list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <div class="d-flex align-items-center">
                            <span class="pl-3">Firmy</span>
                        </div>
                        <small x-data="favouriteCompaniesCount()" class="companies-counter text-white font-weight-600 text-uppercase bg-primary rounded-xl px-2 mb-1"><span x-text="counterValue"></span></small>
                    </a>
                    <a href="<?php echo $pages->get(1)->url ?>panel/ulubione-produkty" class="<?php if ($page->title === 'Ulubione produkty') echo 'active' ?> list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <div class="d-flex align-items-center">
                            <span class="pl-3">Produkty</span>
                        </div>
                        <small x-data="favouriteProductsCount()" class="products-counter text-white font-weight-600 text-uppercase bg-primary rounded-xl px-2 mb-1"><span x-text="counterValue"></span></small>
                    </a>
                </ul>

                <h6 class="font-weight-700 px-4 px-md-5 px-lg-4 px-xl-5 pt-2">
                    <img src="<?php echo $urls->svg ?>upload/account-user-info.svg" alt="account" class="d-inline-block mr-1">
                    <span>Konto</span>
                </h6>
                <ul class="list-group list-group-flush py-0">
                    <a href="<?php echo $pages->get(1)->url ?>panel/dane-firmy" class="<?php if ($page->title === 'Dane firmy') echo 'active' ?> list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <div class="d-flex align-items-center">
                            <span class="pl-3">Dane firmy</span>
                        </div>
                    </a>
                    <a href="<?= $pages->get('template=dashboard-change-password')->url ?>" class="<?php if ($page->title === 'Zmiana has??a') echo 'active' ?> list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <div class="d-flex align-items-center">
                            <span class="pl-3">Zmiana has??a</span>
                        </div>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <div class="d-flex align-items-center">
                            <span class="pl-3">Bran??e</span>
                        </div>
                    </a>
                </ul>

                <ul class="list-group list-group-flush py-0">
                    <a href="#" class="list-group-item list-group-item-action d-flex align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <h6 class="font-weight-700">Moje zakupy</h6>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center px-4 px-md-5 px-lg-4 px-xl-5">
                        <h6 class="font-weight-700">Pozycjonerzy</h6>
                        <small class="text-white font-weight-600 text-uppercase bg-purple rounded-xl px-2 mb-1">0</small>
                    </a>
                </ul>

                <hr>

                <h5 class="card-price-title text-uppercase text-center mb-0 py-2">
                    <i class="fas fa-rocket text-primary"></i>
                    <span>Premium</span>
                </h5>

            </div>

        </div>
    </div>
</div>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard-panel.js"></script>

