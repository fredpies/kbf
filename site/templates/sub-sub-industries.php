<?php

namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");

$input = wire('input');

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

// Sprawdz czy istnieja parametry
$sub_industry = urldecode($input->get("sub-industry"));

// Pobierz sub branze
if (!empty($sub_industry)) {

    $sub_sub_industries = get_sub_sub_industries($sub_industry);
    $query = get_sub_sub_industries_query($sub_sub_industries);

    $response = array(
        "sub_sub_industries" => $sub_sub_industries,
        "query" => $query
    );

} else return array(
    "sub_sub_industries" => array(),
    "query" => ""
);

http_response_code($statuscode);
header($header);
header('Access-Control-Allow-Origin: *');
echo json_encode($response);

