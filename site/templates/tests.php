<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/FormRenderer.class.php";

$company = $pages->get("template=company");

$formRenderer = new FormRenderer("generated", $company);

$field = $company->getField("company_address");
$field2 = $company->getField("company_zip");
$field3 = $company->getField("company_city");
$field4 = $company->getField("company_description_html");
$field5 = $company->getField("company_logo");

$formRenderer->operation = "add";
$formRenderer->action = "/";

$formRenderer->addField($field5);
$formRenderer->addField($field);
$formRenderer->addField($field2);
$formRenderer->addField($field3);
$formRenderer->addField($field4);


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
                <?php echo $formMarkup ?>
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

