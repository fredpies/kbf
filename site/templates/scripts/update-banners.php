<?php

namespace ProcessWire;

include_once("../../../index.php");

$db = wire('db');
$pages = wire('pages');
$sanitizer = wire('sanitizer');

$banners = $pages->find('template=banner,id>346376');
$counter = 0;

foreach ($banners as $banner) {

    $counter++;
    $banner->of(false);
    $company_page = $banner->parent->parent;
    $banner->industry = $company_page->industry;
    $banner->sub_industry = $company_page->sub_industry;
    $banner->sub_sub_industry = $company_page->sub_sub_industry;
    $banner->save();

    echo $counter . " Banner with id: " . $banner->id . " has been updated.\n";

}




