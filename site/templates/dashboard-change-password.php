<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$urls = wire('urls');
$page = wire('page');
$pages = wire('pages');
$session = wire('session');
$sanitizer = wire('sanitizer');
$input = wire('input');
$user = wire('user');

check_user($user);
$user_company_page = get_user_company($user);
check_user_company($user_company_page);
$company_data = sanitize_company_data($user_company_page);

$dashboard_page_url = $pages->get('template=dashboard')->url;
$confirmation_page_url = $pages->get('template=change-password-confirmation')->url;

// Przetwarzanie formularza

$submitted = false;
$password_valid = true;

if ($input->post->action === 'change-password') $submitted = true;

if ($submitted) {

    $password_valid = $session->authenticate($user, $input->post->pass);

    if ($password_valid) {

        $confirmation_code = sha1(bin2hex(random_bytes(10)));
        $proto = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";

        $bodyHTML = '<p style="font-weight: bold">Potwierdzenie zmiany hasła.</p>
                <p>Kliknij na poniższym linku w celu aktywowania konta z nowym hasłem.</p>
                <p>Link aktywacyjny : <a href="' . $proto . $_SERVER['HTTP_HOST'] . $confirmation_page_url . '?c='. $confirmation_code . '">' . $proto . $_SERVER['HTTP_HOST'] . $confirmation_page_url . '?c='. $confirmation_code . '</a></p>';
        
        $mailData = array(
                'subject' => 'Zmiana hasła',
                'to' => $sanitizer->email($user->email),
                'from' => 'administrator@webplanet.biz',
                'bodyHTML' => $bodyHTML
            );

        mailTo($mailData);

            $user->of(false);
            $user->confirmation_code = $confirmation_code;
            $user->pending_password = $sanitizer->text($input->post->get('pass-new'));
            $user->save();
            $user->of(true);

    }
}

$password_field = getFormField('pass');
$password_field->description = 'Podaj aktualne hasło.';
$password_field->required = true;
$password_field->msgRequired = 'Pole z hasłem nie może być puste.';

$password_new_field = getFormField('pass');
$password_new_field->name = 'pass-new';
$password_new_field->id = 'pass-new';
$password_new_field->required = true;
$password_new_field->msgRequired = 'Pole z nowym hasłem nie może być puste.';
$password_new_field->label = 'Nowe hasło';
$password_new_field->description = 'Podaj nowe hasło.';

$password_repeat_field = getFormField('pass-repeat');
$password_repeat_field->label = 'Powtórz hasło';
$password_repeat_field->required = true;
$password_repeat_field->msgRequired = 'Potwiedzenie nowego hasła jest wymagane.';
$password_repeat_field->description = 'Powtórz nowe hasło.';

$button_submit_markup = ' <div class="col-12 col-sm-5 col-lg-6 px-3 mt-3">
                        <button type="button" class="submit-button btn btn-round btn-primary mb-4 w-100">Zmień hasło</button>
                    </div>';

$button_back_markup = ' <div class="col-12 col-sm-5 col-lg-6 px-3 mt-3">
                        <a href="' . $dashboard_page_url . '" class="back-button btn btn-round btn-secondary mb-4 w-100">Powrót</a>
                    </div>';


if ($submitted && !$password_valid) {

    $password_field->value = $sanitizer->text($input->post->pass);
    $password_new_field->value = $sanitizer->text($input->post->get('pass-new'));
    $password_repeat_field->value = $sanitizer->text($input->post->get('pass-repeat'));

}

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

                            <h3 class="font-weight-800 mb-0 py-3 pt-xl-5 pb-xl-4 section-title-3 text-center text-uppercase">
                                Zmiana hasła</h3>
                            <?php if (!$password_valid) echo render_alert('Wprowadzone, istniejące hasło użytkownika jest nieprawidłowe.', 'danger') ?>

                            <div class="form-container <?php if ($submitted && $password_valid) echo 'd-none'; ?>">
                                <?= render_info_message('Wpisz dane umożliwiające zmianę hasła użytkownika i zatwierdź zmiany.<div class="header-shadow-wrapper position-static z-index-0 mt-2"></div>', 'col-12 my-3') ?>
                                <form name="change-password" action="<?= $page->url ?>" method="post" novalidate
                                      autocomplete="off">

                                    <div class="row">
                                        <?= $password_field->render() ?>
                                        <?= $password_new_field->render() ?>
                                        <?= $password_repeat_field->render() ?>
                                        <input type="hidden" name="action" value="change-password">
                                        <?= $button_submit_markup ?>
                                    </div>

                                </form>
                            </div>

                            <div class="message-container d-none <?php if ($submitted && $password_valid) echo 'd-block'; ?>">

                                <?= render_alert('Hasło zostało zmienione. Konto zostanie ponownie aktywowane po wybraniu linka wysłanego na adres e-mail: ' . $company_data["company_email"], 'success', false); ?>
                                <div class="row justify-content-center">
                                    <?= $button_back_markup ?>
                                </div>

                            </div>

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
<script src="<?php echo $urls->js ?>change-password.js"></script>
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
