<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$urls = wire('urls');
$pages = wire('pages');

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>

</head>
<body>

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Content -->
<div class="z-index-1 subscriptions-title position-fixed">
    <h3 class="text-center font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">WYBIERZ RODZAJ
        ABONAMENTU</h3></div>

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
                            <a href="#" role="button" class="align-self-end d-inline-block btn btn-secondary btn-lg btn-round btn-gray-shadow">Wybierz</a>
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
                            <a href="#" role="button" class="align-self-end d-inline-block btn btn-secondary btn-lg btn-round btn-gray-shadow">Wybierz</a>
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
                            <a href="#" role="button" class="align-self-end d-inline-block btn btn-secondary btn-lg btn-round btn-gray-shadow">Wybierz</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>


</body>
</html>
