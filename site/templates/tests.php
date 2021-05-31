<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormFields.php";

$textField = new FormFieldAddressAutocomplete();
$textField->name = "autocomplete";
$textField->label = "Address autocomplete";
$textField->icon = "fa-map-marker";
$textField->description = "Address autocomplete";
$textFieldMarkup = $textField->render();

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

    <div class="container">

        <div class="row justify-content-center">
                <?= $textFieldMarkup ?>
        </div>


    </div>


</div>


<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->
<script src="<?= $urls->js ?>tests.js"></script>

</body>

</html>

