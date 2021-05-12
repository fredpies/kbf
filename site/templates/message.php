<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";


// Strona glowna
$home_page_url = $pages->get(1)->url;

if ($input->company_id) {

    $company_id = $sanitizer->selectorValue($input->company_id);

    $company = $pages->get("template=company, company_id=$company_id");

    if ($pages->count()) {

        // Przygotuj dane o firmie
        $company_data = get_company_data($company, $sanitizer);
        $lat = $company_data["lat"];
        $lon = $company_data["lon"];
        $company_description_html = $company_data["company_description_html"];

    } else {
        $session->redirect($home_page_url);
    }

} else {
    $session->redirect($home_page_url);
}


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
<?php //include_once "partials/_preloader.php"
?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Content -->
<div class="main-content py-0">
    <div class="container">

        <!-- Company details -->
        <div class="bg-white p-md-5 px-4 rounded-xl shadow-sm mb-3">
            <div class="row">
                <div class="col-12 col-md-7 px-0">
                    <?php show_company_info($pages, $company_data); ?>
                </div>

                <!-- Minimap -->
                <div class="col-12 col-md-4 my-3 my-md-0 no-gutters">
                    <div id="kbf-minimap" data-lat="<?php if (isset($lat) && !empty($lat)) echo $lat; ?>"
                         data-lon="<?php if (isset($lon) && !empty($lon)) echo $lon; ?>"></div>
                </div>
                <div class="col-12 col-md-1 text-center text-md-right mb-3">
                    <a href="#" class="text-dark tooltip-btn p-1 mr-n1" data-toggle="tooltip" data-placement="right"
                       title="Dodaj do ulubionych">
                        <img src="<?php echo $urls->images ?>heart.svg" alt="heart-image" class="d-inline-block">
                    </a>
                </div>

            </div>
        </div>

        <h3 class="font-weight-800 mb-0 pt-lg-5 py-lg-0 py-4 section-title-3 text-center text-uppercase">Wyślij wiadomość</h3>

        <div class="kbf-send-message mt-3 mt-md-5">

            <div class="bg-white rounded-xl shadow-sm mb-3 mb-md-5">
                <div class="card-body">

                    <div class="row justify-content-center">
                        <div class="kbf-error-message col-11 card text-white bg-danger px-0 mb-3 d-none">
                            <div class="card-header font-weight-bold">W FORMULARZU WYSTĄPIŁY BŁĘDY</div>
                            <div class="card-body">
                                <p class="card-text">Sprawdź poprawność wypełnienia wszystkich pól i wyślij formularz ponownie.</p>
                            </div>
                        </div>
                    </div>

                    <form novalidate role="form" name="send-message" class="pl-lg-5">
                        <div class="row">

                            <div class="col-12 col-lg-6">
                                <div class="input-group input-group-lg input-group-round mb-4">
                                    <label class="text-uppercase px-3">Imię i nazwisko</label>
                                    <div class="input-group-inner">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text input-group-icon"><i class="far fa-user"></i></span>
                                        </div>
                                        <input autocomplete="off" type="text" class="form-control form-control-lg"
                                               name="name">
                                        <div class="input-focus-bg"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-none d-lg-flex col-6">
                                <p class="kbf-form-info align-self-center">
                                    Wpisz swoje imię i nazwisko. <br/>Wypełnienie pola jest wymagane.
                                </p>
                            </div>

                            <div class="col-12 mb-4 text-carrot error d-none">W celu wysłania formularza należy wypełnić pole "Imię i nazwisko".
                            </div>


                            <div class="col-12 col-lg-6">
                                <div class="input-group input-group-lg input-group-round mb-4">
                                    <label class="text-uppercase px-3">Adres e-mail</label>
                                    <div class="input-group-inner">
                                        <div class="input-group-prepend">
                                        <span class="input-group-text input-group-icon">
                                            <i class="far fa-envelope"></i></span>
                                        </div>
                                        <input type="text" autocomplete="off" class="form-control form-control-lg"
                                               name="email">
                                        <div class="input-focus-bg"></div>
                                    </div>
                                </div>
                            </div>


                            <div class="d-none d-lg-flex col-6">
                                <p class="kbf-form-info align-self-center mb-0">
                                    Wpisz swój adres e-mail. <br>Wypełnienie pola jest wymagane.
                                </p>
                            </div>

                            <div class="col-12 mb-4 text-carrot error d-none">W celu wysłania formularza należy wypełnić
                                pole "Adres e-mail".
                            </div>

                            <div class="col-12 col-lg-6 mb-3">
                                <div class="form-group">
                                    <label class="text-uppercase px-3">Treść wiadomości</label>
                                    <textarea autocomplete="off" class="form-control form-round form-control-lg"
                                              rows="8" name="message"></textarea>
                                </div>
                            </div>

                            <div class="d-none d-lg-flex col-6">
                                <p class="kbf-form-info align-self-center mb-0">
                                    Wpisz treść wiadomości. <br>Wypełnienie pola jest wymagane.
                                </p>
                            </div>

                            <div class="col-12 mb- text-carrot error d-none">W celu wysłania formularza należy wypełnić
                                treść wiadomości.
                            </div>

                            <div class="col-12 text-center text-md-right align-self-center">
                                <div class="row justify-content-center justify-content-xl-start">
                                    <div class="col-12 col-md-6">
                                        <button type="submit"
                                                class=" btn btn-round btn-block shadow-none btn-primary mr-lg-4">Wyślij
                                            wiadomość
                                        </button>
                                    </div>

                                    <div class="col-6 d-none d-xl-block"></div>

                                    <div class="col-12 col-md-6">
                                        <button type="button"
                                                class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">
                                            WRÓĆ
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>

                <hr class="mb-3 mb-md-0">

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

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Leaflet js -->
<script src="<?php echo $urls->js ?>vendor/leaflet.js"></script>

<!-- Leaflet Providers js -->
<script src="<?php echo $urls->js ?>vendor/leaflet-providers.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>message.js"></script>
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
