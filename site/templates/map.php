<?php

include_once "partials/_init.php";
include_once "lib/functions.php";

// Strona z lista firm
$company_list_page_url = $pages->get("template=companies")->url;

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="<?php echo $urls->css ?>leaflet.css">
    <!-- Perfect scrollbar-->
    <link rel="stylesheet" href="<?php echo $urls->css ?>perfect-scrollbar.css">

</head>
<body>

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Content -->

<!-- Control panels -->

<div class="kbf-map-panels">
    <div id="kbf-map-panel" class="col px-0">
        <div class="card">
            <div class="card-body py-4 py-md-4">
                <h4 class="card-title">Wybierz obszar</h4>

                <!-- Provinces area switcher -->
                <div class="row">

                    <div data-name="province-name" id="provinces" class="dropdown col-12 mb-4">
                        <h6>Województwo</h6>
                        <button class="btn btn-round btn-primary px-3 mx-0 mb-3 mb-md-0 dropdown-toggle w-full"
                                type="button"
                                id="provinces-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </button>
                    </div>

                    <div data-name="area-name" id="areas" class="dropdown col-12">
                        <h6>Powiat</h6>
                        <button class="btn btn-round btn-primary px-3 mx-0 mb-0 dropdown-toggle w-full" type="button"
                                id="areas-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </button>
                    </div>

                    <div class="px-3" style="font-size: 0.75rem;"><span class="text-right"><i class="fas fa-info text-primary mr-2"></i></span>Wybierz województwo i powiat w celu zlokalizowania firm na mapie.</div>

                    <div class="mt-2 col-12"><a class="kbf-map-panel-show-all">Pokaż całą mapę</a></div>
                    <div class="mt-2 col-12"><a style="display:none" class="kbf-map-panel-show-province">Pokaż całe województwo</a></div>

                </div>
            </div>

        </div>
    </div>
    <div id="kbf-map-panel" class="d-none col px-0 industries">

        <div class="card">

            <!-- Mini preloader -->
            <div class="kbf-mini-preloader">
                <div id="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="card-body py-4 py-md-4">

                <h6 class="kbf-current-area card-title font-weight-300"></h6>

                <div class="row">
                    <div data-name="industry" id="industries" class="dropdown col-12 mb-4">
                        <h6>Branża</h6>
                        <button class="btn btn-round btn-primary px-3 mx-0 mb-3 mb-md-0 dropdown-toggle w-full"
                                type="button"
                                id="industries-button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                        </button>
                    </div>

                    <div data-name="sub-industry" id="sub-industries" class="dropdown col-12 mb-4">
                        <h6>Sub-branża</h6>
                        <button class="btn btn-round btn-primary px-3 mx-0 mb-2 dropdown-toggle w-full"
                                type="button"
                                id="sub-industries-button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                        </button>
                    </div>

                    <p class="col-12">W celu ograniczenia liczby wyników wybierz odpowiednią branżę.</p>

                    <div class="mt-2 col-12"><a style="display:none" class="kbf-map-panel-show-province">Pokaż całe
                            województwo</a></div>

                </div>
            </div>
        </div>
    </div>
</div>

<!-- Show companies -->
<form data-action="<?php echo $company_list_page_url ?>">
    <div class="kbf-map-show-companies">
        <button class="btn btn-round btn-success mx-0 mb-3 mb-md-0 w-full" type="submit">
            Pokaż listę
        </button>
    </div>
</form>


<!--Area name info-->
<div class="kbf-map-info p-1"></div>

<!-- Map contents -->
<div id="kbf-map"></div>


<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- jQuery Finger -->
<script src="<?php echo $urls->js ?>vendor/jquery.finger.min.js"></script>

<!-- Leaflet js -->
<script src="<?php echo $urls->js ?>vendor/leaflet.js"></script>

<!-- Leaflet Providers js -->
<script src="<?php echo $urls->js ?>vendor/leaflet-providers.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>map.js"></script>


</body>
</html>
