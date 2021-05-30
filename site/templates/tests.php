<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";
include_once "lib/FormFields.php";

$company = $pages->get("template=company");
$company_description_html = $company->getField("company_description_html");
$lat = $company->getField("lat");

$formRenderer = new FormRenderer("example-form", $company);
$formRenderer->operation = "update";

$formRenderer->addField($company_description_html);
$formRenderer->addField($lat);

$hidden = new FormFieldHidden();
$hidden->value = "test";
$hidden->name = "hidden";

$formRenderer->addMarkup($hidden->render(), true);

$formMarkup = $formRenderer->render();

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

        <?= $formMarkup ?>

    </div>


</div>


<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->
<script src="<?php echo $urls->js ?>tests.js"></script>

</body>

</html>

