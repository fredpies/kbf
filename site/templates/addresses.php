<?php

namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

$input = wire("input");
header($header);
header('Access-Control-Allow-Origin: *');

if(isset($input->get->q)) {

    $q = $input->get->q;

    // GET request
    if (Request::is('get')) $response = get_addresses($q);
    http_response_code($statuscode);
    echo json_encode($response);

} else return json_encode(array());


