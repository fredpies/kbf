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

    $company_id = $input->company_id;

    if ($company_id) {

        $company_page = $pages->get('company_id=' . $sanitizer->int($company_id));
        if ($company_page->id) {
            $company_data = sanitize_company_data($company_page);
            if (empty($company_data['company_logo_url'])) $company_data['company_logo_url'] = $urls->images . 'upload/company-logo.png';
            $response = $company_data;
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








