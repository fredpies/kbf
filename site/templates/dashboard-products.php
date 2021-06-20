<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$pages = wire('pages');
$page = wire('page');
$urls = wire('urls');
$sanitizer = wire('sanitizer');

$page_title = $sanitizer->text($page->title);

// TODO: Nalezy zmienic na dane zalogowanego uzytkownika/firmy
$company_page = $pages->get(348487);

$products_group = $company_page->find("title=Produkty");
if ($products_group->count()) $products = $products_group[0]->children();
else $products = array();

foreach ($products as $product) {
    //echo $sanitizer->text($product->name)."<br/>";
}

$product_data = $products[0];

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
<div class="main-content bg-light pt-0">

    <div class="section">
        <div class="container">
            <div class="row">

                <!-- Sidebar -->
                <?php include_once "partials/_panel-menu.php" ?>

                <!-- Content body -->
                <div class="col-lg-8">

                    <div class="pb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left"><?= $page_title ?></h5>

                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="active company-products nav-item nav-link" id="nav-first-tab" data-toggle="tab" href="#registered" role="tab" aria-controls="company-products-pane" aria-selected="false">Zarejestrowane</a>
                                    <a class="company-services nav-item nav-link" id="nav-second-tab" data-toggle="tab" href="#sold" role="tab" aria-controls="nav-profile" aria-selected="false">Sprzedane</a>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">

                                <div class="tab-pane fade show active" id="registered" role="tabpanel" aria-labelledby="nav-first-tab">

                                    <!--
                                    <?= render_dashboard_product_inventory_list_item($product_data) ?> -->

                                    <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                        <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                            <img src="<?php echo $urls->images ?>tmp/p1.jpg" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                        </div>

                                        <div class='col-12 col-sm-4 col-xl-5 pt-sm-0 text-center text-lg-left'>
                                            <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'<span>KEMON YO COND CLEAR COLOR SYSTEM ODŻYWKA PIELĘGNUJĄCA KOLOR WŁOSÓW 250ML</span></p>
                                            <p class='text-center text-sm-left'>Dostępne: 120</p>
                                        </div>

                                        <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                            <span class='product-price badge badge-pill badge-danger d-inline-block'>75 PLN</span>
                                        </div>

                                        <div class='col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-left'>
                                            <a href="#" class='mr-n1' title='usun'>Usuń</a><br>
                                            <a href="#" class='mr-n1' title='edytuj'>Edytuj</a>
                                        </div>
                                    </div>

                                    <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                        <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                            <img src="<?php echo $urls->images ?>tmp/p2.jpg" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                        </div>

                                        <div class='col-12 col-sm-4 col-xl-5 pt-sm-0 text-center text-lg-left'>
                                            <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'<span>KEMON YO COND COLOR SYSTEM ROSSO - CZERWIEŃ | ODŻYWKA KOLORYZUJĄCO-PIELĘGNACYJNA DO WŁOSÓW 150ML</span></p>
                                            <p class='text-center text-sm-left'>Dostępne: 21</p>
                                        </div>

                                        <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                            <span class='product-price badge badge-pill badge-danger d-inline-block'>55 PLN</span>
                                        </div>

                                        <div class='col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-left'>
                                            <a href="#" class='mr-n1' title='usun'>Usuń</a><br>
                                            <a href="#" class='mr-n1' title='edytuj'>Edytuj</a>
                                        </div>
                                    </div>

                                    <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                        <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                            <img src="<?php echo $urls->images ?>tmp/p3.jpg" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                        </div>

                                        <div class='col-12 col-sm-4 col-xl-5 pt-sm-0 text-center text-lg-left'>
                                            <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'<span>KEMON YO COND COLOR SYSTEM ARGENTO - SREBRO | ODŻYWKA KOLORYZUJĄCO-PIELĘGNACYJNA DO WŁOSÓW 150ML</span></p>
                                            <p class='text-center text-sm-left'>Dostępne: 12</p>
                                        </div>

                                        <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                            <span class='product-price badge badge-pill badge-danger d-inline-block'>55 PLN</span>
                                        </div>

                                        <div class='col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-left'>
                                            <a href="#" class='mr-n1' title='usun'>Usuń</a><br>
                                            <a href="#" class='mr-n1' title='edytuj'>Edytuj</a>
                                        </div>
                                    </div>

                                    <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                        <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                            <img src="<?php echo $urls->images ?>tmp/p4.jpg" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                        </div>

                                        <div class='col-12 col-sm-4 col-xl-5 pt-sm-0 text-center text-lg-left'>
                                            <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'<span>KEMON YO COND COLOR SYSTEM SABBIA - PIASEK | ODŻYWKA KOLORYZUJĄCO-PIELĘGNACYJNA DO WŁOSÓW 150ML</span></p>
                                            <p class='text-center text-sm-left'>Dostępne: 43</p>
                                        </div>

                                        <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                            <span class='product-price badge badge-pill badge-danger d-inline-block'>55 PLN</span>
                                        </div>

                                        <div class='col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-left'>
                                            <a href="#" class='mr-n1' title='usun'>Usuń</a><br>
                                            <a href="#" class='mr-n1' title='edytuj'>Edytuj</a>
                                        </div>
                                    </div>

                                    <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                        <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                            <img src="<?php echo $urls->images ?>tmp/p5.jpg" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                        </div>

                                        <div class='col-12 col-sm-4 col-xl-5 pt-sm-0 text-center text-lg-left'>
                                            <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'<span>KEMON YO COND COLOR SYSTEM VIOLET - FIOLET | ODŻYWKA KOLORYZUJĄCO-PIELĘGNACYJNA DO WŁOSÓW 150ML</span></p>
                                            <p class='text-center text-sm-left'>Dostępne: 7</p>
                                        </div>

                                        <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                            <span class='product-price badge badge-pill badge-danger d-inline-block'>55 PLN</span>
                                        </div>

                                        <div class='col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-left'>
                                            <a href="#" class='mr-n1' title='usun'>Usuń</a><br>
                                            <a href="#" class='mr-n1' title='edytuj'>Edytuj</a>
                                        </div>
                                    </div>

                                    <nav aria-label="Products navigation">
                                        <ul class="pagination pagination-round justify-content-center">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                    <span class="sr-only">Poprzednia</span>
                                                </a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                    <span class="sr-only">Następna</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div class="tab-pane fade" id="sold" role="tabpanel" aria-labelledby="nav-second-tab">

                                    <!--
                                    <?= render_dashboard_product_sold_list_item($product_data) ?> -->
                                    <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                        <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                            <img src="<?php echo $urls->images ?>tmp/p1.jpg" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                        </div>

                                        <div class='col-12 col-sm-4 col-xl-5 pt-sm-0 text-center text-lg-left'>
                                            <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'<span>KEMON YO COND CLEAR COLOR SYSTEM ODŻYWKA PIELĘGNUJĄCA KOLOR WŁOSÓW 250ML</span></p>
                                            <p class='text-center text-sm-left'>Sprzedane: 2</p>
                                        </div>

                                        <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                            <span class='product-price badge badge-pill badge-danger d-inline-block'>75 PLN</span>
                                        </div>

                                        <div class='col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-left'>
                                            <a href="#" class='mr-n1' title='usun'>Usuń z listy</a>
                                        </div>
                                    </div>

                                    <nav aria-label="Products navigation">
                                        <ul class="pagination pagination-round justify-content-center">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                    <span class="sr-only">Poprzednia</span>
                                                </a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                    <span class="sr-only">Następna</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>

                                </div>

                            </div>

                            <form class="mt-5" method="get" action="">

                                <div class="row justify-content-center">
                                    <div class="col-12 col-xl-6">
                                        <button type="submit" class="btn btn-round btn-outline-dark mb-4 mx-2 mx-lg-0 w-100">Dodaj nowy produkt</button>
                                    </div>

                                    <input name="company_id" value="3" type="hidden">
                                    <input name="job_id" value="348459" type="hidden">

                                </div>

                            </form>


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
