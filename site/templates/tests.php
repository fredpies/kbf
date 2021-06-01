<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

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

        <div class="steps d-flex justify-content-between w-100 text-center mx-auto mt-3">

            <div class="step active">
                <div class="step-name">Step Name 1</div>
                <div class="bullet">
                    <span>1</span>
                    <span class="fa fa-check"></span>
                </div>
            </div>

            <div class="step">
                <div class="step-name">Step Name 2</div>
                <div class="bullet">
                    <span>2</span>
                    <span class="fa fa-check"></span>
                </div>
            </div>


            <div class="step">
                <div class="step-name">Step Name 3</div>
                <div class="bullet">
                    <span>3</span>
                    <span class="fa fa-check"></span>
                </div>
            </div>

            <div class="step">
                <div class="step-name">Step Name 4</div>
                <div class="bullet">
                    <span>4</span>
                    <span class="fa fa-check"></span>
                </div>
            </div>

        </div>




    </div>


</div>


<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->

<!--<script src="--><!--tests.js"></script>-->

</body>

</html>

