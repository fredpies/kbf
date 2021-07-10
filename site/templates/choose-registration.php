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

<div class="main-content py-0 product bg-image" data-img-src="<?= $urls->images ?>upload/section-bg-shape-01.png" style="background-image: url('<?= $urls->images ?>upload/section-bg-shape-01.png');">
    <div class="container">

        <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">REJESTRACJA</h3>
        <div class="top-message justify-content-center w-100 mx-0 d-flex" style="display: none;"><div class="text-center col-12 col-md-10 my-4"><h5 class="d-inline-block font-weight-400 page-info-msg-contents">Wybierz rodzaj konta które chcesz zarejestrować.</h5></div></div>

        <div class="bg-transparent rounded-xl mb-3 mb-md-5">

            <div class="row justify-content-center mb-5">

                <div class="col-md-6 col-lg-4">

                    <div class="card info-box-3 hover-item border-0 shadow bg-transparent">
                        <figure>
                            <img class="card-img" src="<?= $urls->images . 'rejestracja-firmy.png' ?>" alt="Info box">
                        </figure>
                        <div class="hover-transition"></div>
                        <div class="card-img-overlay d-flex align-items-end">
                            <div class="info-box-details w-100">
                                <div class="info-box-title">
                                    <h4 class="card-title text-white font-weight-700">Rejestracja firmy</h4>
                                </div>
                                <div class="info-box-desc">
                                    <p class="card-text text-white-75">Zarejestruj firmę w KBF, promuj ją w internecie, umieszczaj banery reklamowe, nawiązuj kontakty oraz sprzedawaj swoje produkty i usługi.</p>
                                    <div class="info-box-btn-inner d-flex justify-content-end mt-5">
                                        <a href="<?= $pages->get('template=register-company')->url ?>" class="btn btn-round btn-outline-light btn-gray-shadow mb-0">Zarejestruj</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-md-6 col-lg-4">

                    <div class="card info-box-3 hover-item border-0 shadow bg-transparent">
                        <figure>
                            <img class="card-img" src="<?= $urls->images . 'rejestracja-uzytkownika.png' ?>" alt="Info box">
                        </figure>
                        <div class="hover-transition"></div>
                        <div class="card-img-overlay d-flex align-items-end">
                            <div class="info-box-details w-100">
                                <div class="info-box-title">
                                    <h4 class="card-title text-white font-weight-700">Rejestracja użytkownika</h4>
                                </div>
                                <div class="info-box-desc">
                                    <p class="card-text text-white-75">Zarejestruj się jako klient KBF, wyszukuj firmy, aplikuj na oferowane stanowiska pracy oraz kupuj produkty i usługi.</p>
                                    <div class="info-box-btn-inner d-flex justify-content-end mt-5">
                                        <a href="#" class="btn btn-round btn-outline-light btn-gray-shadow mb-0">Zarejestruj</a>
                                    </div>
                                </div>
                            </div>
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
