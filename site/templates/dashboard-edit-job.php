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
$job_fields = $job_page->fields;

// Formularz dla zakladki "Opis oferty"
$form = new FormRenderer("update-job", $job_fields);
$form->onlyFields = true;

// Nazwa stanowiska
$job_name_field = getFormField("job_name", true);
$job_name_field->value = $sanitizer->text($job_page->get("job_name"));
$job_name_field->className = "col-12 mb-2";
$job_name_field->description = "";

// Data waznosci
$job_expire_field = getFormField("job_expire", true);
$job_expire_field->name = "job_expire";
$job_expire_field->value = $sanitizer->text($job_page->get("job_expire"));
$job_expire_field->className = "col-12 mb-2";
$job_expire_field->msgRequired = "Data ważności oferty musi zostać podana.";
$job_expire_field->label = "Data ważności oferty";

$job_expire_field->description = "";

// Data rozpoczecia
$job_start_date_field = getFormField("job_start_date", true);
$job_start_date_field->name = "job_start_date";
$job_start_date_field->value = $sanitizer->text($job_page->get("job_start_date"));
$job_start_date_field->className = "col-12 mb-2";
$job_start_date_field->msgRequired = "Data rozpoczęcia pracy musi zostać podana.";
$job_start_date_field->label = "Data rozpoczęcia pracy";




// Rodzaj etatu
$markup = '<div data-name="job_type" id="job-type" class="dropdown dropdown-job-type row w-100 mb-3">
                <div class="d-flex col-12 col-xl-4">
                    <label class="align-self-center px-3 w-100 text-uppercase" for="job-type-button">Rodzaj etatu</label>
                </div>
                <div class="col-12 col-xl-8">
                     <button class=" btn btn-lg btn-round btn-primary px-3 mb-md-0 dropdown-toggle w-100" type="button"
                            id="job-type-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                </div>
                
               
            </div>';

$form->addMarkup($job_name_field->render(), true);
$form->addMarkup($job_expire_field->render(), true);
$form->addMarkup($job_start_date_field->render(), true);
$form->addMarkup($markup, true);

$button_markup = '<div class="row justify-content-center mt-4">
                    <div class="col-12 col-sm-6">
                        <button type="submit" class="submit-button btn btn-round btn-outline-dark mb-4 mx-2 mx-lg-0 w-100">Zapisz zmiany</button>
                    </div>
                  </div>';

// Tabs
$tabs = new TabsRenderer("job-edit");
$tabsPhone = new TabsRenderer("job-edit");

$tabs->addMarkup($form->render(). $button_markup, "Opis");
$tabs->addMarkup("". $button_markup, "Odpowiedzialności");
$tabs->addMarkup("". $button_markup, "Wymagania");
$tabs->addMarkup("". $button_markup, "Oferta pracodawcy");

$tabsPhone->addMarkup($form->render(), "Opis oferty");
$tabsPhone->addMarkup("", "Zakres Odpowiedzialności");
$tabsPhone->addMarkup("", "Wymagania");
$tabsPhone->addMarkup("", "Oferta pracodawcy");


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

                            <form name="dashboard-job-edit" class="mt-5" method="get" action="">

                                <div class="d-none d-xl-block">
                                    <?= $tabs->render() ?>
                                </div>

                                <div class="d-block d-xl-none">
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
