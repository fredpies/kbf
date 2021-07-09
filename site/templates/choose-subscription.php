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

<div class="main-content py-0 product">
    <div class="container">

        <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">WYBIERZ RODZAJ
            SUBSKRYPCJI</h3>
        <div class="row">

            <div class="col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                <div class="card card-price-table border-0 shadow-lg rounded-xl text-center">
                    <div class="card-body">
                        <div class="card-price d-flex justify-content-center mt-3">
                            <div class="currency align-self-start">$</div>
                            <div class="price text-primary">359</div>
                            <div class="term align-self-end">/ year</div>
                        </div>
                        <h5 class="card-price-title text-uppercase"><i class="fas fa-paper-plane text-primary"></i>Standard
                        </h5>
                        <ul class="card-price-list">
                            <li>Lorem ipsum dolor</li>
                            <li>Aliquam ullamcorper</li>
                            <li>Maecenas rutrum nunc</li>
                            <li>Vestibulum porta</li>
                            <li>Morbi nunc pretium</li>
                        </ul>
                        <a href="#" role="button" class="btn btn-primary btn-lg btn-round mb-4">Get a Quote</a>
                    </div>
                </div>
            </div>

            <div class="col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                <div class="card card-price-table border-0 shadow-lg rounded-xl text-center text-white-75 bg-indigo">
                    <div class="card-body">
                        <div class="card-price d-flex justify-content-center mt-3">
                            <div class="currency align-self-start text-white-75">$</div>
                            <div class="price text-white">759</div>
                            <div class="term align-self-end">/ year</div>
                        </div>
                        <h5 class="card-price-title text-uppercase text-white"><i class="fas fa-rocket text-white"></i>Premium
                        </h5>
                        <ul class="card-price-list">
                            <li>Lorem ipsum dolor</li>
                            <li>Aliquam ullamcorper</li>
                            <li>Maecenas rutrum nunc</li>
                            <li>Vestibulum porta</li>
                            <li>Morbi nunc pretium</li>
                        </ul>
                        <a href="#" role="button" class="btn btn-secondary btn-lg btn-round btn-gray-shadow mb-4">Get a
                            Quote</a>
                    </div>
                </div>
            </div>

            <div class="col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                <div class="card card-price-table border-0 shadow-lg rounded-xl text-center">
                    <div class="card-body">
                        <div class="card-price d-flex justify-content-center mt-3">
                            <div class="currency align-self-start">$</div>
                            <div class="price text-primary">979</div>
                            <div class="term align-self-end">/ year</div>
                        </div>
                        <h5 class="card-price-title text-uppercase"><i class="fas fa-gem text-primary"></i>Diamond</h5>
                        <ul class="card-price-list">
                            <li>Lorem ipsum dolor</li>
                            <li>Aliquam ullamcorper</li>
                            <li>Maecenas rutrum nunc</li>
                            <li>Vestibulum porta</li>
                            <li>Morbi nunc pretium</li>
                        </ul>
                        <a href="#" role="button" class="btn btn-primary btn-lg btn-round mb-4">Get a Quote</a>
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
