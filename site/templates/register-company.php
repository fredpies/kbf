<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";
include_once "lib/StepperRenderer.class.php";
include_once "lib/Alert.class.php";

$urls = wire("urls");
$pages = wire("pages");

$templates = wire("templates");
$company_template = $templates->get("company");
$company_fields = $company_template->fields;

// Stepper
$stepper = new StepperRenderer("kbf-stepper");
$stepper->stepperName = "Rejestracja firmy";
$stepper->actionName = "Zarejestruj";
$stepper->action = $pages->get('template=choose-subscription')->url;
$stepper->formName = 'register-company';

// Logo
//$logoImage = $urls->images . "logo-placeholder.jpg";
//$company_logo_field = getFormField("company_logo");
//$company_logo_field->label = "Logo firmy";
//$company_logo_field->imagePlaceholder = $logoImage;
//$company_logo_field->name = "company_logo";
//$company_logo_field->msgRequired = "Logo firmy musi zostać dodane.";
//$company_logo_field->description = "Wybierz plik graficzny reprezentujący logo firmy.";

// Podsumowanie
$company_summary = render_company_summary();

// Krok "Dane rejestrowe"
$form_step_1 = new FormRenderer("register-company", $company_fields);
$form_step_1->onlyFields = true;

$form_step_1->addMarkup(getFormField("company_regon_search", true)->render(), true);
$form_step_1->addMarkup(render_info_message('Po pobraniu danych o firmie z rejestru REGON zostaną wypełnione odpowiednie pola formularza.'), true);
$form_step_1->addMarkup('<div class="header-shadow-wrapper position-static"></div>', true);
$form_step_1->addMarkup('<div class="w-100 pb-4"></div>', true);
$form_step_1->addMarkup(getFormField("company_name", false, true)->render());
$form_step_1->addMarkup(getFormField("company_nip", false, true)->render());
$form_step_1->addMarkup(getFormField("company_address", false, true)->render());
$form_step_1->addMarkup(getFormField("company_zip", false, true)->render());
$form_step_1->addMarkup(getFormField("company_city", false, true)->render());
$form_step_1->addMarkup('<input type="hidden" name="lat">');
$form_step_1->addMarkup('<input type="hidden" name="lon">');
$form_step_1->addMarkup('<input type="hidden" name="province_name">');
$form_step_1->addMarkup('<input type="hidden" name="area_name">');
$form_step_1->addMarkup(render_info_message('Sprawdź poprawność pobranych danych i wybierz następny krok. W przypadku wystąpienia błędów dokonaj odpowiednich modyfikacji.'), true);
$form_step_1->addMarkup(render_info_message('Po zarejestrowaniu firmy w KBF dane będziesz mógł zmodyfikować również w panelu zarządzania.' ), true);

// Krok "Informacje podstawowe"
$form_step_2 = new FormRenderer("register-company", $company_fields);
$form_step_2->onlyFields = true;

$company_description_field = getFormField("company_description", true);
$company_description_field->className = "row col-12 mb-3";

//$form_step_2->addMarkup($company_logo_field->render(), true);
$form_step_2->addMarkup(getFormField("industries")->render());
$form_step_2->addMarkup(render_info_message('Wybierz branżę w jakiej działa firma i przypisz jej odpowiednią branżę szczegółowa (sub-branżę).'), true);
$form_step_2->addMarkup($company_description_field->render(), true);
$form_step_2->addMarkup(render_info_message('Opisz ogólny zakres działalności firmy. Szczegóły dotyczące świadoczonych usług i produktów będziesz mógł dodać poźniej w swoim panelu po zarejestrowaniu firmy w KBF.', 'col-12 mt-3'), true);

// Krok "Dane kontaktowe"
$form_step_3 = new FormRenderer("register-company", $company_fields);
$form_step_3->onlyFields = true;

$company_keywords_field = getFormField("company_keywords");
$company_keywords_field->className = "row col-12 mb-3 px-3";

$company_email_field = getFormField("company_email", true);
$company_email_field->inputmask = ".+@.+";

$company_field_phone_1 = getFormField("company_phone_1", true);
$company_field_phone_1->inputmask = "\d+";

$form_step_3->addMarkup($company_email_field->render(), true);
$form_step_3->addMarkup($company_field_phone_1->render(), true);
$form_step_3->addMarkup(getFormField("company_www")->render(), true);
$form_step_3->addMarkup($company_keywords_field->render(), true);
$form_step_3->addMarkup(render_info_message('Wpisz słowa kluczowe umożliwiające pozycjonowanie strony firmy przez wyszukiwarki internetowe, np. Google. Po wpisaniu słowa kluczowego użyj tabulatora aby wpisywać kolejne.<br><a data-toggle="modal" data-target="#keywords" class="about-keywords d-inline-block text-hover-primary mt-2">Zobacz poprawnie wpisane słowa kluczowe.</a>'), true);

// Modal
$modal_contents = '<img class="img-fluid" src="' . $urls->images . 'keywords.png">';
$modal_contents .= render_info_message('Przykład poprawnie wpisanych słów kluczowych', 'col-12');
$modal = render_modal("keywords", 'Słowa kluczowe', $modal_contents);

$form_step_3->addMarkup($modal, true);

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

    <!-- crop images: Cropper CSS -->
    <link rel="stylesheet" href="<?php echo $urls->css ?>cropper.css">

</head>
<body>

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Content -->
<div class="bg-image main-content pt-4 pb-0 mt-4" data-img-src="<?= $urls->images ?>upload/section-bg-shape-02.png" style="background-image: url('<?= $urls->images ?>upload/section-bg-shape-02.png');">

    <?= $stepperMarkup ?>
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Przytnij obraz do wymaganych wymiarów przed przesłaniem.</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="img-container">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="" id="sample_image" />
                            </div>
                            <div class="col-md-6 text-center">
                                <p>Podgląd przyciętego obrazu</p>
                                <div class="preview mx-auto img-thumbnail"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Wróć</button>
                    <button type="button" id="crop" class="btn btn-primary">Przytnij</button>
                </div>
            </div>
        </div>
    </div>

</div>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Tagify -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/tagify/4.3.0/jQuery.tagify.min.js" integrity="sha512-gnDk4L63tz8neUm+84zemPzaZ51LgpYK5mx/75os5kOl6qtJTTijitfyxMRssTrg3r9xHy2NybqcVYZcC/cEEw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="<?php echo $urls->js ?>vendor/cropper.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>register-company.js"></script>

</body>
</html>
