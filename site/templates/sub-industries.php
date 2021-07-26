<?php

namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

// Sprawdz czy istnieja parametry
$industry = urldecode($input->get("industry"));

// Pobierz sub branze
if (!empty($industry)) {

    $sub_industries = get_sub_industries($industry); // Trzeba przekazac $database i $db (obiekty PW)
    $query = get_sub_industries_query($sub_industries);

    $response = array(
        "sub_industries" => $sub_industries,
        "query" => $query
    );

} else return array(
    "sub_industries" => array(),
    "query" => ""
);

http_response_code($statuscode);
header($header);
header('Access-Control-Allow-Origin: *');
echo json_encode($response);

