<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$user = wire('user');
$urls = wire('urls');
$page = wire('page');
$pages = wire('pages');
$session = wire('session');
$sanitizer = wire('sanitizer');
$page_title = $sanitizer->text($page->title);
$input = wire('input');

check_user($user);
$company_page = $pages->get($session->company_page_id);
check_user_company($company_page);

$jobs_container = $company_page->get('title=Oferty Pracy');

// Przetwarzanie formularza

if ($input->post('action')) {

    $input_data = array(); // Dane przekazywane do funkcji aktualizujacej strone - update_page

    foreach ($input->post as $value_name => $value) {

    if ($value_name !== 'action' && $value_name !== 'page_id') {

        // Zabezpiecz dane
        $input_data[$value_name] = $sanitizer->text($value);

        // Branza sub-branza
        $input_data["industry"] =  $sanitizer->text($company_page->industry);
        $input_data["sub_industry"] =  $sanitizer->text($company_page->sub_industry);

    }
}

    // UPDATE

    // Zignoruj "job_responsibilites", "job_requirements", "job_offers", pole musza byc zaktualizowane osobno jako pola repeater
    if ($input->post->action === 'update-job') {

        update_page($input->post->job_id, $input_data, ["job_responsibilities", "job_requirements", "job_offers", "job_description_hidden"]);

        $_job_page = $pages->get("id=" . $input->post->job_id);

        // Aktualizuj odpowiedzialnosco
        update_repeater_values(array(

            "page" => $_job_page,
            "repeater_pages" => $_job_page->job_responsibilities,
            "repeater_field_name" => "job_responsibility",
            "values" => $input->post->job_responsibilities

        ));

        // Aktualizuj wymagania
        update_repeater_values(array(

            "page" => $_job_page,
            "repeater_pages" => $_job_page->job_requirements,
            "repeater_field_name" => "job_requirement",
            "values" => $input->post->job_requirements

        ));

        // Aktualizuj oferte pracodawcy
        update_repeater_values(array(

            "page" => $_job_page,
            "repeater_pages" => $_job_page->job_offers,
            "repeater_field_name" => "job_offer",
            "values" => $input->post->job_offers

        ));
    }

    // DODAWANIE

    if ($input->post->action === 'add-job') {

        $_job_page = add_job($jobs_container, $input_data);

        // Aktualizuj odpowiedzialnosco
        update_repeater_values(array(

            "page" => $_job_page,
            "repeater_pages" => $_job_page->job_responsibilities,
            "repeater_field_name" => "job_responsibility",
            "values" => $input->post->job_responsibilities

        ));

        // Aktualizuj wymagania
        update_repeater_values(array(

            "page" => $_job_page,
            "repeater_pages" => $_job_page->job_requirements,
            "repeater_field_name" => "job_requirement",
            "values" => $input->post->job_requirements

        ));

        // Aktualizuj oferte pracodawcy
        update_repeater_values(array(

            "page" => $_job_page,
            "repeater_pages" => $_job_page->job_offers,
            "repeater_field_name" => "job_offer",
            "values" => $input->post->job_offers

        ));

    }

    // USUWANIE
    if ($input->post->action === 'delete-job') {
        delete_page($sanitizer->int($input->post->job_id));
    }
}

$jobs = $jobs_container->find('template=job');
$pagination = get_pagination($jobs);

// Modal
$modalMarkup = '

    <h5 class="text-center">Jesteś pewien, że chcesz usunąć ofertę pracy ?</h5>
    <form class="row mt-5" action="' . $page->url . '" method="post" name="delete-confirmation">
        <div class="col"><button type="submit" class="confirm-button btn btn-round btn-danger w-100">Usuń</button></div>
        <div class="col"><button data-dismiss="modal" type="button" class="cancel-button btn btn-round btn-success w-100">Anuluj</button></div>
        <input type="hidden" name="action" value="delete-job">
        <input type="hidden" name="job_id">   
    </form>
';

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

                    <div class="pb-3 mb-3">
                        <div class="bg-white rounded-xl shadow-sm px-4 py-5 p-md-5">

                            <?php

                                if ($input->post->action === 'update-job') {
                                    echo render_alert('Oferta pracy została zaktualizowana.', 'light');
                                }

                                if ($input->post->action === 'add-job') {
                                    echo render_alert('Oferta pracy została dodana.', 'light');
                                }

                                if ($input->post->action === 'delete-job') {
                                    echo render_alert('Oferta pracy została trwale usunięta.', 'light');
                                }

                            ?>


                            <h5 class="font-weight-700 mb-4 section-title-4 text-center text-lg-left"><?= $page_title ?></h5>

                            <?php if($jobs->count) { ?>

                                <div class="row px-3">

                                    <div class="col-12">

                                        <div class="row mt-5 mb-3 d-none d-md-flex">

                                            <div class="col-12 col-sm-4 col-lg-5 col-xl-4 pr-4 pl-xl-4">
                                               Stanowisko
                                            </div>

                                            <div class="col-12 col-sm-3 col-lg-2 col-xl-3 pl-xl-4">
                                                Rodzaj
                                            </div>

                                            <div class="col-12 col-sm-3 col-lg-5 col-xl-3">
                                                Data ważności
                                            </div>

                                            <div class="col-12 col-sm-2 col-lg-1"></div>

                                        </div>

                            <?php } ?>

                                    <?php

                                    if ($jobs->count) {
                                        foreach ($jobs as $job) {

                                            $jobs_data = sanitize_job_data($job);
                                            echo render_dashboard_job_list_item($jobs_data["job_name"], $jobs_data["job_type"], $jobs_data["job_expire"], $jobs_data["job_id"]);
                                        }
                                    } else
                                        echo render_info_message('Nie posiadasz aktualanie zarejestrowanej żadnej oferty pracy. Wybierz opcję "DODAJ OFERTĘ PRACY" w celu jej rejestracji.<div style="height: 0" class="header-shadow-wrapper position-static z-index-0 mt-2"></div>', 'col-12 mb-3');
                                    ?>

                                    <br>
                                    <?= $pagination ?>


                                    <form class="mt-5" method="get" action="">

                                        <div class="d-flex justify-content-between flex-wrap mt-4">
                                            <div class="col-12 col-sm-5 px-0">
                                                <a href=" <?= $pages->get('template=dashboard')->url ?>" class="back-button btn btn-round btn-secondary mb-4 w-100 text-white">Powrót</a>
                                            </div>
                                            <div class="col-12 col-sm-5 px-0">
                                                <a type="button" href="<?= $pages->get('template=dashboard-add-job')->url ?>" class="btn btn-round btn-primary mb-4 w-100 text-white">Dodaj ofertę pracy</a>
                                            </div>
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

    <?= render_modal("confirmation", "Potwierdzenie", $modalMarkup) ?>

</div>

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Main script -->
<script src="<?php echo $urls->js ?>dashboard-jobs.js"></script>
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
