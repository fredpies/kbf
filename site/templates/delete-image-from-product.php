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

if (Request::is('post')) {

    $image_url = $input->post->image_url;
    $page_id = $input->post->page_id;

    if ($image_url && $page_id) {

        $product_page = $pages->get($sanitizer->int($page_id));

        $product_page->of(false);

        if ($product_page->id) {

            $image_page = $product_page->product_images->get('url=' . $image_url);

            $product_page->product_images->delete($image_page);
            $product_page->save();
            $response = array("status" => "success");

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








