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

    <div class="kbf-stepper">

        <div class="container">

            <div class="steps d-none d-md-flex justify-content-between w-100 text-center mx-auto mt-3">

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

            <h3 class="font-weight-800 mb-0 pt-lg-5 py-lg-0 py-4 section-title-3 text-center text-uppercase">Rejestracja firmy</h3>
        </div>

        <form class="position-relative">

            <div class="w-100 page-info-msg fade show" style="font-size: 0.75rem;"><span class="d-inline-block page-info-msg-contents"><i class="fas fa-info text-primary mr-2"></i>Message 1</span></div>
            <div class="w-100 page-info-msg fade" style="font-size: 0.75rem;"><span class="d-inline-block page-info-msg-contents"><i class="fas fa-info text-primary mr-2"></i>Message 2</span></div>
            <div class="w-100 page-info-msg fade" style="font-size: 0.75rem;"><span class="d-inline-block page-info-msg-contents"><i class="fas fa-info text-primary mr-2"></i>Message 3</span></div>
            <div class="w-100 page-info-msg fade" style="font-size: 0.75rem;"><span class="d-inline-block page-info-msg-contents"><i class="fas fa-info text-primary mr-2"></i>Message 4</span></div>

            <div class="container overflow-hidden">
                <div class="page-wrapper d-flex py-5">

                    <div class="page">


                        Page 1

                    </div>

                    <div class="page">


                        Page 2

                    </div>

                    <div class="page">

                        Page 3

                    </div>

                    <div class="page">

                        Page 4

                    </div>
                </div>
            </div>


            <div class="container d-none d-md-block">
                <div class="col-12 text-center text-md-right align-self-center">
                    <div class="row justify-content-center">
                        <div class="col-md-5 button-desktop button-prev">
                            <button type="button" disabled="disabled" class="fade show btn btn-round btn-block shadow-none btn-primary position-relative mr-lg-4"><i
                                        class="icon-left d-inline-block position-absolute fa fa-angle-left"></i> Poprzedni krok
                            </button>
                        </div>
                        <div class="col-md-5 button-desktop button-next">
                            <button type="button" class="fade show btn btn-round btn-block shadow-none btn-primary position-relative mr-lg-4">Następny krok<i
                                        class="icon-right d-inline-block position-absolute fa fa-angle-right"></i></button>
                        </div>
                        <div class="col-md-5 button-desktop button-register">
                            <button type="button" class="fade btn btn-round btn-block shadow-none btn-success mr-lg-4">Zarejestruj</button>
                        </div>
                    </div>
                </div>

            </div>

            <!--  Mobile version -->
            <div class="container px-0 d-md-none">
                <div class="col-12 text-center text-md-right align-self-center">
                    <div class="row justify-content-around">
                        <div class="col-5 pl-0 pr-1 button-prev">
                            <button type="button" disabled="disabled" class="fade show btn btn-round btn-block shadow-none btn-primary position-relative mr-lg-4"><i
                                        class="icon-left d-inline-block position-absolute fa fa-angle-left"></i> Wróć
                            </button>
                        </div>
                        <div class="col-5 pl-1 pr-0 button-next">
                            <button type="button" class="fade show btn btn-round btn-block shadow-none btn-primary position-relative mr-lg-4">Dalej<i
                                        class="icon-right d-inline-block position-absolute fa fa-angle-right"></i></button>
                        </div>
                        <div class="col-5 pl-1 pr-0 button-register">
                            <button type="button" class="fade btn btn-round btn-block shadow-none btn-success mr-lg-4">Zarejestruj</button>
                        </div>
                    </div>
            </div>


        </form>

    </div>

</div>


<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>

<!-- Form validation -->
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<!-- Main script -->

<script src="<?= $urls->js ?>register-company.js"></script>

</body>

</html>

