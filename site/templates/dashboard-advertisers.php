<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

check_user(wire('user'));

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
<?php include_once "partials/_panel-page-title.php" ?>

<!-- Content -->
<div class="main-content bg-light pb-3 pt-0">

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

                                <h5 class="dashboard-title section-title-3 w-100 text-center">Lista zarejestrowanych pozycjonerów</h5>

                                <div class="col-12">

                                    <div class="row mt-5 mb-3 d-none d-md-flex">

                                        <div class="col-12 col-sm-5 col-xl-4 pr-4">
                                            Data rejestracji
                                        </div>

                                        <div class="col-12 col-sm-4 col-lg-5 col-xl-7 pl-sm-3">
                                            Nazwa pozycjonera
                                        </div>

                                        <div class="col-12 col-sm-2 col-lg-1"></div>

                                    </div>


                                    <?=  render_dashboard_advertiser_list_item("15-05-2021", "Piotr", "Malinowski") ?>
                                    <?=  render_dashboard_advertiser_list_item("12-05-2021", "Adam", "Słodowy") ?>


                                    <div class="row justify-content-center justify-content-lg-end">
                                        <div class="col-6">
                                            <nav class="mt-3" aria-label="Companies navigation">
                                                <ul class="pagination pagination-round justify-content-center"><li class="page-item"></li><li class="page-item active"><a class="page-link" href="#">1<span class="sr-only">(current)</span></a></li><li class="page-item"><a class="page-link" href="/kbf2/firmy/page2?industry=BIURO+I+DOM">2</a></li><li class="page-item"><a class="page-link" href="/kbf2/firmy/page3?industry=BIURO+I+DOM">3</a></li><li class="page-item"><a class="page-link" href="/kbf2/firmy/page4?industry=BIURO+I+DOM">4</a></li><li class="page-item"><a class="page-link" href="/kbf2/firmy/page5?industry=BIURO+I+DOM">5</a></li><li class="page-item">…</li><li class="page-item"><a class="page-link" href="/kbf2/firmy/page413?industry=BIURO+I+DOM">413</a></li><li class="page-item"><a class="page-link" href="/kbf2/firmy/page2?industry=BIURO+I+DOM"><span aria-hidden="true">»</span><span class="sr-only">Następna</span></a></li></ul>                            </nav>
                                        </div>
                                    </div>



                                    <form class="mt-5" method="get" action="">

                                        <div class="row justify-content-center">
                                            <div class="col-12 col-xl-6">
                                                <button type="submit" class="btn btn-round btn-outline-dark mb-4 mx-2 mx-lg-0 w-100">Dodaj pozycjonera</button>
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
