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

$target_dir = '/home/wplanet/public_html/webplanet.biz/kbf/site/templates/temp/'; // Katalog w ktorym ma zapisac obraz, trzeba ustawic osobno lokalnie i dla serwera inaczej w zaleznosci od hosta
//$target_dir = 'c:/xampp/htdocs/kbf2/site/templates/temp/'; // Katalog w ktorym ma zapisac obraz, trzeba ustawic osobno lokalnie i dla serwera inaczej w zaleznosci od hosta

http_response_code($statuscode);

// Sprawdz czy istnieja parametry

if (Request::is('post')) {

    $company_page = $pages->get($input->post->company_id);
    $products_container = $company_page->get('title=Produkty');

    $input_data = array(); // Dane przekazywane do funkcji aktualizujacej strone - update_page

    foreach ($input->post as $value_name => $value) {

        if ($value_name !== 'action' && $value_name !== 'page_id' && $value_name !== 'company_id' && $value_name !== 'image_names') {

            // Zabezpiecz dane
            $input_data[$value_name] = $sanitizer->text($value);

            // Branza sub-branza
            $input_data["industry"] = $sanitizer->text($company_page->industry);
            $input_data["sub_industry"] = $sanitizer->text($company_page->sub_industry);
            $input_data["province_name"] = $sanitizer->text($company_page->province_name);
            $input_data["area_name"] = $sanitizer->text($company_page->area_name);

        }
    }

    $new_product_page = add_product($products_container, $input_data);

    if ($new_product_page->id) {

        $new_product_page->of(false);

        $image_names = explode(',', $input->post->image_names);
        $product_images = $new_product_page->product_images;

        foreach ($image_names as $image_name) {
            $product_images->add($target_dir . $user->id . '-' . $image_name);
            $new_product_page->save();
            unlink($target_dir . $user->id . '-' . $image_name);
        }

        $response = array(
        "status" => "success",
        "company_id" => $input->post->company_id,
        "images" => $image_names,
        );

    }

}

echo json_encode($response);