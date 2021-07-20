<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/Alert.class.php";

$session = wire('session');
$pages = wire('pages');

$login_url = $pages->get('template=login')->url;

// Alert
$alert = new Alert('mt-5');
$alert->type = "success";
$alert->hideIcon = true;
$alert->heading = "Firma została zarejestrowana w Katalogu Branżowym Firm.";
$alert->contents = "<p>Na adres e-mail: <b>" . $session->company_email . "</b> został wysłany login i hasło umożliwiające zalogowanie się do panelu zarządzania. </b></p>";

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>

</head>
<body>

<!-- Preloader -->
<?php //include_once "partials/_preloader.php"
?>

<!-- Content -->
<div class="main-content py-0">
    <div class="container">
        <h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">FIRMA ZOSTAŁA ZAREJESTROWANA</h3>
        <?= $alert->render() ?>

        <div class="col-12 col-md-5 mx-auto">
            <a href="<?= $login_url ?>" class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">Logowanie</a>
        </div>

    </div>
</div>


<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>


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
