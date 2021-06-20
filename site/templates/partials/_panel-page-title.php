<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$page = wire('page');
$sanitizer = wire('sanitizer');
$page_title = $sanitizer->text($page->title);

?>
<div class="bg-light">
    <div class="container">
        <div class="row pt-5 pb-4">

            <div class="col-12 col-lg-4 ">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb p-0">
                        <li class="breadcrumb-item">
                            <h5 class="font-weight-700 mb-0 d-inline-block"><a href="<?php echo $pages->get(1)->url ?>panel">MOJE KBF</a></h5>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page"><h5 class="font-weight-700 mb-0 d-inline-block"><?= $page_title ?></h5></li>
                    </ol>
                </nav>
            </div>

        </div>
    </div>
</div>