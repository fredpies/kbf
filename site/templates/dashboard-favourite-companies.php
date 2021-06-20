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

                            <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left"><?= $page_title ?></h5>

                            <div class="row bg-white rounded-lg shadow-sm p-4 mb-4 company-list-item">

                                <div class="col-12 col-sm-2 p-xl-4">
                                    <a href="#">
                                        <img src="<?php echo $urls->images ?>upload/company-logo.png" alt="image" class="company-logo d-block mx-auto img-fluid mt-xl-0">
                                    </a>
                                </div>

                                <div class="col-12 col-sm-5 col-xl-6 text-center text-sm-left">
                                    <a class="company-name text-dark d-block mt-3 mb-2 font-weight-500" href="/kbf/firmy/doradztwo-podatkowe-alina-dziewitek/"><span>Doradztwo Podatkowe Alina Dziewitek</span></a>
                                    <div class="company-street h6 font-weight-300">Księcia Witolda 7-9</div>
                                    <div class="company-zip-city mb-2 mb-sm-0 h6 font-weight-300"><span class="company-zip">71-063 </span><span class="company-city">Szczecin</span></div>

                                </div>

                                <div class="col-12 col-sm-4 col-xl-3 text-center text-sm-left">
                                    <a class="company-phone text-dark font-weight-300 d-block text-nowrap mt-3" title="Telefon kontaktowy" href="tel:91 812 57 85"><i class="fas fa-phone-alt mr-2"></i>91 812 57 85</a>
                                    <a class="company-phone text-dark font-weight-300 d-block text-nowrap mt-1" title="Telefon kontaktowy" href="tel:600 49 45 45"><i class="fas fa-phone-alt mr-2"></i>600 49 45 45</a>
                                    <a class="company-phone text-dark font-weight-300 d-block text-nowrap mt-1" title="Numer FAX" href="fax:91 812 57 85"><i class="fas fa-fax mr-2"></i>91 812 57 85</a>
                                </div>

                                <div class="d-flex justify-content-center d-sm-block justify-content-end col-12 col-sm-1 px-0 p-xl-3 mt-2 mt-sm-3 mt-xl-0">
                                    <a href="#" class="d-inline-block d-sm-block text-center text-dark tooltip-btn" data-toggle="tooltip" data-placement="right" title="" data-original-title="Usuń z ulubionych">
                                        <img width="25" height="25" class="d-inline-block mr-2 mr-sm-0" src="/kbf/site/templates/assets/images/trash.svg" alt="">
                                    </a>
                                    <a href="/kbf/message/?company_id=361" class="d-inline-block d-sm-block text-center text-dark tooltip-btn" data-toggle="tooltip" data-placement="left" title="" data-original-title="Wyślij wiadomość">
                                        <img width="20" height="22" class="d-inline-block" src="/kbf/site/templates/assets/images/email.svg" alt="">
                                    </a>
                                </div>

                            </div>

                            <div class="text-center mx-auto">
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
<script src="<?php echo $urls->js ?>dashboard-favourite-companies.js"></script>
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
