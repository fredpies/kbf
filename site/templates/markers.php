<?php

namespace ProcessWire;

include_once("./lib/Rest.php");
include_once("./lib/functions.php");

// Wartosci domyslne
$statuscode = 200;
$header = Header::mimeType('json'); // Format wyjsciowy
$response = array(); // Zbior wynikowy

// Sprawdz czy istnieja parametry
$provinceName = urldecode($input->get("province-name"));
$areaName = urldecode($input->get("area-name"));
$industry = urldecode($input->get("industry"));
$subIndustry = urldecode($input->get("sub-industry"));

if (!empty($provinceName) && !empty($areaName)) {

    // Formatuj wartosci dla selektora
    $provinceName = $sanitizer->selectorValue($provinceName);
    $areaName = $sanitizer->selectorValue($areaName);

    // Branza opcjonalna
    if (!empty($industry)) {
        $industry = $sanitizer->selectorValue(strtoupper($industry));
        $selector = "template=company,province_name=$provinceName,area_name=$areaName,industry=$industry";

        // Sub branza opcjonalna
        if (!empty($subIndustry)) {
            $subIndustry = $sanitizer->selectorValue(strtoupper($subIndustry));
            $selector .= ",sub_industry=$subIndustry";
        }
    }

    if (empty($industry)) $selector = "template=company,province_name=$provinceName,area_name=$areaName";


    // GET request
    if (Request::is('get')) {

        // Pobierz liste firm dla powiatu
        $companies = $pages->find($selector);

        if ($companies->count() > 0) {

            // Dodaj informacje o firmach z geolokalizacja do zbioru wynikowego
            foreach ($companies as $company) {

                $result = array();
                // Dodaj do wyniku jesli istnieje lat i lon
                if (!empty($company->lat) && !empty($company->lon)) {

                    $result["company_name"] = $sanitizer->text($company->company_name);
                    $result["company_address"] = $sanitizer->text($company->company_address);
                    $result["company_zip"] = $sanitizer->text($company->company_zip);
                    $result["company_city"] = $sanitizer->text($company->company_city);
                    $result["company_phone_1"] = filter_phone_fax_number($sanitizer->text($company->company_phone_1));
                    $result["company_phone_2"] = filter_phone_fax_number($sanitizer->text($company->company_phone_2));

                    $result["industry"] = $sanitizer->text($company->industry);
                    $result["sub-industry"] = $sanitizer->text($company->sub_industry);

                    $result["lat"] = $sanitizer->text($company->lat);
                    $result["lon"] = $sanitizer->text($company->lon);
                    $result["url"] = $company->url;

                    array_push($response, $result);
                }
            }

        } else $response = array();
    }

} else $response = array();

http_response_code($statuscode);
header('Access-Control-Allow-Origin: *');
header($header);
echo json_encode($response);