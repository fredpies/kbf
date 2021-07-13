<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormFields.php";
include_once "lib/FormRenderer.class.php";

$templates = wire('templates');
$page = wire('page');
$pages = wire('pages');
$urls = wire('urls');
$input = wire('input');
$session = wire('session');

$userTemplate = $templates->get('user');
$user_fields = $userTemplate->fields;

$email = '';
$pass = '';

$status = '';
$errorMessage = '';

// Przetwarzanie logowania
if ($input->post->action) {

    if ($input->post->action === 'login') {

        $email = $input->post('email', 'text');
        $pass = $input->post('pass', 'text');

        $user = $session->login($email, $pass);

        if ($user) {

            if (!$user->activated) {
                $status = 'inactive';
                $session->logout();
            } else $session->redirect($pages->get('template=dashboard')->url);
        }
        else $status = 'invalid';
    }

}

if ($status === 'invalid') $errorMessage = 'Podany adres e-mail lub hasło jest nieprawidłowe.';
if ($status === 'inactive') $errorMessage = 'Konto nie zostało aktywowane. Kliknij na link aktywacyjny wysłany na adres e-mail.';

// Login form
$loginForm = new FormRenderer('login-form', $user_fields);
$loginForm->onlyFields = true;

$emailField = getFormField('email', true);
$emailField->className = 'col-12 mb-3';
$emailField->label = 'Nazwa użytkownika lub adres e-mail';
$emailField->icon = 'fa fa-user';
$emailField->required = true;
$emailField->msgRequired = 'Pole z nazwą użytkownika musi być wypełnione.';
$emailField->value = $email;

$passField = getFormField('pass', true);
$passField->className = 'col-12 mb-3';
$passField->required = true;
$passField->value = $pass;

$loginForm->addMarkup($emailField->render(false), true);
$loginForm->addMarkup($passField->render(false), true);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include_once "partials/_head.php" ?>
    <!-- Perfect scrollbar-->
    <link rel="stylesheet" href="<?php echo $urls->css ?>perfect-scrollbar.css">
</head>
<body class="bg-image" data-img-src="<?= $urls->images ?>upload/section-bg-shape-02.png" style="background-image: url('<?= $urls->images ?>upload/section-bg-shape-02.png');">

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Content -->
<div class="login-content main-content pb-0 w-100">

    <div class="d-flex justify-content-center">
        <div class="col-sm-6">
            <?php if (!empty($errorMessage)) echo render_alert($errorMessage, 'danger') ?>
        </div>
    </div>

    <div class="d-flex justify-content-center title-icon mb-3">
        <img src="<?= $urls->assets ?>/svg/upload/login-03.svg" alt="Login" data-width="64px" data-height="64px" style="width: 64px; height: 64px;">
    </div>
    <h3 class="font-weight-800 mb-5 section-title-3 text-center text-uppercase"><?= $page->title ?></h3>

    <div class="d-flex justify-content-center">

        <form novalidate name="login-form" class="login-form col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3" method="post" action="<?= $page->url ?>">

            <?= $loginForm->render() ?>
            <?= render_info_message('Wpisz adres e-mail oraz hasło w celu zalogowania do swojego profilu użytkownika.<div class="header-shadow-wrapper position-static z-index-0 mt-2"></div>', 'col-12 mb-1') ?>

            <div class="col-12">
                <button type="submit" class="submit-button btn btn-round btn-secondary mb-4 mx-2 mx-lg-0 w-100">Zaloguj</button>
                <input type="hidden" name="action" value="login">
            </div>

            <div class="no-account mb-5 text-center">
                <p class="mb-0">Nie masz jeszcze konta ?</p>
                <a href="<?= $pages->get('template=choose-registration')->url ?>">Zarejestruj się</a>
            </div>

        </form>

    </div>

</div>


<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>login.js"></script>
<script>

</body>
</html>