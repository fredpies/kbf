<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

check_user(wire('user'));

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
                            <h5 class="font-weight-700 mb-2 section-title-4 text-left">Banery</h5>
                            <p>Przeciągnij zapisany baner na pole wybranego banera reklamowego aby go zmienić lub wykupić.</p>

                            <div class="row">

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 bg-warning border-0 shadow">
                                        <div class="card-body text-center">
                                            <a href="#">
                                                <img src="<?php echo $urls->images ?>image-placeholder.jpg" alt="company-logo" class="img-fluid border rounded" style="height: 100px;">
                                            </a>
                                            <h6 class="text-white my-3">Witryna Startowa</h6>
                                            <div class="text-white font-weight-bold">
                                                <span class="d-block">20 PLN/MC</span>
                                                <span class="d-block">100 PLN/ROK</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 bg-secondary border-0 shadow">
                                        <div class="card-body text-center">
                                            <a href="#">
                                                <img src="<?php echo $urls->images ?>image-placeholder.jpg" alt="company-logo" class="img-fluid border rounded" style="height: 100px;">
                                            </a>
                                            <h6 class="text-white my-3">Firmy</h6>
                                            <div class="text-white font-weight-bold">
                                                <span class="d-block">20 PLN/MC</span>
                                                <span class="d-block">100 PLN/ROK</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-xl-4 mb-4">
                                    <div class="card h-100 mb-0 text-white bg-sky border-0 shadow">
                                        <div class="card-body text-center">
                                            <a href="#">
                                                <img src="<?php echo $urls->images ?>image-placeholder.jpg" alt="company-logo" class="img-fluid border rounded" style="height: 100px;">
                                            </a>
                                            <h6 class="text-white my-3">Oferty pracy</h6>
                                            <div class="text-white font-weight-bold">
                                                <span class="d-block">aktywny do</span>
                                                <span class="d-block">22.09.2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-first-tab" data-toggle="tab" href="#nav-first" role="tab" aria-controls="nav-first" aria-selected="true">Zapisane banery</a>
                                    <a class="nav-item nav-link" id="nav-second-tab" data-toggle="tab" href="#nav-second" role="tab" aria-controls="nav-profile" aria-selected="false">Dodaj nowy</a>
                                </div>
                            </nav>

                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab">
                                    <div class="row">

                                        <div class="col-lg-6 col-xl-4 mb-4">
                                            <div class="card h-100 mb-0 bg-light border-0 shadow">
                                                <div class="card-body text-center">
                                                    <a href="#">
                                                        <img src="<?php echo $urls->images ?>image-placeholder.jpg" alt="company-logo" class="img-fluid border rounded" style="height: 100px;">
                                                    </a>
                                                    <h6 class="text-black-50 mt-3">Nazwa banera</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-xl-4 mb-4">
                                            <div class="card h-100 mb-0 bg-light border-0 shadow">
                                                <div class="card-body text-center">
                                                    <a href="#">
                                                        <img src="<?php echo $urls->images ?>image-placeholder.jpg" alt="company-logo" class="img-fluid border rounded" style="height: 100px;">
                                                    </a>
                                                    <h6 class="text-black-50 mt-3">Nazwa banera</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-xl-4 mb-4">
                                            <div class="card h-100 mb-0 bg-light border-0 shadow">
                                                <div class="card-body text-center">
                                                    <a href="#">
                                                        <img src="<?php echo $urls->images ?>image-placeholder.jpg" alt="company-logo" class="img-fluid border rounded" style="height: 100px;">
                                                    </a>
                                                    <h6 class="text-black-50 mt-3">Nazwa banera</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-xl-4 mb-4">
                                            <div class="card h-100 mb-0 bg-light border-0 shadow">
                                                <div class="card-body text-center">
                                                    <a href="#">
                                                        <img src="<?php echo $urls->images ?>image-placeholder.jpg" alt="company-logo" class="img-fluid border rounded" style="height: 100px;">
                                                    </a>
                                                    <h6 class="text-black-50 mt-3">Nazwa banera</h6>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div class="tab-pane fade" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">
                                    <p>formularz</p>
                                </div>
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
<script src="<?php echo $urls->js ?>dashboard-banners.js"></script>
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
