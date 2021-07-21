<?php namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");
include_once ("./partials/_init.php");

$pages = wire('pages');
$user = wire('user');
$input = wire('input');
$sanitizer = wire('sanitizer');

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

header($header);
header('Access-Control-Allow-Origin: *');

$target_dir = 'c:/xampp/htdocs/kbf2/site/templates/temp/'; // Katalog w ktorym ma zapisac obraz, trzeba ustawic osobno lokalnie i dla serwera inaczej w zaleznosci od hosta

http_response_code($statuscode);

// Sprawdz czy istnieja parametry

if (Request::is('post')) {

$target_file = $target_dir . $user->id . '-' . $input->post->imageName ;
unlink($target_file);

}

echo json_encode($response);