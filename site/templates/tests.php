<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$company = $pages->get("template=company");


$field = $company->getField("company_address");
$field2 = $company->getField("company_zip");
$field3 = $company->getField("company_city");

// Pobierz definicje pola
$fields = $company->fields;


$fieldTypes = array(
        "FieldtypeText" => "text"
);





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

        <form novalidate role="form" name="form-name" class="pl-lg-5">


            <!-- Pola formularza-->
            <div class="row justify-content-center">

                <?php render_form_field($field); ?>
                <?php render_form_field($field2); ?>
                <?php render_form_field($field3); ?>

                <!-- WYSIWYG -->
                <div class="wysiwyg col-12 col-lg-10 col-xl-9 mb-5">
                        <label class="text-uppercase px-3">WYSIWYG</label>
                        <div class="editor"></div>
                        <input type="hidden" name="WYSIWYG" value="">
                </div>

                <!-- Koniec WYSIWYG -->

                <div class="col-12 text-center text-md-right align-self-center">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-5">
                            <button type="submit"
                                    class=" btn btn-round btn-block shadow-none btn-primary mr-lg-4">Wyślij
                                wiadomość
                            </button>
                        </div>
                        <div class="col-12 col-md-5">
                            <button type="button"
                                    class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">
                                WRÓĆ
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <!-- Koniec pol formularza-->


        </form>


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

