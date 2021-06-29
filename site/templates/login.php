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

// Dashboard page
$dashboardURL = $pages->get('template=dashboard')->url;

$userTemplate = $templates->get('user');
$user_fields = $userTemplate->fields;

$credentialsValid = true;
$email = '';
$pass = '';

// Przetwarzanie logowania
if ($input->post('submit')) {

    $email = $input->post('email', 'text');
    $pass = $input->post('pass', 'text');

    $user = $session->login($email, $pass);

    if ($user) {
        //$session->set('company_page', get_user_company($user)); // Ustaw strone firmy dla sesji
       $session->redirect($dashboardURL);
    }
    else $credentialsValid = false;

}

$errorMessage = $credentialsValid ? '' : '<div class="error kbf-login-error position-static mb-2">Podane dane logowania są nieprawidłowe.</div>';


// Login form
$loginForm = new FormRenderer('login', $user_fields);
$loginForm->onlyFields = true;

$emailField = getFormField('email', true);
$emailField->className = 'col-12';
$emailField->value = $email;

$passField = getFormField('pass', true);
$passField->className = 'col-12';
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
<body>

<!-- Preloader -->
<?php include_once "partials/_preloader.php" ?>

<!-- Navigation menu -->
<?php include_once "partials/_menu.php" ?>

<!-- Content -->
<div class="main-content pt-4 pb-0 mt-4">

    <div class="d-flex justify-content-center title-icon mb-3">
        <img src="<?= $urls->assets ?>/svg/upload/login-03.svg" alt="Login" data-width="64px" data-height="64px" style="width: 64px; height: 64px;">
    </div>
    <h3 class="font-weight-800 mb-5 section-title-3 text-center text-uppercase"><?= $page->title ?></h3>

    <div class="d-flex justify-content-center">

        <form novalidate class="login-form col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3" method="post" action="<?= $page->url ?>">


            <?= $loginForm->render() ?>
            <?= render_info_message('Wpisz adres e-mail oraz hasło w celu zalogowania do swojego profilu użytkownika.<div class="header-shadow-wrapper position-static z-index-0 mt-2"></div>', 'col-12 mb-1') ?>
            <?= $errorMessage ?>

            <div class="col-12">
                <button type="submit" class="submit-button btn btn-round btn-secondary mb-4 mx-2 mx-lg-0 w-100">Zaloguj</button>
                <input type="hidden" name="submit" value="submit">
            </div>

            <div class="no-account mb-5 text-center">
                <p class="mb-0">Nie masz jeszcze konta ?</p>
                <a href="">Zarejestruj się</a>
            </div>

        </form>

    </div>

</div>

<!-- Footer -->
<?php include_once "partials/_footer.php" ?>

<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Index js -->

</body>
</html>