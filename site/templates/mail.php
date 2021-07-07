<?php

namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");
include_once ("./partials/_init.php");

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

$input = wire('input');

header($header);
header('Access-Control-Allow-Origin: *');

$notSent = array("status" => "not sent");

http_response_code($statuscode);

// Sprawdz czy istnieja parametry

    if (Request::is('post')) {

        $mailData = array(
            "to" => $input->post->to,
            "from" => $input->post->from,
            "subject" => $input->post->subject,
            "bodyHTML" => $input->post->bodyHTML
        );

        $response = mailTo($mailData);

    }

    if ($response === false) echo json_encode($notSent);
    echo json_encode($response);








