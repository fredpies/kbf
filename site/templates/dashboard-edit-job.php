<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";
include_once "lib/TabsRenderer.class.php";

check_redirect(wire('user'));

$session = wire('session');
$pages = wire('pages');
$user = wire('user');

if ($session->company_page_id !== $user->company_id ) $session->redirect($pages->get('template=dashboard')->url); // Przekieruj na dashboard jezeli uzytkownik nie ma prawa edycji

$page = wire('page');
$input = wire('input');
$urls = wire('urls');

if (!$input->get('id')) $session->redirect($pages->get('template=dashboard')->url); // Przekieruj na dashboard jezeli nie podano id
$editId = $input->get('id');

// Dane oferty pracy
$job_page = $pages->get($editId);
$job_page_data = sanitize_job_data($job_page);

$sanitizer = wire('sanitizer');

$page_title = $sanitizer->text($page->title);
$job_fields = $job_page->fields;

// Formularz dla zakladki "Opis oferty"
$form = new FormRenderer("update-job", $job_fields);
$form->onlyFields = true;

// Nazwa stanowiska
$job_name_field = getFormField("job_name", true);
$job_name_field->value = $job_page_data["job_name"];
$job_name_field->className = "col-12 mb-2";
$job_name_field->inputmask = "[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\s]+";

// Data rozpoczecia
$job_start_date_field = getFormField("job_start_date", true);
$job_start_date_field->value = $job_page_data["job_start_date"];
$job_start_date_field->className = "col-12 mb-2";
$job_start_date_field->msgRequired = "Data rozpoczęcia pracy musi zostać podana.";

// Data waznosci
$job_expire_field = getFormField("job_expire", true);
$job_expire_field->value = $job_page_data["job_expire"];
$job_expire_field->className = "col-12 mb-2";
$job_expire_field->msgRequired = "Data ważności oferty musi zostać podana.";

// Rodzaj umowy
$job_type_field = getFormField("job_type", true);
$job_type_field->value = $job_page_data["job_type"];

// Miasto
$job_city_field = getFormField("job_city", true);
$job_city_field->value = $job_page_data["job_city"];
$job_city_field->className = "col-12 mb-2";
$job_city_field->inputmask = "[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\s]+";

// Wojewodztwo
$job_province_name_field = getFormField("province_name", false, true);
$job_province_name_field->name = "province_name";
$job_province_name_field->value = $job_page_data["job_province_name"];
$job_province_name_field->className = "col-12";


// Wojewodztwo ukryte
$job_province_name_hidden_field = getFormField("hidden");
$job_province_name_hidden_field->name = "job_province_name";
$job_province_name_hidden_field->value = $job_page_data["job_province_name"];


// Opis  pole ukryte - hack
$job_description_hidden = getFormField('hidden');
$job_description_hidden->name = 'job_description_hidden';
$job_description_hidden->value = $job_page_data["job_description"];

// Opis
$job_description_field = getFormField("job_description");
$job_description_field->className = "col-12 mb-3";

$form->addMarkup($job_name_field->render(false), true);
$form->addMarkup($job_expire_field->render(), true);
$form->addMarkup($job_start_date_field->render(), true);
$form->addMarkup($job_type_field->render(), true);

$form->addMarkup($job_city_field->render(false), true);
$form->addMarkup(render_info_message('Wpisz nazwę miasta i wybierz odpowiednią pozycję z listy w celu wypełnienia informacji o województwie.<div class="header-shadow-wrapper position-static z-index-0 mt-2"></div>', 'col-12 mb-3'), true);
$form->addMarkup($job_province_name_field->render(false), true);
$form->addMarkup($job_province_name_hidden_field->render(false), true);
$form->addMarkup($job_description_hidden->render(), true);
$form->addMarkup($job_description_field->render(), true);

// Obowiazki

$responsibilities_repeater = $job_page_data["job_responsibilities"];
$responsibilities = array();
foreach ($responsibilities_repeater as $responsibility_repeater) {
 array_push($responsibilities, $responsibility_repeater->job_responsibility);
}

// Wymagania

$requirements_repeater = $job_page_data["job_requirements"];
$requirements = array();
foreach ($requirements_repeater as $requirement_repeater) {
    array_push($requirements, $requirement_repeater->job_requirement);
}

// Oferta

$offers_repeater = $job_page_data["job_offers"];
$offers = array();
foreach ($offers_repeater as $offer_repeater) {
    array_push($offers, $offer_repeater->job_offer);
}

$responsibilities_markup = render_job_repeater($responsibilities, "job_responsibilities", "Obowiązki pracownika");
$requirements_markup = render_job_repeater($requirements, "job_requirements", "Wymagania dla pracownika");
$offers_markup = render_job_repeater($offers, "job_offers", "Oferta pracodawcy");

$button_markup = '<div class="d-flex justify-content-between flex-wrap mt-4">
                        <div class="col-12 col-sm-5 px-0">
                            <a href="' . $pages->get('template=dashboard-jobs')->url . '" class="back-button btn btn-round btn-secondary mb-4 w-100 text-white">Powrót</a>
                        </div>
                        <div class="col-12 col-sm-5 px-0">
                            <button type="button" class="submit-button btn btn-round btn-primary mb-4 w-100">Zapisz zmiany</button>
                        </div>
                  </div>';

// Tabs
$tabs = new TabsRenderer("job-edit");
$tabsPhone = new TabsRenderer("job-edit");

$tabs->addMarkup($form->render(). $button_markup, "Opis");
$tabs->addMarkup($responsibilities_markup. $button_markup, "Obowiązki");
$tabs->addMarkup($requirements_markup. $button_markup, "Wymagania");
$tabs->addMarkup($offers_markup. $button_markup, "Oferta");

$tabsPhone->addMarkup($form->render(), "Opis oferty");
$tabsPhone->addMarkup($responsibilities_markup, "Zakres obowiązków");
$tabsPhone->addMarkup($requirements_markup, "Wymagania");
$tabsPhone->addMarkup($offers_markup, "Oferta pracodawcy");


?>

<!DOCTYPE html>
<html lang="pl">
<head>

    <?php include_once "partials/_head.php" ?>

    <!-- Wysiwyg -->
    <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css">

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

                            <h3 class="font-weight-800 mb-0 py-3 pt-xl-5 section-title-3 text-center text-uppercase"><?= $page_title ?></h3>

                            <form method="post" action="<?= $pages->get('template=dashboard-jobs')->url ?>" name="dashboard-edit-job" class="mt-5">

                                <div class="desktop-tabs">
                                    <?= $tabs->render() ?>
                                </div>

                                <div class="mobile-tabs">
                                    <?= $tabsPhone->render(true) ?>
                                    <?= $button_markup ?>
                                </div>

                                <input type="hidden" name="action" value="update-job">
                                <input type="hidden" name="job_id" value="<?= $editId ?>">

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

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard-edit-job.js"></script>
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
