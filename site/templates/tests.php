<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/StepperRenderer.class.php";

// Inicjuj stepper
$stepper = new StepperRenderer('kbf-stepper');
$stepper->stepperName = 'Rejestracja firmy';
$stepper->actionName = 'Zarejestruj';

// Zarejestruj kroki
$stepper->registerStep('Step 1', 'Message 1', 'Page 1');
$stepper->registerStep('Step 2', 'Message 2', 'Page 2');
$stepper->registerStep('Step 3', 'Message 3', 'Page 3');
$stepper->registerStep('Step 4', 'Message 4', 'Page 4');

?>

<!DOCTYPE html>
<html lang="pl">
<head>

    <?php include_once "partials/_head.php" ?>
    <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.bubble.css">

</head>

<body>

<!-- Content -->
<div class="main-content py-0">

    <?=  $stepper->render(); ?>

</div>


<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->

<script src="<?= $urls->js ?>register-company.js"></script>

</body>

</html>

