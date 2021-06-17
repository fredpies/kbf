<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";

$pages = wire('pages');
$page = wire('page');
$sanitizer = wire('sanitizer');

$page_title = $sanitizer->text($page->title);

// TODO: Nalezy zmienic na fake firme
$company_page = $pages->get(33807);
$company_fields = $company_page->fields;

// Formularz dla "Dane"
$form_1 = new FormRenderer("update-company", $company_fields);
$form_1->onlyFields = true;

//  Nazwa firmy
$company_name_field = new FormFieldText(true);
$company_name_field->label = "Nazwa firmy";
$company_name_field->name = "company_name";
$company_name_field->value = $sanitizer->text($company_page->get('company_name'));
$company_name_field->className = "col-12";
$company_name_field->icon = "fa-info";

// Nip firmy
$company_nip_field = new FormFieldText(true);
$company_nip_field->label = "Numer NIP";
$company_nip_field->name = "company_nip";
$company_nip_field->value = $sanitizer->text($company_page->get('company_nip'));
$company_nip_field->className = "col-12";
$company_nip_field->icon = "fa-info";

// Regon firmy
$company_regon_field = new FormFieldText(true);
$company_regon_field->label = "REGON";
$company_regon_field->name = "company_regon";
$company_regon_field->value = $sanitizer->text($company_page->get('company_regon'));
$company_regon_field->inputmask = "\d{7,9}";
$company_regon_field->className = "col-12";
$company_regon_field->icon = "fa-info";

// Telefon firmy
$company_phone_field = new FormFieldText();
$company_phone_field->label = "TELEFON";
$company_phone_field->name = "company_phone_1";
$company_phone_field->value = $sanitizer->text($company_page->get('company_phone_1'));
$company_phone_field->className = "col-12";
$company_phone_field->icon = "fa-phone";

$form_1->addMarkup($company_name_field->render(), true);
$form_1->addMarkup($company_nip_field->render(), true);
$form_1->addMarkup($company_regon_field->render(), true);
$form_1->addMarkup($company_phone_field->render(), true);
$form_1->addMarkup(render_info_message('Uwaga: Zmiana podstawowych danych identyfikacyjnych wymaga kontaktu za administratorem.', 'col-11 mb-3'), true);

// Formularz dla "Adres"
$form_2 = new FormRenderer("update-company", $company_fields);
$form_2->onlyFields = true;

// Adres
$company_address_field = new FormFieldAddressAutocomplete();
$company_address_field->label = "Adres firmy";
$company_address_field->name = "company_address";
$company_address_field->value = $sanitizer->text($company_page->get('company_address'));
$company_address_field->className = "col-12";
$company_address_field->required = true;
$company_address_field->msgRequired = "Pole z adresem firmy nie może być puste";
$company_address_field->icon = "fa-map-marker";

// Miasto
$company_city_field = new FormFieldText(true);
$company_city_field->label = "Miasto";
$company_city_field->name = "company_city";
$company_city_field->className = "mt-4 col-12";
$company_city_field->icon = "fa-map-marker";

// Kod pocztowy
$company_zip_field = new FormFieldText(true);
$company_zip_field->label = "Kod pocztowy";
$company_zip_field->name = "company_zip";
$company_zip_field->className = "col-12";
$company_zip_field->icon = "fa-map-marker";

$form_2->addMarkup($company_address_field->render(), true);
$form_2->addMarkup(render_info_message('Wpisz i wybierz adres z listy w celu wypełnienia poniższych pól.', 'col-11'), true);
$form_2->addMarkup($company_city_field->render(), true);
$form_2->addMarkup($company_zip_field->render(), true);

// Formularz dla "Opis"
$form_3 = new FormRenderer("update-company", $company_fields);
$form_3->onlyFields = true;

// Opis firmy
$company_description_field = new FormFieldTextArea();
$company_description_field->label = "Opis firmy";
$company_description_field->name = "company_description";
$company_description_field->required = true;
$company_description_field->msgRequired = "Wypełnienie pola opis firmy jest wymagane.";

// Slowa kluczowe
$company_keywords_field = new FormFieldKeywords();

$form_3->addMarkup($company_description_field->render(), true);
$form_3->addMarkup($company_keywords_field->render(), true);
$form_3->addMarkup(render_info_message('Wpisz słowa kluczowe umożliwiające pozycjonowanie strony firmy przez wyszukiwarki internetowe, np. Google. Po wpisaniu słowa kluczowego użyj tabulatora aby wpisywać kolejne.<br><a class="about-keywords d-inline-block text-hover-primary mt-2">Zobacz poprawnie wpisane słowa kluczowe.</a>', 'col-12 mb-3'), true);


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

                    <div class="pb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item"><a href="#">Panel</a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><?= $page_title ?></li>
                                </ol>
                            </nav>


                            <form class="mt-5" method="get" action="">

                                <div class="row px-3">

                                    <h5 class="dashboard-title section-title-3 w-100 mb-1 text-center">Twoja firma</h5>

                                    <div class="col">
                                        <div class="mb-3">
                                            <div class="mt-sm-4">

                                                <nav>
                                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                        <a class="active company-products nav-item nav-link" id="nav-first-tab" data-toggle="tab" href="#summary" role="tab" aria-controls="company-products-pane" aria-selected="false">
                                                            <span class="d-sm-none">Dane</span>
                                                            <span class="d-none d-sm-inline">Dane firmy</span>
                                                        </a>
                                                        <a class="company-services nav-item nav-link" id="nav-second-tab" data-toggle="tab" href="#location" role="tab" aria-controls="nav-profile" aria-selected="false">
                                                            <span class="d-sm-none">Adres</span>
                                                            <span class="d-none d-sm-inline">Lokalizacja</span>
                                                        </a>
                                                        <a class="company-services nav-item nav-link" id="nav-third-tab" data-toggle="tab" href="#other" role="tab" aria-controls="nav-profile" aria-selected="false">Opis</a>
                                                    </div>
                                                </nav>

                                                <div class="tab-content" id="nav-tabContent">

                                                    <div class="tab-pane show fade active" id="summary" role="tabpanel" aria-labelledby="nav-first-tab">

                                                       <?= $form_1->render() ?>

                                                    </div>

                                                    <div class="tab-pane fade" id="location" role="tabpanel" aria-labelledby="nav-second-tab">


                                                        <div class="align-self-start">
                                                            <?= $form_2->render() ?>
                                                        </div>

                                                    </div>

                                                    <div class="tab-pane fade" id="other" role="tabpanel" aria-labelledby="nav-third-tab">
                                                        <?= $form_3->render() ?>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>



                                <div class="row justify-content-center">
                                    <div class="col-12 col-sm-6">
                                        <button type="submit" class="btn btn-round btn-outline-dark mb-4 mx-2 mx-lg-0 w-100">Zapisz zmiany</button>
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
