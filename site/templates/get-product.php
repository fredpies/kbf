<?php

namespace ProcessWire;

include_once("./partials/_init.php");
include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

$input = wire('input');
$pages = wire('pages');
$sanitizer = wire('sanitizer');

header($header);
header('Access-Control-Allow-Origin: *');

// Sprawdz czy istnieja parametry

if (Request::is('get')) {

    $product_id = $input->product_id;

    if ($product_id) {

        $product_page = $pages->get('id=' . $sanitizer->int($product_id));
        if ($product_page->id) {
            $product_data = sanitize_product_data($product_page);
            $product_data["product_description"] =  $sanitizer->text(get_excerpt($product_data["product_description"], 120));
            $response = $product_data;
        }
        else {
            $statuscode = 404;
            $response = array("error" => "404");
        }

    } else {
        $statuscode = 404;
        $response = array("error" => "404");
    }

}

http_response_code($statuscode);
echo json_encode($response);








