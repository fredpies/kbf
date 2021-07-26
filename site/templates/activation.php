<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$pages = wire('pages');
$users = wire('users');
$sanitizer = wire('sanitizer');
$session = wire('session');
$input = wire('input');
$urls = wire('urls');

$dashboard_page_url = $pages->get('template=dashboard')->url;

// Komunikaty

$status = "confirmed";

$message_template = '

    <div class="col-md-9 col-lg-8">{message}</div>
    <a class="col-md-9 col-lg-8 d-block text-center" href="{dashboard_url}">Powrót</a>

';

if ($input->get->c) {

    $_user = $users->get('confirmation_code=' . $sanitizer->selectorValue($input->get->c));

    if (!$_user instanceof NullPage) {

        $_user->of(false);
        $_user->activated = true;
        $_user->confirmation_code = '';
        $_user->save();
        $_user->of(true);

        $message_text = 'Konto zostało aktywowane. Możesz zalogować się do swojego profilu użytkownika.';

    } else {
        $status = 'expired';
        $message_text = 'Podany link aktywacyjny jest niewłaściwy lub utracił swoją ważność.';
    }

    if ($status === 'expired') $type = 'danger';
    else $type = 'success';

    $message = replacePlaceholders(array('{message}' => render_alert($message_text, $type, false), '{dashboard_url}' => $dashboard_page_url), $message_template);

}
?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>

</head>
<body>

<!-- Content -->
<div class="main-content py-0 mt-4">

    <div class="container">
        <div class="row flex-column align-content-center">

            <?= $message ?>

        </div>
    </div>

</div>


<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>


</body>
</html>
