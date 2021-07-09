<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

check_user(wire('user'));

$page = wire('page');
$pages = wire('pages');
$urls = wire('urls');
$sanitizer = wire('sanitizer');

$page_title = $sanitizer->text($page->title);

// Modal
$modalMarkup = '

    <h5 class="text-center">Jesteś pewien, że chcesz usunąć firmę z listy ulubionych ?</h5>
    <div class="row mt-5">
        <div @click.window="removeFromFavourites" class="col"><button type="submit" class="confirm-button btn btn-round btn-danger w-100">Usuń</button></div>
        <div class="col"><button data-dismiss="modal" type="button" class="cancel-button btn btn-round btn-success w-100">Anuluj</button></div>
    </div>
';


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

                            <nav class="d-none d-sm-block" aria-label="breadcrumb">
                                <ol class="breadcrumb mb-3 mb-sm-0">
                                    <li class="breadcrumb-item"><a href="<?= $pages->get('template=dashboard')->url ?>">Panel</a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><?= $page_title ?></li>
                                </ol>
                            </nav>

                            <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left pl-3"><?= $page_title ?></h5>

                            <!-- Favorite companies -->
                            <div x-data="KbfFavouriteCompanies()">

                                <template x-for="favouriteCompany in favouriteCompanies" :key="favouriteCompany.company_id">
                                    <div class="row bg-white rounded-lg shadow-sm p-4 mb-4 company-list-item">

                                        <div class="col-12 col-sm-2 p-xl-4">
                                            <img :src="favouriteCompany.company_logo_url" alt="image"
                                                 class="company-logo d-block mx-auto img-fluid mt-xl-0">
                                        </div>

                                        <div class="col-12 col-sm-5 col-xl-5 text-center text-sm-left">

                                            <a class="company-name text-dark d-block mt-3 mb-2 font-weight-500"
                                               :href="favouriteCompany.company_url">
                                                <span x-text="favouriteCompany.company_name"></span>
                                            </a>

                                            <div x-text="favouriteCompany.company_address" class="company-street h6 font-weight-300"></div>
                                            <div class="company-zip-city mb-2 mb-sm-0 h6 font-weight-300">
                                                <span x-text="favouriteCompany.company_zip" class="company-zip"></span>
                                                <span x-text="favouriteCompany.company_city" class="company-city"></span></div>

                                        </div>

                                        <div class="col-12 col-sm-3 col-xl-3 text-center text-sm-left">

                                            <span x-show="favouriteCompany.company_phone_1.length > 0">
                                                <a  class="company-phone text-dark font-weight-300 d-block text-nowrap mt-3"
                                                   title="Telefon kontaktowy" :href="`tel:${favouriteCompany.company_phone_1}`"><i
                                                            class="fas fa-phone-alt mr-2"></i><span x-text="favouriteCompany.company_phone_1"></span></a>
                                            </span>


                                            <span x-show="favouriteCompany.company_phone_2.length > 0">
                                                <a class="company-phone text-dark font-weight-300 d-block text-nowrap mt-1"
                                                   title="Telefon kontaktowy" :href="`tel:${favouriteCompany.company_phone_2}`"><i
                                                            class="fas fa-phone-alt mr-2"></i><span x-text="favouriteCompany.company_phone_2"></span></a>
                                            </span>

                                            <span x-show="favouriteCompany.company_fax.length > 0">
                                                <a class="company-phone text-dark font-weight-300 d-block text-nowrap mt-1"
                                                   title="Numer FAX" :href="`fax:${favouriteCompany.company_fax}`"><i class="fas fa-fax mr-2"></i><span x-text="favouriteCompany.company_fax"></span></a>
                                            </span>

                                        </div>

                                        <div class="col-12 col-sm-2 col-xl-2 mt-2 mt-sm-0 pt-3 text-center text-sm-left">
                                            <a @click.self.prevent="companyToDelete = Number($el.dataset.companyId); elementToFadeOut = $el.parentElement.parentElement" :data-company-id="favouriteCompany.company_id" data-toggle="modal" href="#confirmation" class="mr-n1" title="usun">Usuń</a>
                                        </div>


                                    </div>

                                </template>

                                <div x-show="favouriteCompanies.length === 0">
                                    <?= render_info_message('Nie posiadasz aktualanie firm dodanych do listy ulubionych.<div style="height: 0" class="header-shadow-wrapper position-static z-index-0 mt-2"></div>', 'col-12 mb-3'); ?>
                                </div>

                                <?= render_modal("confirmation", "Potwierdzenie", $modalMarkup) ?>

                                <div class="row justify-content-center mt-4">
                                    <div class="col-12 col-sm-6">
                                        <a href="<?= $pages->get('template=dashboard')->url ?>" class="preloader-button btn btn-round cursor-pointer btn-secondary mb-4 mx-2 mx-lg-0 w-100 text-white">Powrót</a>
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

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

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
