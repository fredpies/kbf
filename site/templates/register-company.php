<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";
include_once "lib/StepperRenderer.class.php";
include_once "lib/FormFields.php";

$urls = wire("urls");

$templates = wire("templates");
$company_template = $templates->get("company");
$company_fields = $company_template->fields;

// Stepper
$stepper = new StepperRenderer("kbf-stepper");
$stepper->stepperName = "Rejestracja firmy";
$stepper->actionName = "Zarejestruj";

// Nazwa firmy
$company_name_field = new FormFieldText();
$company_name_field->label = "Nazwa firmy";
$company_name_field->name = "company_name";
$company_name_field->description = "Nazwa firmy pobrana z rejestru";
$company_name_field->icon = "fa-info";

// Address autocomplete
$addres_autoComplete = new FormFieldAddressAutocomplete();
$addres_autoComplete->label = "Adres firmy";
$addres_autoComplete->name = "company_address";
$addres_autoComplete->description = "Adres firmy pobrany z rejestru";
$addres_autoComplete->required = "required";
$addres_autoComplete->icon = "fa-map-marker";

// Miasto
$company_city_field = new FormFieldText();
$company_city_field->label = "Miasto";
$company_city_field->name = "company_city";
$company_city_field->description = "Miasto pobrane z rejestru";
$company_city_field->required = "required";
$company_city_field->icon = "fa-map-marker";

// Branze
$company_industries_field = new FormFieldIndustries();

// Opis firmy
$company_description_field = new FormFieldTextArea();
$company_description_field->label = "Opis firmy";
$company_description_field->name = "company_description";
$company_description_field->required = "required";
$company_description_field->msgRequired = "nie";

// Krok "Dane firmy"

$form_step_1 = new FormRenderer("register-company", $company_fields);
$form_step_1->onlyFields = true;
$form_step_1->addField($company_fields->get("company_regon"));
$form_step_1->addMarkup('<div class="form-info-message col-12 col-lg-7 col-xl-5 my-4"><span class="d-inline-block page-info-msg-contents"><i class="fas fa-info text-primary mr-2"></i>Sprawdź poprawność pobranych danych i wybierz następny krok.<br>W przypadku wystąpienia błędów dokonaj odpowiednich modyfikacji.</span></div><div class="d-none d-lg-block col-lg-3 col-xl-4"></div>', true);
$form_step_1->addMarkup($company_name_field->render(), true);
$form_step_1->addMarkup($addres_autoComplete->render(), true);
$form_step_1->addMarkup($company_city_field->render(), true);

// Krok "Informacje podstawowe"

$form_step_2 = new FormRenderer("register-company", $company_fields);
$form_step_2->onlyFields = true;
$form_step_2->addField($company_fields->get("company_logo"));
$form_step_2->addMarkup($company_industries_field->render());
$form_step_2->addMarkup($company_description_field->render());


// Rejestruj kroki
$stepper->registerStep("Dane firmy", "Podaj numer regon w celu pobrania informacji o swojej firmie.", $form_step_1->render());
$stepper->registerStep("Informacje podstawowe", "Podaj podstawowe informacje o swojej firmie. Podane informacje umożliwią łatwe odnalezienie firmy w rejestrze KBF.", $form_step_2->render());
$stepper->registerStep("Dane kontaktowe", "Podaj dane kontaktowe firmy. Podanie informacji kontaktowych ułatwi kontakt z potencjalnymi klientami.", "");


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
