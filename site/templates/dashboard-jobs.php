<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

check_redirect(wire('user'));

$page = wire('page');
$pages = wire('pages');
$session = wire('session');
$sanitizer = wire('sanitizer');
$page_title = $sanitizer->text($page->title);
$input = wire('input');

$company_page = $pages->get($session->company_page_id);
$jobs_container = $company_page->get('title=Oferty Pracy');
$jobs = $jobs_container->find('template=job');

$pagination = get_pagination($jobs);

// Przetwarzanie formularza


if ($input->post('action')) {

    $input_data = array(); // Dane przekazywane do funkcji aktualizujacej strone - update_page

    foreach ($input->post as $value_name => $value) {

    if ($value_name !== 'action' && $value_name !== 'page_id')
        $input_data[$value_name] = $value;
    }


    // UPDATE

    // Zignoruj "job_responsibilites", "job_requirements", "job_offers", pole musza byc zaktualizowane osobno jako pola repeater
    if ($input->post->action === 'update-job') {

        update_page($input->post->job_id, $input_data, ["job_responsibilities", "job_requirements", "job_offers", "job_description_hidden"]);

        $_job_page = $pages->get("id=" . $input->post->job_id);
        $_job_responsibilities = $_job_page->job_responsibilities;
        update_repeater_values($_job_responsibilities, $input->post->job_responsibilities);



    }



}

// Modal
$modalMarkup = '

    <h5 class="text-center">Czy jesteś pewien, że chcesz wybraną ofertę pracy ?</h5>
    <form class="row mt-5" action="' . $page->url . '" method="post">
        <div class="col"><button type="submit" class="confirm-button btn btn-round btn-danger w-100">Usuń</button></div>
        <div class="col"><button data-dismiss="modal" type="button" class="cancel-button btn btn-round btn-success w-100">Anuluj</button></div>
        <input type="hidden" name="action" value="delete-job">    
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

                                    <?php

                                    foreach ($jobs as $job) {

                                        $jobs_data = sanitize_job_data($job);
                                        echo render_dashboard_job_list_item($jobs_data["job_name"], $jobs_data["job_type"], $jobs_data["job_expire"], $jobs_data["job_id"]);
                                    }


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
<script src="<?php echo $urls->js ?>dashboard.js"></script>
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
