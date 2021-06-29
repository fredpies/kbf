<?php

namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

$input = wire('input');

$mailData = array(
    "from" => urldecode($input->post("from")),
    "to" => urldecode($input->post("to")),
    "fromName" => urldecode($input->post("fromName")),
    "subject" => urldecode($input->post("subject")),
    "bodyHTML" => urldecode($input->post("bodyHTML"))
);

$notSent = array("status" => "not sent");

http_response_code($statuscode);
header($header);
header('Access-Control-Allow-Origin: *');

// Sprawdz czy istnieja parametry
if (!empty($mailData["from"])
    && !empty($mailData["to"])
    && !empty($mailData["subject"])
    && !empty($mailData["bodyHTML"]))
    {

    // GET request
    if (Request::is('post')) $response = mailTo($mailData);

    if ($response === false) echo json_encode($notSent);
    echo json_encode($response);

} else {
    echo json_encode($notSent);
}







