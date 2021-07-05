<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";
include_once "lib/TabsRenderer.class.php";

check_redirect(wire('user'));

$pages = wire('pages');
$page = wire('page');
$user = wire('user');
$session = wire('session');
$input = wire('input');
$urls = wire('urls');
$sanitizer = wire('sanitizer');

if ($session->company_page_id !== $user->company_id ) $session->redirect($pages->get('template=dashboard')->url); // Przekieruj na dashboard jezeli uzytkownik nie ma prawa edycji

$company_page = $pages->get($sanitizer->int($session->company_page_id));
$company_fields = $company_page->fields;

// Przetwarzanie formularza
if (isset($input->post->company_id) && $input->post->action === 'update-company') {

    if ($user->company_id === $sanitizer->int($input->post->company_id) && $user->company_id = $session->company_page_id) {
        $company_page->of(false);

        // Przygotuj slowa kluczowe
        if (!empty($input->post->company_keywords)) {

            $keywords = array();
            $company_keywords_field = json_decode($input->post->company_keywords);

            foreach ($company_keywords_field as $keyword) array_push($keywords, $keyword->value);
            $company_keywords_field = implode(',', $keywords);
            $keywords = $company_keywords_field;
            $company_page->company_keywords = $keywords;

        }

        if (!empty($input->post->company_address)) $company_page->company_address = $input->post->company_address;
        if (!empty($input->post->company_description_html)) $company_page->company_description_html = $input->post->company_description_html;
        if (!empty($input->post->company_phone_1)) $company_page->company_phone_1 = $input->post->company_phone_1;
        if (!empty($input->post->company_phone_2)) $company_page->company_phone_2 = $input->post->company_phone_2;
        if (!empty($input->post->company_fax)) $company_page->fax = $input->post->company_fax;
        if (!empty($input->post->lat)) $company_page->lat = $input->post->lat;
        if (!empty($input->post->lon)) $company_page->lon = $input->post->lon;

        $company_page->save();
        $company_page->of(true);

    }
}

$page_title = $sanitizer->text($page->title);

//  Email
$company_email_field = getFormField("company_email", false, true);
$company_email_field->value = $sanitizer->text($company_page->get('company_email'));
$company_email_field->className = "col-12 mb-3";

//  Nazwa firmy
$company_name_field = getFormField("company_name", false, true);
$company_name_field->value = $sanitizer->text($company_page->get('company_name'));
$company_name_field->className = "col-12 mb-3";

//  NIP
$company_nip_field = getFormField("company_nip", false, true);
$company_nip_field->value = $sanitizer->text($company_page->get('company_nip'));
$company_nip_field->className = "col-12 mb-3";

//  REGON
$company_regon_field = getFormField("company_regon", false, true);
$company_regon_field->value = $sanitizer->text($company_page->get('company_regon'));
$company_regon_field->inputmask = "\d{7,9}";
$company_regon_field->className = "col-12";

// Formularz dla zakladki "Dane firmy"
$form_1 = new FormRenderer("update-company", $company_fields);
$form_1->onlyFields = true;

$form_1->addMarkup($company_email_field->render(false), true);
$form_1->addMarkup($company_name_field->render(false), true);
$form_1->addMarkup($company_nip_field->render(false), true);
$form_1->addMarkup($company_regon_field->render(false), true);
$form_1->addMarkup(render_info_message('Uwaga: Zmiana podstawowych danych identyfikacyjnych wymaga kontaktu z administratorem.', 'col-12 mb-4'), true);

// Formularz dla zakladki "Telefony"
$form_2 = new FormRenderer("update-company", $company_fields);
$form_2->onlyFields = true;

//  Podstawowy numer telefonu
$company_phone_1_field = getFormField("company_phone_1", true);
$company_phone_1_field->value = $sanitizer->text($company_page->get('company_phone_1'));
$company_phone_1_field->className = "col-12 mb-3";
$company_phone_1_field->inputmask = "\d+";

//  Drugi numer telefonu
$company_phone_2_field = getFormField("company_phone_2");
$company_phone_2_field->value = $sanitizer->text($company_page->get('company_phone_2'));
$company_phone_2_field->className = "col-12 mb-3";
$company_phone_2_field->inputmask = "\d+";

//  FAX
$company_fax_field = getFormField("company_fax");
$company_fax_field->value = $sanitizer->text($company_page->get('company_fax'));
$company_fax_field->className = "col-12";

$form_2->addMarkup($company_phone_1_field->render(false), true);
$form_2->addMarkup($company_phone_2_field->render(false), true);
$form_2->addMarkup($company_fax_field->render(false), true);

// Formularz dla "Adres"
$form_3 = new FormRenderer("update-company", $company_fields);
$form_3->onlyFields = true;

// Adres
$company_address_field = getFormField("company_address", true);
$company_address_field->value = $sanitizer->text($company_page->get('company_address'));
$company_address_field->className = "col-12";
$company_address_field->inputmask = "[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\s-]+\d*[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\s-]*";

// Miasto
$company_city_field = getFormField("company_city", false, true);
$company_city_field->value = $sanitizer->text($company_page->get('company_city'));
$company_city_field->className = "col-12 mb-3";

// Kod pocztowy
$company_zip_field = getFormField("company_zip", false, true);
$company_zip_field->value = $sanitizer->text($company_page->get('company_zip'));
$company_zip_field->className = "col-12 mb-4";

$form_3->addMarkup($company_address_field->render(false), true);
$form_3->addMarkup(render_info_message('Wpisz adres, nazwę miasta i wybierz pozycję z listy podpowiedzi w celu wypełnienia poniższych pól. Przykład poprawnie wpisanego adresu: "JAGIELLOŃSKA 115A BYDGOSZCZ"', 'col-12 mb-4'), true);
$form_3->addMarkup($company_city_field->render(false), true);
$form_3->addMarkup($company_zip_field->render(false), true);

// Formularz dla "Opis"
$form_4 = new FormRenderer("update-company", $company_fields);
$form_4->onlyFields = true;

// Opis firmy pole ukryte - hack
$company_description_hidden = getFormField('hidden');
$company_description_hidden->name = 'company_description_hidden';
$company_description_hidden->value = $sanitizer->entitiesMarkdown($company_page->get('company_description_html'));

// Opis firmy
$company_description_field = getFormField("company_description");
$company_description_field->className = "col-12";

// Slowa kluczowe
$company_keywords_field = getFormField("company_keywords");
$company_keywords_field->value = $sanitizer->text($company_page->get('company_keywords'));
$company_keywords_field->className = "col-12";

$form_4->addMarkup($company_description_hidden->render(), true);
$form_4->addMarkup($company_description_field->render(), true);
$form_4->addMarkup(render_info_message('Po zaznaczeniu wpisanego tekstu udostępnione jest menu formatotowania. W polu możesz użyć podstawowych opcji formatowania tekstu w celu opisania firmy.', "col-12 my-3"), true);
$form_4->addMarkup($company_keywords_field->render(), true);

// Modal
$modal_contents = '<img class="img-fluid" src="' . $urls->images . 'keywords.png">';
$modal_contents .= render_info_message('Przykład poprawnie wpisanych słów kluczowych', 'col-12');
$modal = render_modal("keywords", 'Słowa kluczowe', $modal_contents);

$form_4->addMarkup(render_info_message('Wpisz słowa kluczowe umożliwiające pozycjonowanie strony firmy przez wyszukiwarki internetowe, np. Google. Po wpisaniu słowa kluczowego użyj tabulatora aby wpisywać kolejne.<br><a data-toggle="modal" data-target="#keywords" class="about-keywords d-inline-block text-hover-primary mt-2">Zobacz poprawnie wpisane słowa kluczowe.</a>', 'col-12 mb-4'), true);
$form_4->addMarkup($modal, true);

$button_markup = '<div class="row justify-content-center mt-4">
                    <div class="col-12 col-sm-6">
                        <button type="submit" class="submit-button btn btn-round btn-outline-dark mb-4 mx-2 mx-lg-0 w-100">Zapisz zmiany</button>
                    </div>
                  </div>';

// Tabs
$tabs = new TabsRenderer("company-edit");
$tabsPhone = new TabsRenderer("company-edit");

$tabs->addMarkup($form_1->render() . $button_markup, "Dane firmy");
$tabs->addMarkup($form_2->render() . $button_markup, "Telefony");
$tabs->addMarkup($form_3->render() . $button_markup, "Lokalizacja");
$tabs->addMarkup($form_4->render() . $button_markup, "Opis");

$tabsPhone->addMarkup($form_1->render(), "Dane firmy");
$tabsPhone->addMarkup($form_2->render(), "Telefony");
$tabsPhone->addMarkup($form_3->render(), "Lokalizacja");
$tabsPhone->addMarkup($form_4->render(), "Opis");

?>

<!DOCTYPE html>
<html lang="pl">
<head>

    <?php include_once "partials/_head.php" ?>

    <!-- Wysiwyg -->
    <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css">

    <!-- Tagify -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tagify/4.3.0/tagify.min.css"/>


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
                    <div class="pb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <?php

                            if ($input->post->action === 'update-company') {
                                echo render_alert('Dane firmy zostały zaktualizowane.', 'light');
                            }

                            ?>

                            <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left"><?= $page_title ?></h5>

                            <form name="dashboard-company-edit" method="post" action="<?= $page->url ?>">

                                <div class="desktop-tabs d-none d-sm-block">
                                    <?= $tabs->render() ?>
                                </div>

                                <div class="mobile-tabs d-block d-sm-none">
                                    <?= $tabsPhone->render(true) ?>
                                    <?= $button_markup ?>
                                </div>

                                <input type="hidden" name="company_id" value="<?= $company_page->id ?>">
                                <input type="hidden" name="action" value="update-company">
                                <input type="hidden" name="lat" value="<?= $company_page->get("lat"); ?>">
                                <input type="hidden" name="lon" value="<?= $company_page->get("lon"); ?>">

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
<script src="https://cdnjs.cloudflare.com/ajax/libs/tagify/4.3.0/jQuery.tagify.min.js"></script>

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
