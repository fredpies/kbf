<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";
include_once "lib/TabsRenderer.class.php";

$session = wire('session');
$page = wire('page');
$pages = wire('pages');
$user = wire('user');
$sanitizer = wire('sanitizer');
$input = wire('input');
$urls = wire('urls');

$company_page = get_user_company($user);

check_user($user);
check_user_company($company_page);

$page_title = $sanitizer->text($page->title);

$form = new FormRenderer("dashboard-add-product");
$form->onlyFields = true;

// Nazwa produktu
$product_name_field = getFormField("product_name", true);
$product_name_field->className = "col-12 mb-2";
$product_name_field->inputmask = "[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\s]+";

// Cena produktu
$product_price_field = getFormField("number", true);
$product_price_field->label = "Cena jednostkowa";
$product_price_field->name = "product_price";
$product_price_field->className = "position-relative col-12 col-sm-6 mb-4";
$product_price_field->appendText = "PLN";
$product_price_field->inputmask = "\d+";
$product_price_field->msgRequired = "Pole z ceną produktu musi być wypełnione.";

// Liczba sztuk
$product_inventory_field = getFormField("number", true);
$product_inventory_field->label = "Liczba sztuk produktu";
$product_inventory_field->name = "product_inventory";
$product_inventory_field->className = "position-relative col-12 col-sm-6 mb-4";
$product_inventory_field->appendText = "szt.";
$product_inventory_field->inputmask = "\d+";
$product_inventory_field->msgRequired = "Liczba sztuk produktu musi być wypełniona.";

// Koszt przesyłki
$product_weight_field = getFormField("number", true);
$product_weight_field->label = "Waga produktu";
$product_weight_field->name = "product_weight";
$product_weight_field->className = "";
$product_weight_field->appendText = "kg";
$product_weight_field->inputmask = "\d+";
$product_weight_field->required = false;

$product_weight_field_rendered = '

    <div class="row w-100 mt-2">
    
        ' . $product_weight_field->render(true) . '
        
        <div class="d-flex flex-column justify-content-center col-12 col-sm-6">
            <span class="d-inline-block">' . render_info_message("Podaj wagę jednostkową produktu. Waga będzie uwzględniana przy obliczaniu kosztów przesyłki.", "mt-3") . '</span>
            <div class="header-shadow-wrapper position-static z-index-0 mt-2"></div>
        </div>
        
    </div>
';

// Opis produktu pole ukryte - hack
$product_description_hidden = getFormField('hidden');
$product_description_hidden->name = 'product_description_hidden';

// Opis produktu
$product_description_field = getFormField("product_description", true);
$product_description_field->className = "col-12 mb-0";

$form->addMarkup($product_name_field->render(false), true);
$form->addMarkup($product_price_field->render(false), true);
$form->addMarkup($product_inventory_field->render(false), true);
$form->addMarkup($product_weight_field_rendered, true);
$form->addMarkup($product_description_hidden->render(false), true);
$form->addMarkup($product_description_field->render(false), true);

$button_markup = '<div x-data="addProduct()"  class="col-12 mp-3 d-flex justify-content-between flex-wrap mt-4">
                        <div class="col-12 col-sm-5 px-0">
                            <a href="' . $pages->get('template=dashboard-products')->url . '" class="back-button btn btn-round btn-secondary mb-4 w-100 text-white">Powrót</a>
                        </div>
                        <div class="col-12 col-sm-5 px-0">
                            <button @click.prevent.self="addProduct" data-company-id="' . $company_page->id . '" type="button" class="submit-button btn btn-round btn-primary mb-4 w-100">Zarejestruj produkt</button>
                        </div>
                  </div>';

// Modal
$modalMarkup = '
    <h5 class="text-center">Jesteś pewien, że chcesz usunąć obraz ?</h5>
    <div class="col"><button type="button" @click.stop.prevent="deleteImage" class="confirm-button btn btn-round btn-danger w-100">Usuń</button></div>
    <div class="col"><button data-dismiss="modal" type="button" class="cancel-button btn btn-round btn-success w-100">Anuluj</button></div>
';

$product_images = '

    <div class="col-12 mt-4 mb-3">
    
        <label class="text-uppercase px-3">Obrazy produktu</label>
        
        <div x-data="productImagesAdd()"  class="product-images">
            
            <div class="product-images-container d-flex flex-wrap justify-content-center">
        
                <template x-for="image, idx in images" :key="image.imageSrc">
                    <div :data-image-file-name="image.imageName" :data-idx="idx" class="product-image-item">
                        <img :src="image.imageSrc" alt="product-image" class="product-image d-block mx-auto img-fluid mt-sm-0 img-thumbnail">
                        <button :data-image-src="image.imageSrc" x-on:click.prevent.stop="showModal" class="delete-button btn btn-md btn-round btn-outline-danger text-white border-0">Usuń obraz</button>
                    </div>
                </template>
                
                <label for="product_image">
                    <div class="product-image-add d-flex flex-column justify-content-center align-content-center text-center my-0">
                        <i class="product-image-add-icon d-inline-block mb-2 fas fa-file-upload"></i>
                        <span class="d-inline-block text-uppercase font-weight-600">Prześlij obraz</span>
                    </div>
                </label>
                
                <div x-ref="cropperModal" style="max-height: 97.5vh; overflow: hidden" class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center">Przytnij obraz do wymaganych wymiarów przed przesłaniem.</h5>
                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <p class="text-center my-2"> Kliknij dwukrotnie myszką, aby przesunąć obraz jeżeli nie mieści się na ekranie.</p>
                    <div class="col-12 py-0 modal-body">
                        <div >
                            <img style="display: block; max-height: 75vh; max-width: 100%" x-ref="sampleImage" src="" id="sample_image" class="img-fluid" />
                        </div>
                    </div>
                    <div class="modal-footer row justify-content-center">
                        <div class="col-8">
                            <button @click.prevent.stop="cropImage" type="button" id="crop" class="btn btn-block btn-primary btn-round">Przytnij</button>
                        </div>
                    </div>
                </div>
            </div>
                </div>
                
                <input @change="showCropperModal" class="d-none" type="file" class="image" id="product_image" accept="image/*"/>
                
                
        </div>' . render_modal("confirmation", "Potwierdzenie", $modalMarkup) . '</div>
        <label class="position-absolute text-danger" style="display: none" id="product_images-error" >W celu zarejestrowania produktu należy dodać przynajmniej jeden obraz.</label>
        
        ' .

         '
        <div class="header-shadow-wrapper position-static z-index-0 mt-2"></div>

    </div>
    
';

$form->addMarkup($product_images, true);
$form->addMarkup($button_markup, true);


?>

<!DOCTYPE html>
<html lang="pl">
<head>

    <?php include_once "partials/_head.php" ?>

    <!-- Wysiwyg -->
    <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css">

    <!-- crop images: Cropper CSS -->
    <link rel="stylesheet" href="<?php echo $urls->css ?>cropper.css">

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
                    <div class="pb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <nav class="d-none d-sm-block" aria-label="breadcrumb">
                                <ol class="breadcrumb mb-3 mb-sm-0">
                                    <li class="breadcrumb-item"><a href="<?= $pages->get('template=dashboard')->url ?>">Panel</a>
                                    </li>
                                    <li class="breadcrumb-item"><a
                                                href="<?= $pages->get('template=dashboard-products')->url ?>">Produkty</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page"><?= $page_title ?></li>
                                </ol>
                            </nav>

                            <h3 class="font-weight-800 mb-0 py-3 pt-xl-5 section-title-3 text-center text-uppercase"><?= $page->title ?></h3>


                            <form method="post" action="<?= $pages->get('template=dashboard-products')->url ?>"
                                  name="dashboard-add-product" class="mt-5">

                                    <?= $form->render() ?>

                                <input type="hidden" name="action" value="add-product">

                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?= render_confirmation_modal() ?>

    </div>

</div>

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<script src="<?php echo $urls->js ?>vendor/cropper.js"></script>

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard-add-product.js"></script>
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
