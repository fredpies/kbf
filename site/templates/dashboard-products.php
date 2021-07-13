<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

check_user(wire('user'));

$pages = wire('pages');
$page = wire('page');
$input = wire('input');
$session = wire('session');
$user = wire('user');
$urls = wire('urls');
$sanitizer = wire('sanitizer');

$page_title = $sanitizer->text($page->title);

check_user($user);
$company_page = $pages->get($session->company_page_id);
check_user_company($company_page);

$products_group = $company_page->find("title=Produkty");
if ($products_group->count()) {
    $products = $products_group[0]->children();
    $products_sold = $products_group[0]->children()->find('product_sold>0');
}
else {
    $products = array();
    $products_sold = array();
}

// Modal
$modalMarkup = '

    <h5 class="text-center">Jesteś pewien, że chcesz usunąć produkt ?</h5>
    <form class="row mt-5" action="' . $page->url . '" method="post" name="delete-confirmation">
        <div class="col"><button type="submit" class="confirm-button btn btn-round btn-danger w-100">Usuń</button></div>
        <div class="col"><button data-dismiss="modal" type="button" class="cancel-button btn btn-round btn-success w-100">Anuluj</button></div>
        <input type="hidden" name="action" value="delete-product">
        <input type="hidden" name="product_id">   
    </form>
';

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
<div class="main-content bg-light pt-0 pb-5">

    <div class="section">
        <div class="container">
            <div class="row">

                <!-- Sidebar -->
                <?php include_once "partials/_panel-menu.php" ?>

                <!-- Content body -->
                <div class="col-lg-8">

                    <div class="pb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <nav class="d-none d-sm-block" aria-label="breadcrumb">
                                <ol class="breadcrumb mb-3 mb-sm-0">
                                    <li class="breadcrumb-item"><a href="<?= $pages->get('template=dashboard')->url ?>">Panel</a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><?= $page_title ?></li>
                                </ol>
                            </nav>

                            <?php

                            if ($input->post->action === 'update-product') {
                                echo render_alert('Dane produktu zostały zaktualizowane.', 'light');
                            }

                            if ($input->post->action === 'add-product') {
                                echo render_alert('Nowy produkt został zarejestrowany..', 'light');
                            }

                            if ($input->post->action === 'delete-product') {
                                echo render_alert('Produkt został trwale usunięty.', 'light');
                            }

                            ?>


                            <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left pl-3">Lista produktów</h5>

                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="active company-products nav-item nav-link" id="nav-first-tab" data-toggle="tab" href="#registered" role="tab" aria-controls="company-products-pane" aria-selected="false">Zarejestrowane</a>
                                    <a class="company-services nav-item nav-link" id="nav-second-tab" data-toggle="tab" href="#sold" role="tab" aria-controls="nav-profile" aria-selected="false">Sprzedane</a>
                                </div>
                            </nav>

                            <form class="mt-5" method="get" action="">
                                <div class="tab-content" id="nav-tabContent">

                                <div class="tab-pane fade show active" id="registered" role="tabpanel" aria-labelledby="nav-first-tab">

                                    <?php

                                        if ($products->count()) {
                                            foreach ($products as $product) {
                                            echo render_dashboard_product_inventory_list_item(sanitize_product_data($product), $pages->get('template=dashboard-edit-product')->url . '?id=' . $product->id);
                                            }
                                        } else
                                            echo render_info_message('Nie posiadasz aktualnie zarejestrowanych produktów. Wybierz opcję "ZAREJESTRUJ PRODUKT", aby dodać go do listy zarejestrowanych produktów.<div style="height: 0" class="header-shadow-wrapper position-static z-index-0 mt-2"></div>', 'col-12 mb-3');
                                    ?>

                                    <?= get_pagination($products); ?>

                                    <div class="d-flex justify-content-between flex-wrap mt-4">
                                        <div class="col-12 col-sm-5 px-0">
                                            <a href=" <?= $pages->get('template=dashboard')->url ?>" class="back-button btn btn-round btn-secondary mb-4 w-100 text-white">Powrót</a>
                                        </div>
                                        <div class="col-12 col-sm-5 px-0">
                                            <a type="button" href="<?= $pages->get('template=dashboard-add-product')->url ?>" class="btn btn-round btn-primary mb-4 w-100 text-white">Zarejestruj produkt</a>
                                        </div>
                                    </div>

                                </div>

                                <div class="tab-pane fade" id="sold" role="tabpanel" aria-labelledby="nav-second-tab">

                                    <?php
                                        if ($products_sold->count()) {
                                            foreach ($products_sold as $product_sold) {
                                                echo render_dashboard_product_sold_list_item(sanitize_product_data($product_sold));
                                            }
                                        } else
                                        echo render_info_message('Żaden z produktów nie został jeszcze sprzedany.<div style="height: 0" class="header-shadow-wrapper position-static z-index-0 mt-2"></div>', 'col-12 mb-3');

                                    ?>

                                    <?= get_pagination($products_sold); ?>

                                    <div class="d-flex justify-content-between flex-wrap mt-4">
                                        <div class="col-12 col-sm-5 px-0">
                                            <a href=" <?= $pages->get('template=dashboard')->url ?>" class="back-button btn btn-round btn-secondary mb-4 w-100 text-white">Powrót</a>
                                        </div>
                                        <div class="col-12 col-sm-5 px-0">
                                            <a type="button" href="<?= $pages->get('template=dashboard-add-product')->url ?>" class="btn btn-round btn-primary mb-4 w-100 text-white">Zarejestruj produkt</a>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            </form>


                        </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <?= render_modal("confirmation", "Potwierdzenie", $modalMarkup) ?>

</div>

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard-products.js"></script>
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
