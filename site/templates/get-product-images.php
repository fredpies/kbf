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
$urls = wire('urls');
$pages = wire('pages');
$sanitizer = wire('sanitizer');

header($header);
header('Access-Control-Allow-Origin: *');

// Sprawdz czy istnieja parametry

if (Request::is('get')) {

    $id = $input->id;

    if ($id) {

        $product_page = $pages->get($sanitizer->int($id));
        if ($product_page->id) {


            $product_images = array();
            foreach ($product_page->product_images as $product_image) {
                array_push($product_images, array(
                    "imageSrc" => $product_image->url
                ));
            }

            $response = $product_images;

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








