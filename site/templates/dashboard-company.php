<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";
include_once "lib/TabsRenderer.class.php";

$pages = wire('pages');
$page = wire('page');
$urls = wire('urls');
$sanitizer = wire('sanitizer');

$page_title = $sanitizer->text($page->title);

// TODO: Nalezy zmienic na fake firme
$company_page = $pages->get(33807);
$company_fields = $company_page->fields;


// Formularz dla zakladki "Dane firmy"
$form_1 = new FormRenderer("update-company", $company_fields);
$form_1->onlyFields = true;

//  Nazwa firmy
$company_name_field = getFormField("company_name", false, true);
$company_name_field->value = $sanitizer->text($company_page->get('company_name'));
$company_name_field->className = "col-12";
$company_name_field->description = "";

//  NIP
$company_nip_field = getFormField("company_nip", false, true);
$company_nip_field->value = $sanitizer->text($company_page->get('company_nip'));
$company_nip_field->className = "col-12";
$company_nip_field->description = "";

//  REGON
$company_regon_field = getFormField("company_regon", false, true);
$company_regon_field->value = $sanitizer->text($company_page->get('company_regon'));
$company_regon_field->inputmask = "\d{7,9}";
$company_regon_field->className = "col-12";
$company_regon_field->description = "";

//  Podstawowy numer telefonu
$company_phone_1_field = getFormField("company_phone_1", true);
$company_phone_1_field->value = $sanitizer->text($company_page->get('company_phone_1'));
$company_phone_1_field->className = "col-12 mb-3";
$company_phone_1_field->description = "";

//  Drugi numer telefonu
$company_phone_2_field = getFormField("company_phone_2");
$company_phone_2_field->value = $sanitizer->text($company_page->get('company_phone_2'));
$company_phone_2_field->className = "col-12 mb-3";
$company_phone_2_field->description = "";

//  FAX
$company_fax_field = getFormField("company_fax");
$company_fax_field->value = $sanitizer->text($company_page->get('company_fax'));
$company_fax_field->className = "col-12";
$company_fax_field->description = "";

$form_1->addMarkup($company_name_field->render(), true);
$form_1->addMarkup($company_nip_field->render(), true);
$form_1->addMarkup($company_regon_field->render(), true);

$form_1->addMarkup(render_info_message('Uwaga: Zmiana podstawowych danych identyfikacyjnych wymaga kontaktu za administratorem.', 'col-12 mb-4'), true);
$form_1->addMarkup($company_phone_1_field->render(), true);
$form_1->addMarkup($company_phone_2_field->render(), true);
$form_1->addMarkup($company_fax_field->render(), true);

// Formularz dla "Adres"
$form_2 = new FormRenderer("update-company", $company_fields);
$form_2->onlyFields = true;

// Adres
$company_address_field = getFormField("company_address", true);
$company_address_field->value = $sanitizer->text($company_page->get('company_address'));
$company_address_field->className = "col-12 mb-3";
$company_address_field->inputmask = "[a-zA-ZńółęśźżŃÓŁĘŚŹŻ]+\s\d{1,3}[a-zA-Z]?\s[a-zA-ZńółęśźżŃÓŁĘŚŹŻ]+";
$company_address_field->description = "";

// Miasto
$company_city_field = getFormField("company_city", false, true);
$company_city_field->value = $sanitizer->text($company_page->get('company_city'));
$company_city_field->className = "col-12";
$company_city_field->description = "";

// Kod pocztowy
$company_zip_field = getFormField("company_zip", false, true);
$company_zip_field->value = $sanitizer->text($company_page->get('company_zip'));
$company_zip_field->className = "col-12";
$company_zip_field->description = "";

$form_2->addMarkup($company_address_field->render(), true);
$form_2->addMarkup(render_info_message('Wpisz adres, nazwę miasta i wybierz pozycję z listy podpowiedzi w celu wypełnienia poniższych pól.<br><br>Przykład poprawnie wpisanego adresu: "JAGIELLOŃSKA 115A BYDGOSZCZ"', 'col-12 mb-4'), true);
$form_2->addMarkup($company_city_field->render(), true);
$form_2->addMarkup($company_zip_field->render(), true);

// Formularz dla "Opis"
$form_3 = new FormRenderer("update-company", $company_fields);
$form_3->onlyFields = true;

// Opis firmy pole ukryte - hack
$company_description_hidden = getFormField('hidden');
$company_description_hidden->name = 'company_description_hidden';
$company_description_hidden->value = $sanitizer->entitiesMarkdown($company_page->get('company_description_html'));

// Opis firmy
$company_description_field = getFormField("company_description");
$company_description_field->className = "col-12";
$company_description_field->description = "";

// Slowa kluczowe
$company_keywords_field = getFormField("company_keywords");
$company_keywords_field->value = $sanitizer->text($company_page->get('company_keywords'));
$company_keywords_field->className = "col-12";
$company_keywords_field->description = "";

$form_3->addMarkup($company_description_hidden->render(), true);
$form_3->addMarkup($company_description_field->render(), true);
$form_3->addMarkup(render_info_message('Po zaznaczeniu wpisanego tekstu udostępnione jest menu formatotowania. W polu możesz użyć podstawowych opcji formatowania tekstu w celu opisania firmy.', "col-12 my-3"), true);
$form_3->addMarkup($company_keywords_field->render(), true);

// Modal
$modal_contents = '<img class="img-fluid" src="' . $urls->images . 'keywords.png">';
$modal_contents .= render_info_message('Przykład poprawnie wpisanych słów kluczowych', 'col-12');
$modal = render_modal("keywords", 'Słowa kluczowe', $modal_contents);

$form_3->addMarkup(render_info_message('Wpisz słowa kluczowe umożliwiające pozycjonowanie strony firmy przez wyszukiwarki internetowe, np. Google. Po wpisaniu słowa kluczowego użyj tabulatora aby wpisywać kolejne.<br><a data-toggle="modal" data-target="#keywords" class="about-keywords d-inline-block text-hover-primary mt-2">Zobacz poprawnie wpisane słowa kluczowe.</a>', 'col-12 mb-4'), true);
$form_3->addMarkup($modal, true);

$button_markup = '<div class=" row justify-content-center mt-4">
                    <div class="col-12 col-sm-6">
                        <button type="submit" class="submit-button btn btn-round btn-outline-dark mb-4 mx-2 mx-lg-0 w-100">Zapisz zmiany</button>
                    </div>
                  </div>';

// Tabs
$tabs = new TabsRenderer("company-edit");
$tabsPhone = new TabsRenderer("company-edit");

$tabs->addMarkup($form_1->render() . $button_markup, "Dane firmy");
$tabs->addMarkup($form_2->render() . $button_markup, "Lokalizacja");
$tabs->addMarkup($form_3->render() . $button_markup, "Opis");

$tabsPhone->addMarkup($form_1->render(), "Dane firmy");
$tabsPhone->addMarkup($form_2->render(), "Lokalizacja");
$tabsPhone->addMarkup($form_3->render(), "Opis");

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>

    <!-- Wysiwyg -->
    <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css">

    <!-- Tagify -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tagify/4.3.0/tagify.min.css" integrity="sha512-ReP7vz5wsq3jOdrhlHFgSXFhlCfNSPj+pOOHd/LYVndKcKMZYam/1QboZsNFfQ1rrIOh9P592n3Dj0lvnJ6+8Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />


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

                            <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">Twoja firma</h3>

                            <form name="dashboard-company-edit" class="mt-5" method="post" action="">

                                <div class="d-none d-sm-block">
                                    <?= $tabs->render() ?>
                                </div>

                                <div class="d-block d-sm-none">
                                    <?= $tabsPhone->render(true) ?>
                                    <?= $button_markup ?>
                                </div>


                            </form>


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

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Tagify -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/tagify/4.3.0/jQuery.tagify.min.js" integrity="sha512-gnDk4L63tz8neUm+84zemPzaZ51LgpYK5mx/75os5kOl6qtJTTijitfyxMRssTrg3r9xHy2NybqcVYZcC/cEEw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard-company.js"></script>
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
