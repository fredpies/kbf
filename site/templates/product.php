<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$user = wire('user');
$input = wire('input');
$page = wire('page');
$pages = wire('pages');
$urls = wire('urls');

// Przygotuj dane o firmie
$company_data = sanitize_company_data($page->parent("template=company"));
$lat = $company_data["lat"];
$lon = $company_data["lon"];

$company_keywords = $company_data["company_keywords"]; //TODO Wymagane dla SEO

// Przygotuj dane o produkcie
$product_data = sanitize_product_data($page);

// Wysylanie wiadomosci
$message_url = $pages->get("template=message")->url . "?company_id=" . $company_data["company_id"];

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="<?php echo $urls->css ?>leaflet.css">

</head>
<body>

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Content -->

<div class="main-content py-0 product">
    <div class="container">

        <!-- Product info-->
        <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">SZCZEGÓŁY PRODUKTU</h3>

        <div class="bg-white rounded-xl shadow-sm mb-3 mb-md-5">

            <div class="row px-md-5 pt-md-5 px-4 pt-4">
                <div class="col-12 col-md-10">

                    <!-- Product gallery -->
                    <div class="gallery-sync carousel-nav-lg mb-0 d-none d-md-block" data-dots="false" data-gutter="10" data-thumb-md="3" data-thumb-lg="5" data-thumb-xl="5" loop="true">

                        <div class="row">

                            <div class="col-12 col-md-5">
                                <!-- Main images -->
                                <div class="gallery-sync-main arrow-nav-overflow img-thumbnail mb-0">

                                    <div class="owl-carousel owl-centered">

                                        <?php foreach ($product_data["product_images"] as $product_image) {
                                            // Obrazy produktu
                                            echo "<div class=\"gallery-sync-main-item rounded-lg\"><img class=\"img-fluid\" src=\"" . $product_image->url . "\" alt=\"image\"></div>";
                                        } ?>

                                    </div>

                                    <a class="carousel-control-prev" href="#">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>

                                </div>
                            </div>

                            <div class="col-12 col-md-5">

                                <div class="row h-50">
                                    <div class="col-12">
                                        <h5 class="font-weight-700 section-title-4 text-left mt-lg-0"><?php echo $product_data["product_name"]; ?></h5>
                                        <span class="badge badge-pill badge-danger h6 mt-3 d-none d-sm-inline-block"><?php echo $product_data["product_price"];?> PLN</span>
                                    </div>
                                </div>

                                <div class="row h-50 align-items-end">
                                    <div class="col-12">
                                        <!-- Thumbnail images -->
                                        <div class="gallery-sync-thumb">
                                            <div class="owl-carousel owl-theme">

                                                <?php foreach ($product_data["product_images"] as $product_image) {
                                                    // Miniatury produktu
                                                    echo "<div class=\"gallery-sync-thumb-item rounded-lg\"><figure><img class=\"img-fluid\" src=\"" . $product_image->url . "\" alt=\"image\"></figure></div>";

                                                } ?>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Product mobile title and gallery -->
                    <h5 class="font-weight-700 section-title-4 text-center d-block d-md-none"><?php echo $product_data["product_name"]; ?></h5>

                    <div class="gallery-sync carousel-nav-lg mb-3 d-block d-md-none" data-dots="false" data-gutter="10" data-thumb-md="5" data-thumb-lg="5" data-thumb-xl="5">
`
                        <!-- Main images -->
                        <div class="gallery-sync-main arrow-nav-overflow">

                            <div class="owl-carousel">

                                <?php foreach ($product_data["product_images"] as $product_image) {
                                    // Obrazy produktu
                                    echo "<div class=\"gallery-sync-main-item rounded-lg\"><img class=\"img-fluid\" src=\"" .  $product_image->url . "\" alt=\"image\"></div>";
                                } ?>

                            </div>

                            <a class="carousel-control-prev" href="#">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>

                        </div>

                        <!-- Thumbnail images -->
                        <div class="gallery-sync-thumb">
                            <div class="owl-carousel owl-theme">

                                <?php foreach ($product_data["product_images"] as $product_image) {
                                    // Miniatury produktu
                                    echo "<div class=\"gallery-sync-thumb-item rounded-lg\"><figure><img class=\"img-fluid\" src=\"" . $product_image->url . "\" alt=\"image\"></figure></div>";
                                } ?>

                            </div>
                        </div>

                    </div>

                </div>

                <div class="col-12 col-md-2 text-right d-none d-md-block">

                    <?php if($user->isLoggedin()) { ?>

                    <span x-data="KbfLikeProduct()">
                        <a x-ref="anchor" :class="disabled ? 'disabled-anchor' : ''" data-product-id="<?= $product_data["product_id"] ?>" href="#" class="text-dark tooltip-btn p-1 mr-n1" data-toggle="tooltip" data-placement="right" title="Dodaj do ulubionych">
                            <img @click.prevent.self="addToFavourites" src="<?php echo $urls->images ?>heart.svg" alt="heart-image" class="d-inline-block">
                        </a>
                    </span>

                    <?php  } ?>

                    <h6 class="pt-4"><?php echo $product_data["product_inventory"];?> szt.</h6>
                </div>
            </div>

            <div class="row px-md-5 px-4 py-1 py-md-3 d-sm-none">
                <div class="col-12 text-center text-md-left">
                    <span class="badge badge-pill badge-danger h6"><?php echo $product_data["product_price"];?> PLN</span>
                </div>
            </div>

            <div class="row px-md-5 px-4 py-3 mt-sm-3">
                <div class="col-12">
                    <p><?php echo $product_data["product_description"]; ?></p>
                </div>
            </div>

            <div class="row px-md-5 px-4 py-3">
                <div class="col-12 text-center text-md-right align-self-center">

                    <?php if (!$input->action) { ?>

                        <div class="input-group input-group-lg input-group-round d-block d-sm-inline-block w-auto" style="max-width: 200px; margin: auto;">
                            <div class="input-group-inner">
                                <input type="number" class="form-control form-control-lg" value="1">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-lg btn-round btn-primary shadow-none mb-0" type="button">KUP</button>
                                </div>
                                <div class="input-focus-bg"></div>
                            </div>
                        </div>
                        <button type="button" class="kbf-back-button btn btn-round btn-secondary shadow-none m-0 mt-3 ml-sm-3 mt-sm-0 mb-1">POWRÓT</button>

                    <?php } ?>

                    <?php if ($input->action === 'preview' && $user->isLoggedin()) { ?>

                        <button class="d-none kbf-back-button"></button>
                        <a href="<?= $pages->get('template=dashboard-products')->url ?>" class="btn btn-round btn-secondary shadow-none m-0 mt-3 ml-sm-3 mt-sm-0 mb-1 text-white">POWRÓT</a>

                    <?php } ?>


                </div>
            </div>

            <hr class="mb-3 mb-md-0">

            <!-- Company details -->
            <div class="row px-md-5 pt-md-5 px-4 pt-4">
                <div class="col-12 col-md-7 px-0">
                    <?php  render_company_info($company_data); ?>
                </div>

                <!-- Minimap -->
                <div class="col-12 col-md-4 my-3 my-md-0 no-gutters">
                    <div id="kbf-minimap" data-lat="<?php if(isset($lat) && !empty($lat)) echo $lat; ?>" data-lon="<?php if(isset($lon) && !empty($lon)) echo $lon; ?>"></div>
                </div>
                <?php if ($user->isLoggedIn()) {?>

                    <div class="col-12 col-md-1 text-center text-md-right mb-3">

                         <span x-data="KbfLikeCompany()">
                            <a x-ref="anchor" :class="disabled ? 'disabled-anchor' : ''" data-company-id="<?= $company_data["company_id"] ?>" href="#" class="d-block text-dark tooltip-btn" data-toggle="tooltip" data-placement="right" title="Dodaj do ulubionych">
                                <img @click.prevent.self="addToFavourites" src="<?php echo $urls->images ?>heart.svg" alt="heart-image" class="d-inline-block">
                            </a>
                         </span>

                        <a href="<?php echo $message_url ?>" class="d-block text-dark tooltip-btn mr-1" data-toggle="tooltip" data-placement="right" title="" data-original-title="Wyślij wiadomość">
                            <img width="23" height="24" class="d-inline-block mx-auto" src="<?php echo $urls->images?>email.svg" alt="email-image">
                        </a>

                    </div>

                <?php } ?>

                <div class="col-12">

                    <?php

                    // Opis firmy
                    if (!empty($company_description_html))
                        echo "<div class=\"company-description my-2 my-md-4\">" . $company_description_html . "<div style=\"z-index: 0;\" class=\"header-shadow-wrapper d-sm-none\"></div>" . "</div>";
                    ?>

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

<!-- Leaflet js -->
<script src="<?php echo $urls->js ?>vendor/leaflet.js"></script>

<!-- Leaflet Providers js -->
<script src="<?php echo $urls->js ?>vendor/leaflet-providers.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>product.js"></script>
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
