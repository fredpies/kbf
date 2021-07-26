<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$urls = wire('urls');
$pages = wire('pages');
$input = wire('input');
$session = wire('session');
$sanitizer = wire('sanitizer');

$subscribe_url = '';

$session->remove('company_name');
$session->remove('company_email');
$session->remove('company_phone_1');
$session->remove('company_nip');
$session->remove('company_regon');
$session->remove('province_name');
$session->remove('area_name');
$session->remove('industry');
$session->remove('sub_industry');
$session->remove('lat');
$session->remove('lon');
$session->remove('company_www');
$session->remove('company_description_html');
$session->remove('company_keywords');
$session->remove('company_subscription');
$session->remove('company_address');
$session->remove('company_city');
$session->remove('company_zip');

if ($input->post) {

    $subscribe_url = $pages->get('template=subscribe')->url;

    // Ustaw sesje
    foreach ($input->post as $post_variable => $value) {
        if (!empty($post_variable) && isset($post_variable)) $session->set($post_variable, $value);
    }

    // Przepisz slowa kluczowe
    $keywords_array = array();
    foreach (json_decode($session->company_keywords) as $keyword) {
        array_push($keywords_array, $keyword->value);
    }
    $session->set('company_keywords', implode(',', $keywords_array));

}

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>

    <script src="https://js.stripe.com/v3/"></script>

</head>
<body>

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Content -->
<!---->
<!--<div class="z-index-1 subscriptions-title position-fixed">-->
<!--    <h3 class="text-center font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">WYBIERZ RODZAJ-->
<!--        ABONAMENTU</h3>-->
<!--</div>-->

<div class="subscriptions main-content py-0 product d-flex align-content-center vh-100">

    <div class="container">
        <div class="row">

                <div class="subscription-option col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                    <div class="card card-price-table border-0 shadow-lg rounded-xl text-center">
                        <div class="card-body">
                            <div class="card-price d-flex justify-content-center mt-3">
                                <div class="currency align-self-start">PLN</div>
                                <div class="price text-primary">120</div>
                                <div class="term align-self-end">netto / rok</div>
                            </div>
                            <h5 class="card-price-title text-uppercase"><i class="fas fa-paper-plane text-primary"></i>Podstawowy
                            </h5>
                            <ul class="card-price-list">
                                <li>Rejestracja jednego banera reklamowego</li>
                                <li>Rejestracja firmy w trzech branżach</li>
                                <li>Dedykowany panel zarządzania firmą</li>
                            </ul>
                            <div class="subscription-button position-absolute d-flex w-100 justify-content-center">

                                <form method="post" action="<?= $subscribe_url ?>">
                                    <input type="hidden" name="priceId" value="price_1JFGN8CzGrdUzhmPoYkFjoXB" />
                                    <input type="hidden" name="subscription" value="basic">
                                    <button class="align-self-end d-inline-block btn btn-secondary btn-lg btn-round btn-gray-shadow" type="submit">Wybierz</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="subscription-option col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                    <div class="card card-price-table border-0 shadow-lg rounded-xl text-center text-white-75 bg-indigo">
                        <div class="card-body">
                            <div class="card-price d-flex justify-content-center mt-3">
                                <div class="currency align-self-start text-white-75">PLN</div>
                                <div class="price text-white">180</div>
                                <div class="term align-self-end">netto / rok</div>
                            </div>
                            <h5 class="card-price-title text-uppercase text-white"><i class="fas fa-rocket text-white"></i>Rozszerzony
                            </h5>
                            <ul class="card-price-list">
                                <li>Zawartość abonamentu podstawowego</li>
                                <li>Dodawanie ofert pracy</li>
                                <li>Rejestracja produktów na sprzedaż</li>
                                <li>Rejestracja trzech banerów reklamowych</li>
                                <li>Promocje produktów, usług i ofert pracy</li>
                            </ul>
                            <div class="subscription-button position-absolute d-flex w-100 justify-content-center">

                                <form method="post" action="<?= $subscribe_url ?>">
                                    <input type="hidden" name="priceId" value="price_1JFGOCCzGrdUzhmPUIrkD6xQ" />
                                    <input type="hidden" name="subscription" value="extended">
                                    <button class="align-self-end d-inline-block btn btn-secondary btn-lg btn-round btn-gray-shadow" type="submit">Wybierz</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="subscription-option col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                    <div class="card card-price-table border-0 shadow-lg rounded-xl text-center">
                        <div class="card-body">
                            <div class="card-price d-flex justify-content-center mt-3">
                                <div class="currency align-self-start">PLN</div>
                                <div class="price text-primary">240</div>
                                <div class="term align-self-end">netto / rok</div>
                            </div>
                            <h5 class="card-price-title text-uppercase"><i class="fas fa-gem text-primary"></i>Zaawansowany</h5>
                            <ul class="card-price-list">
                                <li>Zawartość abonamentu rozszerzonego</li>
                                <li>Baner na witrynie startowej</li>
                                <li>Zarządzanie pozycjonerami</li>
                                <li>Rejestracja czterech banerów reklamowych</li>
                            </ul>
                            <div class="subscription-button position-absolute d-flex w-100 justify-content-center">

                                <form method="post" action="<?= $subscribe_url ?>">
                                    <input type="hidden" name="priceId" value="price_1JFGPDCzGrdUzhmPVkFJJ9DU" />
                                    <input type="hidden" name="subscription" value="advanced">
                                    <button class="align-self-end d-inline-block btn btn-secondary btn-lg btn-round btn-gray-shadow" type="submit">Wybierz</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

        </div>

        <div class="row justify-content-center">
            <div class="col-3">
                <a href="<?= $pages->get(1)->url ?>" class="btn btn-lg btn-round btn-secondary mb-4 mx-2 mx-lg-0 w-100 text-white">Powrót do KBF</a>
            </div>
        </div>

    </div>

</div>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>


</body>
</html>
