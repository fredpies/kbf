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

    $company_address = $input->company_address;
    $company_city = $input->company_city;

    if ($company_address && $company_city) {

        $result = get_lat_lon($company_address, $company_city);
        $response = array("lat" => $result[0], "lon" => $result[1]);
    } else {
        $statuscode = 404;
        $response = array("error" => "404");
    }

} else {

    $statuscode = 404;
    $response = array("error" => "404");
}

http_response_code($statuscode);
echo json_encode($response);








