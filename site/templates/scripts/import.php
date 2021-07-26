<?php

namespace ProcessWire;

include_once("../../../index.php");
include_once("../functions.php");

$row_count = 1; // Licznik wstawionych wierszy

$result = $db->query("select * from companies where company_id >= 77220 order by company_id");

while ($row = $result->fetch_assoc()) {

// Wartosci domyslne
    $company_id = "";
    $company_address = "";
    $company_zip = "";
    $company_city = "";
    $company_name = "";
    $company_email = "";
    $company_phone_1 = "";
    $company_phone_2 = "";
    $company_fax = "";
    $company_nip = "";
    $company_regon = "";
    $province_name = "";
    $area_name = "";
    $company_www = "";
    $company_logo = "";
    $company_description_html = "";
    $company_keywords = "";
    $company_skype = "";
    $added_page_name = "";

// Przygotuj dane o firmie
    if (!empty($row["company_id"])) $company_id = $row["company_id"];
    if (!empty($row["company_address"])) $company_address = $row["company_address"];
    if (!empty($row["company_zip"])) $company_zip = $row["company_zip"];
    if (!empty($row["company_city"])) $company_city = $row["company_city"];
    if (!empty($row["company_name"])) $company_name = $sanitizer->selectorValue($row["company_name"]);
    if (!empty($row["company_email"])) $company_email = $row["company_email"];
    if (!empty($row["company_phone_1"])) $company_phone_1 = $row["company_phone_1"];
    if (!empty($row["company_phone_2"])) $company_phone_2 = $row["company_phone_2"];
    if (!empty($row["company_fax"])) $company_fax = $row["company_fax"];
    if (!empty($row["company_nip"])) $company_nip = $row["company_nip"];
    if (!empty($row["company_regon"])) $company_regon = $row["company_regon"];
    if (!empty($row["province_name"])) $province_name = $row["province_name"];
    if (!empty($row["area_name"])) $area_name = $row["area_name"];
    if (!empty($row["company_www"])) $company_www = $row["company_www"];
    if (!empty($row["company_logo"])) $company_logo = $row["company_logo"];
    if (!empty($row["company_description_html"])) $company_description_html = $row["company_description_html"];
    if (!empty($row["company_keywords"])) $company_keywords = $row["company_keywords"];
    if (!empty($row["company_skype"])) $company_skype = $row["company_skype"];

    $company_name = str_replace(",", " ", $company_name); // Usun przecinki z nazwy firmy
    $company_name = str_replace('"', '\"', $company_name); // Usun cudzyslowy z nazwy firmy
    $company_name = str_replace('.', ' ', $company_name); // Usun cudzyslowy z nazwy firmy

// Sprawdz czy firma istnieje

    $exists_page = $pages->findOne("template=company, company_id=$company_id");

    $name = $sanitizer->selectorValue($company_name);
    print_r("Name: $name\n");

    if ($exists_page->id === 0) {

        echo "Called not exists.\n";

// Geokoduj lokalizacje
        $lat = "";
        $lon = "";
        $latlon = get_lat_lon($company_address, $company_city, $company_zip);
        sleep(1);
        if (isset($latlon[0])) $lat = $latlon[0];
        if (isset($latlon[1])) $lon = $latlon[1];

// Pobierz branze i sub-branze z bazy
        $industry = "";
        $sub_industry = "";

        $industries_result = $db->query("select * from industries where company_id = $company_id limit 0,1");
        while ($row = $industries_result->fetch_array()) {

            if (!empty($row["industry"])) $industry = $row["industry"];
            if (!empty($row["sub_industry"])) $sub_industry = $row["sub_industry"];


// Dodaj firme w kolekcji "Firmy"

            print_r("Page not exists\n");

            $pages->add("company", "/firmy/", [
                "title" => $company_name,
//            "name" => $name,
                "company_id" => $company_id,
                "company_address" => $company_address,
                "company_zip" => $company_zip,
                "company_city" => $company_city,
                "company_name" => $company_name,
                "company_email" => $company_email,
                "company_phone_1" => $company_phone_1,
                "company_phone_2" => $company_phone_2,
                "company_fax" => $company_fax,
                "company_nip" => $company_nip,
                "company_regon" => $company_regon,
                "province_name" => $province_name,
                "industry" => $industry,
                "sub_industry" => $sub_industry,
                "area_name" => $area_name,
                "lat" => $lat,
                "lon" => $lon,
                "company_www" => $company_www,
                "company_description_html" => $company_description_html,
                "company_keywords" => $company_keywords,
                "company_skype" => $company_skype,
                "company_funds" => 0,
                "company_subscription_expire" => "2021-06-30",
                "company_subscription" => "basic"

            ]);

            $added_company = $pages->get("title=$company_name,company_id=$company_id");
            $added_page_name = $added_company->name; // Nazwa dodanej strony

// Dodaj logo do strony
            if (!empty($company_logo)) {

                if (file_exists("./logos/$company_logo")) {
                    if (isset($added_company->company_logo)) $added_company->company_logo->add("./logos/$company_logo");
                    sleep(1);
                    $added_company->save();
                }

            }

            print_r("Company with id: $company_id added. Row number: $row_count\n");


            $row_count++;

        }
    } else {
        echo "Page exists.\n";
    }
}
