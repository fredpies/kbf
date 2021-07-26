<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";

$page = wire('page');
$sanitizer = wire('sanitizer');
$page_title = $sanitizer->text($page->title);

?>
<div class="bg-light">
    <div class="container">
        <div class="row py-3">
        </div>
    </div>
</div>