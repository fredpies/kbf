<?php

namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

$input = wire('input');

// Sprawdz czy istnieja parametry
$regon = urldecode($input->get("regon"));

if (isset($regon)) {

    // GET request
    if (Request::is('get')) $response = get_data_by_regon($regon);
    http_response_code($statuscode);
    header($header);
    header('Access-Control-Allow-Origin: *');

    if ($response === false) echo json_encode(array());
    echo json_encode($response);

} else {
    echo json_encode(array());
}







