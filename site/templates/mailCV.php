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
$urls = wire('urls');

header($header);
header('Access-Control-Allow-Origin: *');

$notSent = array("status" => "not sent");

http_response_code($statuscode);

// Sprawdz czy istnieja parametry

    if (Request::is('post')) {

        $file_name = $_FILES["attachment"]["name"];
        $tmp_file_name = $_FILES["attachment"]["tmp_name"];
        $target_file = '/home/wplanet/public_html/webplanet.biz/kbf/site/templates/temp/' . basename($file_name);
        move_uploaded_file($tmp_file_name, $target_file);

        $mailData = array(
            "to" => $input->post->to,
            "email" => $input->post->email,
            "subject" => $input->post->subject,
            "name" => $input->post->name,
            "phone" => $input->post->phone,
            "targetFile" => $target_file,
            "bodyHTML" => $input->post->bodyHTML
        );

        $response = mailTo($mailData);

    }

    if ($response === false) echo json_encode($notSent);
    echo json_encode($response);








