<?php namespace ProcessWire;

include_once("./lib/Rest.class.php");
include_once("./lib/functions.php");
include_once ("./partials/_init.php");

$sanitizer = wire('sanitizer');
$templates = wire('templates');
$user = wire('user');
$input = wire('input');

check_user($user);
$company_page = get_user_company($user);
check_user_company($company_page);
$banners_group = $company_page->find("name=banery");


// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

header($header);
header('Access-Control-Allow-Origin: *');

$target_dir = 'tmp-upload/';

http_response_code($statuscode);


/**
 * @param $input
 * @return bool
 */
function isNameValid($input, $sanitizer, $company_page): bool {
    if($input->post->banner_name !== "") {
        $name = $sanitizer->text($input->post->banner_name);

        $banners_container = $company_page->get('name=banery');
        $bannerWithName = $banners_container->get('template=banner, name='.$name);
        if($bannerWithName instanceof NullPage) {
            return true;
        }
        return false;
    }
    return false;
}

if (Request::is('post')) {

    if(isNameValid($input, $sanitizer, $company_page)) {

        if(!empty($_FILES['banner_image']['name'][0]) && !empty($_FILES['banner_image_mobile']['name'][0])) {
            $banner_page= new Page();
            $banner_page->template = $templates->get("banner");
            $banner_page->parent = $banners_group[0];

            $banner_page->of(false);
            $banner_page->title = $sanitizer->text($input->post->banner_name);
            $banner_page->name = $sanitizer->text($input->post->banner_name);
            $banner_page->banner_name = $sanitizer->text($input->post->banner_name);
            $banner_page->banner_target_url = $sanitizer->textarea($input->post->banner_target_url);

            //TODO: move to set banner index, industres, jobs
            $banner_page->banner_expire = $sanitizer->datetime(date('Y-m-d', strtotime('+1 year')));
            //TODO: dodac opcje dla miesiaca

            $banner_page->save();

            $file_name = $_FILES["banner_image"]["name"];
            $tmp_file_name = $_FILES["banner_image"]["tmp_name"];
            $target_file = $target_dir . basename($file_name);
            $status = move_uploaded_file($tmp_file_name, $target_file);
            if ($status === true) {
                $banner_page->banner_image->add($target_file);
                $banner_page->save();

                $file_name = $_FILES["banner_image_mobile"]["name"];
                $tmp_file_name = $_FILES["banner_image_mobile"]["tmp_name"];
                $target_file = $target_dir . basename($file_name);
                $status = move_uploaded_file($tmp_file_name, $target_file);
                if ($status === true) {
                    $banner_page->banner_image_mobile->add($target_file);
                    $banner_page->save();

                    $response = array("success" => "New banner saved.");
                } else {
                    $response = array("error" => "Cant upload file for mobile.");
                }
            } else {
                $response = array("error" => "Cant upload file for desktop.");
            }
            $banner_page->of(true);
        } else {
            $response = array("error" => "Grafika w obu formatach jest wymagana.");
        }
    } else {
        $response = array("error" => "Nazwa jest wymagana i musi być unikalna.");
    }
}
echo json_encode($response);