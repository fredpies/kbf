<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$page = wire('page');
$pages = wire('pages');

// Przygotuj dane o firmie
$company_data = sanitize_company_data($page->parent("template=company"));
$lat = $company_data["lat"];
$lon = $company_data["lon"];
$company_keywords = $company_data["company_keywords"]; // Wymagane dla SEO

// Strona z lista uslug
$services_page_url = $pages->get("template=services")->url;

// Strona wysylania wiadomosci
$message_page_url = $pages->get("template=message")->url . "?company_id=" . $company_data["company_id"];

// Przygotuj dane o serwisie
$service_data = sanitize_service_data($page);

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
        <!-- Company info-->
        <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">SZCZEGÓŁY USŁUGI</h3>

        <div class="bg-white rounded-xl shadow-sm mb-3 mb-md-5">

            <div class="row px-md-5 pt-md-5 px-4 pt-4">
                <div class="col-12 col-md-4">
                    <h5 class="font-weight-700 section-title-4 text-center d-block d-md-none"><?php echo $service_data["service_name"]; ?></h5>

                    <img class="d-block img-fluid" alt="image" src="<?php echo $service_data["service_image"]->url; ?>">
                    <div class="text-center text-md-left mt-3">
                        <span class="badge badge-pill badge-danger h6"><?php echo $service_data["service_price"]; ?> PLN</span>
                    </div>
                </div>

                <div class="col-12 col-md-8">
                    <h5 class="font-weight-700 section-title-4 text-left mt-lg-0 d-none d-md-block"><?php echo $service_data["service_name"]; ?></h5>
                    <p><?php echo $service_data["service_description"]; ?></p>
                </div>
            </div>

            <div class="row px-md-5 px-4 py-3">
                <div class="col-12 text-center text-md-right align-self-center">
                    <button type="button" class="kbf-back-button btn btn-round btn-secondary shadow-none mb-1">WRÓĆ</button>
                </div>
            </div>

            <hr class="mb-3 mb-md-0">

            <!-- Company details -->
            <div class="row p-md-5 px-4">
                <div class="col-12 col-md-6 px-0">

                    <?php render_company_info($company_data); ?>

                </div>
                <div class="col-12 col-md-4 my-3 my-md-0">
                    <!-- Minimap -->
                    <div id="kbf-minimap" data-lat="<?php echo $lat; ?>" data-lon="<?php echo $lon; ?>"></div>
                </div>
                <div class="col-12 col-md-2 text-center text-sm-left mb-3">
                    <a href="<?php echo $company_data["company_url"]; ?>" class="d-sm-block text-primary text-nowrap mr-2">Szczegóły</a>
                    <a href="<?php echo $message_page_url ?>" class="d-sm-block text-primary text-nowrap mr-2">Wiadomość</a>
                    <a href="<?php echo $services_page_url ?>" class="d-sm-block text-primary text-nowrap">Inne usługi</a>
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
