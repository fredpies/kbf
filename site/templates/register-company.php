<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";
include_once "lib/StepperRenderer.class.php";
include_once "lib/FormFields.php";

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
$company_industries_field_markup = '<div class="row">
                    <div data-name="industry" id="industries" class="dropdown col-12 col-md-5 mb-4">
                        <label class="text-uppercase pl-3 pl-sm-4 pl-lg-0">Branża</label>
                        <button class="btn btn-round btn-primary px-3 mx-3 mx-md-4 mx-lg-0 mb-3 mb-md-0 dropdown-toggle w-full"
                                type="button"
                                id="industries-button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                        </button>
                    </div>

                    <div data-name="sub-industry" id="sub-industries" class="dropdown col-12 col-md-5 mb-4">
                        <label class="text-uppercase px-3">Sub-branża</label>
                        <button class="btn btn-round btn-primary px-3 mx-3 mb-2 dropdown-toggle w-full"
                                type="button"
                                id="sub-industries-button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                        </button>
                    </div>

                </div>';

// Krok "Dane firmy"

$form_step_1 = new FormRenderer("register-company", $company_fields);
$form_step_1->onlyFields = true;
$form_step_1->addField($company_fields->get("company_regon"));
$form_step_1->addMarkup('<div class="d-flex w-100 justify-content-center"><div class="col-11 col-lg-10 col-xl-9 my-4"><span class="d-inline-block page-info-msg-contents"><i class="fas fa-info text-primary mr-2"></i>Sprawdź poprawność pobranych danych i wybierz następny krok.<br>W przypadku wystąpienia błędów dokonaj odpowiednich modyfikacji.</span></div></div>', true);
$form_step_1->addMarkup($company_name_field->render(), true);
$form_step_1->addMarkup($addres_autoComplete->render(), true);
$form_step_1->addMarkup($company_city_field->render(), true);

// Informacje podstawowe
$form_step_2 = new FormRenderer("register-company", $company_fields);
$form_step_2->onlyFields = true;
$form_step_2->addField($company_fields->get("company_logo"));
$form_step_2->addMarkup($company_industries_field_markup, false);

//$form_step_1->addField($company_fields->get("company_address"));
//$form_step_1->addField($company_fields->get("company_city"));
//$form_step_1->addField($company_fields->get("company_zip"));

$stepper->registerStep("Dane firmy", "Podaj numer regon w celu pobrania informacji o swojej firmie.", $form_step_1->render());
$stepper->registerStep("Informacje podstawowe", "Podaj podstawowe informacje o swojej firmie.", $form_step_2->render());





$stepperMarkup = $stepper->render();

?>

<!DOCTYPE html>
<html lang="pl">
<head>

    <?php include_once "partials/_head.php" ?>

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
