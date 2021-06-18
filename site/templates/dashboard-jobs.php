<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

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
<div class="bg-light">
    <div class="container">
        <div class="row pt-5 pb-4">

            <div class="col-12 col-lg-4 ">
                <h5 class="font-weight-800 mb-0 text-center text-lg-left">MOJE KBF</h5>
            </div>

        </div>
    </div>
</div>

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

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Panel</a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><?= $page_title ?></li>
                                </ol>
                            </nav>

                            <div class="row px-3">

                                <h5 class="dashboard-title section-title-3 w-100 text-center">Lista zarejestrowanych ofert pracy</h5>

                                <div class="col-12">

                                    <div class="row mt-5 mb-3 d-none d-md-flex">

                                        <div class="col-12 col-sm-4 col-lg-5 col-xl-4 pr-4 pl-xl-4">
                                           Stanowisko
                                        </div>

                                        <div class="col-12 col-sm-3 col-lg-2 col-xl-3 pl-xl-4">
                                            Rodzaj
                                        </div>

                                        <div class="col-12 col-sm-3 col-lg-5 col-xl-3">
                                            Data ważności
                                        </div>

                                        <div class="col-12 col-sm-2 col-lg-1"></div>

                                    </div>


                                    <?=  render_dashboard_job_list_item("Fryzjer Stylista", "Pełen etat", "2021-12-01") ?>

                                    <br>
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



                                    <form class="mt-5" method="get" action="">

                                        <div class="row justify-content-center">
                                            <div class="col-12 col-xl-6">
                                                <button type="submit" class="btn btn-round btn-outline-dark mb-4 mx-2 mx-lg-0 w-100">Dodaj ofertę pracy</button>
                                            </div>

                                            <input name="company_id" value="3" type="hidden">
                                            <input name="job_id" value="348459" type="hidden">

                                        </div>

                                    </form>



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
<script src="<?php echo $urls->js ?>dashboard.js"></script>
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
