<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";
include_once "lib/StepperRenderer.class.php";
include_once "lib/Alert.class.php";
include_once "lib/FormFields.php";

$urls = wire("urls");

$templates = wire("templates");
$company_template = $templates->get("company");
$company_fields = $company_template->fields;

// Stepper
$stepper = new StepperRenderer("kbf-stepper");
$stepper->stepperName = "Rejestracja firmy";
$stepper->actionName = "Zarejestruj";
$stepper->formName = 'register-company';

// Regon
$company_regonSearch_field = new FormFieldRegonSearch();
$company_regonSearch_field->label = "Numer REGON";
$company_regonSearch_field->name = "company_regon";
$company_regonSearch_field->description = "Wpisz numer REGON firmy w celu pobrania informacji o firmie z rejestru państwowego.";
//$company_regonSearch_field->required = "required";
$company_regonSearch_field->msgRequired = "Pole z numerem REGON nie może być puste.";
$company_regonSearch_field->inputmask = "\d{7,9}";
$company_regonSearch_field->icon = "fa-info";

// Nazwa firmy
$company_name_field = new FormFieldText(true);
$company_name_field->label = "Nazwa firmy";
$company_name_field->name = "company_name";
$company_name_field->className = "company_name";
$company_name_field->description = "Nazwa firmy pobrana z rejestru";
//$company_name_field->required = true;
$company_name_field->msgRequired = "Wypełnienie pola z nazwą firmy jest wymagane";
$company_name_field->icon = "fa-info";

// Nip firmy
$company_nip_field = new FormFieldText(true);
$company_nip_field->label = "Numer NIP";
$company_nip_field->name = "company_nip";
$company_nip_field->className = "company_nip";
$company_nip_field->description = "Numer NIP pobrany z rejestru";
$company_nip_field->icon = "fa-info";
$company_nip_field->inputmask = "\d{3}-\d{3}-\d{2}-\d{2}";

// Adres
$company_address_field = new FormFieldText(true);
$company_address_field->label = "Adres firmy";
$company_address_field->name = "company_address";
$company_address_field->description = "Adres firmy pobrany z rejestru";
//$company_address_field->required = true;
$company_address_field->icon = "fa-map-marker";
$company_address_field->msgRequired = "Wypełnienie pola z nazwą miasta jest wymagane.";

// Miasto
$company_city_field = new FormFieldText(true);
$company_city_field->label = "Miasto";
$company_city_field->name = "company_city";
$company_city_field->description = "Miasto pobrane z rejestru";
//$company_city_field->required = true;
$company_city_field->icon = "fa-map-marker";

// Kod pocztowy
$company_zip_field = new FormFieldText(true);
$company_zip_field->label = "Kod pocztowy";
$company_zip_field->name = "company_zip";
$company_zip_field->description = "Kod pocztowy pobrany z rejestru";
//$company_zip_field->required = true;
$company_zip_field->icon = "fa-map-marker";

// Branze
$company_industries_field = new FormFieldIndustries();

// Opis firmy
$company_description_field = new FormFieldTextArea();
$company_description_field->label = "Opis firmy";
$company_description_field->name = "company_description";
$company_description_field->required = true;
$company_description_field->msgRequired = "Wypełnienie pola opis firmy jest wymagane.";

// Slowa kluczowe
$company_keywords_field = new FormFieldKeywords();

// Podsumowanie
$company_summary = render_company_summary();

// Krok "Dane firmy"

$form_step_1 = new FormRenderer("register-company", $company_fields);
$form_step_1->onlyFields = true;
$form_step_1->addMarkup($company_regonSearch_field->render(), true);
$form_step_1->addMarkup(render_info_message('Po pobraniu danych o firmie z rejestru REGON zostaną wypełnione odpowiednie pola formularza.'), true);
$form_step_1->addMarkup('<div class="w-100 pb-5"></div>', true);
$form_step_1->addMarkup($company_name_field->render(), true);
$form_step_1->addMarkup($company_nip_field->render(), true);
$form_step_1->addMarkup($company_address_field->render(), true);
$form_step_1->addMarkup($company_zip_field->render(), true);
$form_step_1->addMarkup($company_city_field->render(), true);
$form_step_1->addMarkup(render_info_message('Sprawdź poprawność pobranych danych i wybierz następny krok.<br>W przypadku wystąpienia błędów dokonaj odpowiednich modyfikacji.'), true);


// Krok "Informacje podstawowe"

$form_step_2 = new FormRenderer("register-company", $company_fields);
$form_step_2->onlyFields = true;
$form_step_2->addField($company_fields->get("company_logo"));
$form_step_2->addMarkup($company_industries_field->render());
$form_step_2->addMarkup(render_info_message('Wybierz branżę w jakiej działa firma i przypisz jej odpowiednią branżę szczegółowa (sub-branżę).'), true);
$form_step_2->addMarkup($company_description_field->render());
$form_step_2->addMarkup(render_info_message('Opisz ogólny zakres działalności firmy. Szczegóły dotyczące świadoczonych usług i produktów będziesz mógł dodać poźniej w swoim panelu po zarejestrowaniu firmy w KBF.<br><br>Zaznaczenie wpisanego tekstu wyświetla menu formatowania. Możesz użyć różnych stylów formatowania tekstu w celu przedstawienia informacji o firmie.'), true);

// Krok "Dane kontaktowe"
$form_step_3 = new FormRenderer("register-company", $company_fields);
$form_step_3->onlyFields = true;
$form_step_3->addField($company_fields->get("company_email"));
$form_step_3->addField($company_fields->get("company_phone_1"));
$form_step_3->addField($company_fields->get("company_whatsup"));
$form_step_3->addField($company_fields->get("company_www"));
$form_step_3->addMarkup($company_keywords_field->render());
$form_step_3->addMarkup(render_info_message('Wpisz słowa kluczowe umożliwiające pozycjonowanie strony firmy przez wyszukiwarki internetowe, np. Google. Po wpisaniu słowa kluczowego użyj tabulatora aby wpisywać kolejne.<br><a class="about-keywords d-inline-block text-hover-primary mt-2">Zobacz poprawnie wpisane słowa kluczowe.</a>'), true);

// Alert
$alert = new Alert('mt-5');
$alert->type = "secondary";
$alert->hideIcon = true;
$alert->heading = "Podsumowanie danych firmy";
$alert->contents = "<p>Sprawdż poprawność danych zarejestrowanych w formularzu rejestracji firmy. Jeżli zauwazyłeś błędy cofnij się do poprzednich stron formularza i dokonaj stosownych korekt.</p><p>W przypadku poprawnych informacji wybierz <b>ZAREJESTRUJ</b> w celu zarejestrowania firmy w KBF.</b></p>";
$company_summary .= '<div class="container">' . $alert->render() . '</div>';

// Rejestruj kroki
$stepper->registerStep("Dane rejestrowe", "Podaj numer regon w celu pobrania informacji o swojej firmie.", $form_step_1->render());
$stepper->registerStep("Informacje o firmie", "Podaj informacje o swojej firmie. Podane informacje umożliwią łatwe odnalezienie firmy w rejestrze KBF.", $form_step_2->render());
$stepper->registerStep("Pozostałe dane", "Podaj dane kontaktowe oraz słowa kluczowe umożliwiające pozycjonowanie firmy w internecie.", $form_step_3->render());
$stepper->registerStep("Podsumowanie", "Podsumowanie wprowadzonych informacji o firmie.", $company_summary);

$stepperMarkup = $stepper->render();

?>

<!DOCTYPE html>
<html lang="pl">
<head>

    <?php include_once "partials/_head.php" ?>

    <!-- Perfect scrollbar-->
    <link rel="stylesheet" href="<?php echo $urls->css ?>perfect-scrollbar.css">

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

<!-- Content -->
<div class="main-content pt-4 mt-4">

    <?= $stepperMarkup ?>

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
<script src="<?php echo $urls->js ?>register-company.js"></script>
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
