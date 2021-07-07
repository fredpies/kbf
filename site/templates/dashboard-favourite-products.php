<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

check_user(wire('user'));

$page = wire('page');
$sanitizer = wire('sanitizer');
$page_title = $sanitizer->text($page->title);

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

                    <div class="pb-3 mb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left"><?= $page_title ?></h5>

                            <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                    <a href="#">
                                        <img src="<?php echo $urls->images ?>tmp/p1.jpg" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                    </a>
                                </div>

                                <div class='col-12 col-sm-4 col-xl-6 pt-sm-0 text-center text-lg-left'>
                                    <a href="#">
                                        <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'><span>KEMON YO COND CLEAR COLOR SYSTEM ODŻYWKA PIELĘGNUJĄCA KOLOR WŁOSÓW 250ML</span></p>
                                    </a>
                                </div>

                                <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                    <span class='product-price badge badge-pill badge-danger d-inline-block'>75 PLN</span>
                                </div>

                                <div class='col-12 col-sm-3 col-xl-2 mt-2 mt-sm-0 text-center text-sm-left'>
                                    <a href="#" class='d-inline-block d-sm-block text-center mb-0 mr-2 mr-sm-0' title='oferta'>Oferta</a>
                                    <a href="#" class="d-inline-block d-sm-block text-center text-dark tooltip-btn" data-toggle="tooltip" data-placement="right" title="" data-original-title="Usuń z ulubionych">
                                        <img width="25" height="25" class="d-inline-block" src="<?php echo $urls->images ?>trash.svg" alt="">
                                    </a>
                                </div>
                            </div>

                            <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
                                <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                                    <a href="#">
                                        <img src="<?php echo $urls->images ?>tmp/p2.jpg" alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
                                    </a>
                                </div>

                                <div class='col-12 col-sm-4 col-xl-6 pt-sm-0 text-center text-lg-left'>
                                    <a href="#">
                                        <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'><span>KEMON YO COND COLOR SYSTEM ROSSO - CZERWIEŃ | ODŻYWKA KOLORYZUJĄCO-PIELĘGNACYJNA DO WŁOSÓW 150ML</span></p>
                                    </a>
                                </div>

                                <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                                    <span class='product-price badge badge-pill badge-danger d-inline-block'>55 PLN</span>
                                </div>

                                <div class='col-12 col-sm-3 col-xl-2 mt-2 mt-sm-0 text-center text-sm-left'>
                                    <a href="#" class='d-inline-block d-sm-block text-center mb-0 mr-2 mr-sm-0' title='oferta'>Oferta</a>
                                    <a href="#" class="d-inline-block d-sm-block text-center text-dark tooltip-btn" data-toggle="tooltip" data-placement="right" title="" data-original-title="Usuń z ulubionych">
                                        <img width="25" height="25" class="d-inline-block" src="<?php echo $urls->images ?>trash.svg" alt="">
                                    </a>
                                </div>
                            </div>

                            <div class="text-center mx-auto">
                                <nav aria-label="navigation">
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
<script src="<?php echo $urls->js ?>dashboard-favourite-products.js"></script>
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
