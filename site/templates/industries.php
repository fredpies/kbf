<?php

namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

// GET request
if (Request::is('get')) $response = get_industries();

http_response_code($statuscode);
header($header);
header('Access-Control-Allow-Origin: *');
echo json_encode($response);

