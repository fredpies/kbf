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

    <h5 class="text-center">Jesteś pewien, że chcesz usunąć produkt z listy ulubionych ?</h5>
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
                            <div x-data="KbfFavouriteProducts()">

                                <template x-for="favouriteProduct in favouriteProducts" :key="favouriteProduct.product_id">
                                    <div class="row bg-white rounded-lg shadow-sm p-4 mb-4 company-list-item">

                                        <div class="col-12 col-sm-2 p-xl-4">
                                            <img :src="favouriteProduct.product_first_image_url" alt="image" class="product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail">
                                        </div>

                                        <div class="col-12 col-sm-8 col-xl-7 text-center text-sm-left">

                                            <a class="product-name text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left" :href="favouriteProduct.product_url">
                                                <span x-text="favouriteProduct.product_name"></span></a>
                                            <div class="product-description font-weight-300 text-sm-left">
                                                <p></p><p x-text="favouriteProduct.product_description"></p>
                                            </div>

                                        </div>

                                        <div class="col-12 col-sm-2 col-xl-2 mt-2 mt-sm-0 text-center text-sm-right">
                                            <a @click.self.prevent="companyToDelete = Number($el.dataset.companyId); elementToFadeOut = $el.parentElement.parentElement" :data-company-id="favouriteProduct.company_id" data-toggle="modal" href="#confirmation" class="mr-n1" title="usun">Usuń</a>
                                        </div>


                                    </div>

                                </template>

                                <div x-show="favouriteProducts.length === 0">
                                    <?= render_info_message('Nie posiadasz aktualanie produktów dodanych do listy ulubionych.<div style="height: 0" class="header-shadow-wrapper position-static z-index-0 mt-2"></div>', 'col-12 mb-3'); ?>
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
<script src="<?php echo $urls->js ?>dashboard-favourite-products.js"></script>
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
