<?php namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");
include_once ("./partials/_init.php");

$input = wire('input');

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

header($header);
header('Access-Control-Allow-Origin: *');

$target_dir = 'tmp-upload/';

http_response_code($statuscode);

// Sprawdz czy istnieja parametry

if (Request::is('post')) {

    // Utworz nowa usluge
    $sanitizer = wire('sanitizer');
    $templates = wire('templates');
    $pages = wire('pages');
    $user = wire('user');
    $input = wire('input');

    check_user($user);
    $company_page = get_user_company($user);
    check_user_company($company_page);

    $service_page = $pages->get($input->post->id);

    if ($input->post->service_name !== "") {
        $service_page->of(false);
        $service_page->title = $sanitizer->text($input->post->service_name);
        $service_page->name = $sanitizer->text($input->post->service_name);
        $service_page->service_name = $sanitizer->text($input->post->service_name);
        $service_page->service_description = $sanitizer->textarea($input->post->service_description);
        $service_page->service_price = $sanitizer->text($input->post->service_price);

        $service_page->save();

        if(!empty($_FILES['service_image']['name'][0])){
            $file_name = $_FILES["service_image"]["name"];
            $tmp_file_name = $_FILES["service_image"]["tmp_name"];
            $target_file = $target_dir . basename($file_name);
            $status = move_uploaded_file($tmp_file_name, $target_file);
            if ($status === true) {
                $service_page->service_image->deleteAll();
                $service_page->service_image->add($target_file);
                $service_page->save();
                $response = array("success" => "Service updated.");
            } else {
                $response = array("error" => "Cant upload file.");
            }
        }

        $service_page->of(true);
    } else {
        $response = array("error" => "Cannot update service, name is missing.");
    }

}
echo json_encode($response);