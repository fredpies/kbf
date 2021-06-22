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

// TODO: Nalezy pobierac dla firmy
$job_page = $pages->get(348503);
//$job_page = $pages->get(348446);
$job_fields = $job_page->fields;

// Formularz dla zakladki "Opis oferty"
$form = new FormRenderer("update-job", $job_fields);
$form->onlyFields = true;

// Nazwa stanowiska
$job_name_field = getFormField("job_name", true);
$job_name_field->value = $sanitizer->text($job_page->get("job_name"));
$job_name_field->className = "col-12 mb-2";
$job_name_field->inputmask = "[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\s]+";

// Data rozpoczecia
$job_start_date_field = getFormField("job_start_date", true);
$job_start_date_field->value = $sanitizer->text($job_page->get("job_start_date"));
$job_start_date_field->className = "col-12 mb-2";
$job_start_date_field->msgRequired = "Data rozpoczęcia pracy musi zostać podana.";

// Data waznosci
$job_expire_field = getFormField("job_expire", true);
$job_expire_field->value = $sanitizer->text($job_page->get("job_expire"));
$job_expire_field->className = "col-12 mb-2";
$job_expire_field->msgRequired = "Data ważności oferty musi zostać podana.";

// Rodzaj umowy
$job_type_field = getFormField("job_type", true);

// Miasto
$job_city_field = getFormField("job_city", true);
$job_city_field->value = $sanitizer->text($job_page->get("job_city"));
$job_city_field->className = "col-12 mb-2";
$job_city_field->inputmask = "[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\s]+";

// Wojewodztwo
$job_province_name_field = getFormField("province_name", false, true);
$job_province_name_field->value = $sanitizer->text($job_page->get("province_name"));
$job_province_name_field->className = "col-12";

// Opis  pole ukryte - hack
$job_description_hidden = getFormField('hidden');
$job_description_hidden->name = 'job_description_hidden';
$job_description_hidden->value = $sanitizer->entitiesMarkdown($job_page->get('job_description'));

// Opis
$job_description_field = getFormField("job_description");
$job_description_field->className = "col-12 mb-3";

$form->addMarkup($job_name_field->render(false), true);
$form->addMarkup($job_expire_field->render(), true);
$form->addMarkup($job_start_date_field->render(), true);
$form->addMarkup($job_type_field->render(), true);

$form->addMarkup($job_city_field->render(false), true);
$form->addMarkup(render_info_message('Wpisz nazwę miasta i wybierz odpowiednią pozycję z listy w celu wypełnienia informacji o województwie.', 'col-12 mb-5'), true);
$form->addMarkup($job_province_name_field->render(false), true);
$form->addMarkup($job_description_hidden->render(), true);
$form->addMarkup($job_description_field->render(), true);

// Obowiazki

$responsibilities = array(
        'Kreowanie wizerunku z zakresu stylizacji i koloryzacji włosów',
        'Przeprowadzanie rytuałów pielęgnacyjnych',
        'Budowanie długofalowych relacji z klientem',
        'Sprzedaż kosmetyków i doradztwo w zakresie ich właściwego doboru i stosowania'
);



// Wymagania

$requirements = array(
    'Znajomość towarów – drewna i materiałów drzewnych',
    'Komunikatywność w rozmowie z klientam',
    'Obsługa wózka widłowego',
);

// Oferta

$offers = array(
    'Pakiet socjalny',
    'Dobra atmosfera pracy',
    'Wysokie wynagrodzenie',
);

$responsibilities_markup = render_job_repeater($responsibilities, "job_responsibilities", "Obowiązki pracownika");
$requirements_markup = render_job_repeater($requirements, "job_requirements", "Wymagania dla pracownika");
$offers_markup = render_job_repeater($offers, "job_offers", "Oferta pracodawcy");


$button_markup = '<div class="row justify-content-center mt-4">
                        <div class="col-12 col-sm-6">
                            <button type="submit" class="submit-button btn btn-round btn-outline-dark mb-4 mx-2 mx-lg-0 w-100">Zapisz zmiany</button>
                        </div>
                  </div>';


// Tabs
$tabs = new TabsRenderer("job-edit");
$tabsPhone = new TabsRenderer("job-edit");

$tabs->addMarkup($form->render(). $button_markup, "Opis");
$tabs->addMarkup($responsibilities_markup, "Obowiązki");
$tabs->addMarkup($requirements_markup, "Wymagania");
$tabs->addMarkup($offers_markup, "Oferta");

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

                            <form name="dashboard-edit-job" class="mt-5" method="get" action="">

                                <div class="desktop-tabs">
                                    <?= $tabs->render() ?>
                                </div>

                                <div class="mobile-tabs">
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
