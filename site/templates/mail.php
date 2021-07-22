<?php

namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");
<<<<<<< Updated upstream
include_once ("./partials/_init.php");
=======
>>>>>>> Stashed changes

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

$input = wire('input');
<<<<<<< Updated upstream
$sanitizer = wire('sanitizer');

header($header);
header('Access-Control-Allow-Origin: *');
=======

$mailData = array(
    "from" => urldecode($input->post("from")),
    "to" => urldecode($input->post("to")),
    "fromName" => urldecode($input->post("fromName")),
    "subject" => urldecode($input->post("subject")),
    "bodyHTML" => urldecode($input->post("bodyHTML"))
);
>>>>>>> Stashed changes

$notSent = array("status" => "not sent");

http_response_code($statuscode);
<<<<<<< Updated upstream

// Sprawdz czy istnieja parametry

    if (Request::is('post')) {

        $mailData = array(
            "to" => $input->post->to,
            "from" => $input->post->from,
            "subject" => $input->post->subject,
            "bodyHTML" => $input->post->bodyHTML
        );

        if ($input->post->fromName) {
            $fromName = $sanitizer->text($input->post->fromName);
            $response = mailTo($mailData, $fromName);
        } else  $response = mailTo($mailData);

    }
=======
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
>>>>>>> Stashed changes

    if ($response === false) echo json_encode($notSent);
    echo json_encode($response);

<<<<<<< Updated upstream
=======
} else {
    echo json_encode($notSent);
}
>>>>>>> Stashed changes







