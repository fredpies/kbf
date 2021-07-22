<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$pages = wire('pages');
$sanitizer = wire('sanitizer');
$session = wire('session');
$urls = wire('urls');

$home_page_url = $pages->get(1)->url;
$confirmation_page_url = $pages->get('template=send-cv-confirmation')->url;

if (isset($input->company_id)) {
    $company_id = $sanitizer->selectorValue($input->company_id);
}
else $session->redirect($home_page_url);

if (isset($input->job_id)) {
    $job_id = $sanitizer->selectorValue($input->job_id);
}
else $session->redirect($home_page_url);

// Przygotuj dane
$company_data = sanitize_company_data($pages->get("template=company,company_id=$company_id"));
$job_data = sanitize_job_data($pages->get("template=job,id=$job_id"))

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>

</head>
<body>

<!-- Preloader -->
<?php //include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Content -->
<div class="main-content py-0 mt-4">
    <div class="container">

            <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">Wyślij swoje cv</h3>
            <h6 class="font-weight-400 text-center">Aplikujesz na stanowisko:<br><span class="d-inline-block mt-2 font-weight-500"> <?= $job_data["job_name"] ?></span></h6>
            <h6 class="font-weight-400 text-center mt-3 mb-4">Podaj swoje dane i załącz dokument cv. Twoja aplikacja zostanie wysłana do pracodawcy.</h6>
            <div class="kbf-send-cv mt-3 mt-md-5">

                <div class="bg-white rounded-xl shadow-sm mb-3 mb-md-5">
                    <div class="card-body pt-0">

                        <form enctype="multipart/form-data" novalidate role="form" name="send-cv" class="pl-lg-5">

                            <input type="hidden" name="job_name" value="<?= $job_data["job_name"] ?>">
                            <input type="hidden" name="job_url" value="<?= $job_data["job_url"] ?>">
                            <input type="hidden" name="company_email" value="<?= $company_data["company_email"] ?>">
                            <input type="hidden" name="company_id" value="<?= $company_data["company_id"] ?>">
                            <input type="hidden" name="job_id" value="<?= $job_data["job_id"] ?>">
                            <input type="hidden" name="confirmation_page_url" value="<?= $confirmation_page_url ?>">

                            <div class="row justify-content-center">

                                <div class="col-12 col-lg-5 mb-3">
                                    <div class="input-group input-group-lg input-group-round mb-4">
                                        <label class="text-uppercase px-3">Imię i nazwisko</label>
                                        <div class="input-group-inner">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text input-group-icon"><i class="far fa-user"></i></span>
                                            </div>

                                            <input autocomplete="off" type="text" class="form-control form-control-lg"
                                                   name="name"
                                                   required
                                                   data-msg-required="Pole z imieniem i nazwiskiem nie może być puste."
                                                   data-inputmask-regex="[A-Za-z\sążźćłóęńśĄŻŹĆŁÓĘŃŚ]+"
                                            >

                                            <div class="input-focus-bg"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-none d-lg-flex col-5">
                                    <p class="kbf-form-info align-self-center">
                                        Wpisz swoje imię i nazwisko. <br/>Wypełnienie pola jest wymagane.
                                    </p>
                                </div>

                                <div class="col-12 mb-4 text-carrot error d-none">W celu wysłania formularza należy wypełnić pole "Imię i nazwisko".
                                </div>


                                <div class="col-12 col-lg-5 mb-3">
                                    <div class="input-group input-group-lg input-group-round mb-4">
                                        <label class="text-uppercase px-3">Numer telefonu</label>
                                        <div class="input-group-inner">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text input-group-icon"><i class="fa fa-phone"></i></span>
                                            </div>

                                            <input autocomplete="off" type="text" class="form-control form-control-lg"
                                                   name="phone"
                                                   required
                                                   data-inputmask-regex="[1-9][0-9]{2}-[0-9]{3}-[0-9]{3,}"
                                                   data-rule-kbfPhone="true"
                                                   data-msg-kbfPhone="Pole z numerem telefonu posiada niewłaściwy format."
                                                   data-msg-required="Pole z numerem telefonu nie może być puste.">

                                            <div class="input-focus-bg"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-none d-lg-flex col-5">
                                    <p class="kbf-form-info align-self-center">
                                        Wpisz swój numer telefonu. <br/>Wypełnienie pola jest wymagane.
                                    </p>
                                </div>

                                <div class="col-12 mb-4 text-carrot error d-none">W celu wysłania formularza należy wypełnić pole "Numer telefonu".
                                </div>

                                <div class="col-12 col-lg-5 mb-3">
                                    <div class="input-group input-group-lg input-group-round mb-4">
                                        <label class="text-uppercase px-3">Adres e-mail</label>
                                        <div class="input-group-inner">
                                            <div class="input-group-prepend">
                                            <span class="input-group-text input-group-icon">
                                                <i class="far fa-envelope"></i></span>
                                            </div>

                                            <input type="text" autocomplete="off" class="form-control form-control-lg"
                                                   name="email"
                                                   required data-inputmask-regex=".+@.+"
                                                   data-rule-email="true"
                                                   data-msg-required="Pole e-mail nie może byś puste."
                                                   data-msg-email="Adres e-mail posiada niewłaściwy format."
                                            >
                                            <div class="input-focus-bg"></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-none d-lg-flex col-5">
                                    <p class="kbf-form-info align-self-center mb-0">
                                        Wpisz swój adres e-mail. <br>Wypełnienie pola jest wymagane.
                                    </p>
                                </div>

                                <div class="col-12 mb-4 text-carrot error d-none">W celu wysłania formularza należy wypełnić
                                    pole "Adres e-mail".
                                </div>

                                <div class="col-12 col-lg-5 mb-2">

                                    <label for="cv-field" class="d-block text-uppercase px-3">Załącz cv</label>
                                    <input style="border: 0" type="file" autocomplete="off" class="align-self-center form-control form-control-lg pl-3"
                                           name="attachment"
                                           id="cv-field"
                                           required
                                           data-msg-required="W celu wysłania aplikacji należy dołączyć swoje CV."
                                    >

                                </div>

                                <div  class="d-none d-lg-flex col-5">
                                    <p class="kbf-form-info align-self-center mb-0">
                                        Załącz swoje cv i wyślij do pracodawcy.
                                    </p>
                                </div>


<<<<<<< Updated upstream
                                <div class="col-12 text-center text-md-right align-self-center mt-4">
                                    <div class="row justify-content-center">
                                        <div class="col-12 col-md-5">
                                            <button type="submit" class="send-cv btn btn-round btn-block shadow-none btn-primary mr-lg-4">Wyślij</button>
                                        </div>
                                        <div class="col-12 col-md-5">
                                            <button type="button"
                                                    class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">
                                                Powrót
                                            </button>
                                        </div>
=======
                            <div class="col-12 text-center text-md-right align-self-center mt-4">
                                <div class="row justify-content-center">
                                    <div class="col-12 col-md-5">
                                        <button type="submit" class="send-cv btn btn-round btn-block shadow-none btn-primary mr-lg-4">Wyślij</button>
                                    </div>
                                    <div class="col-12 col-md-5">
                                        <button type="button"
                                                class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">
                                            Wróć
                                        </button>
>>>>>>> Stashed changes
                                    </div>
                                </div>

                            </div>
                        </form>

                    </div>

                    <hr class="mb-3 mb-md-0">

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
<script src="<?php echo $urls->js ?>send-cv.js"></script>
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
