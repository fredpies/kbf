<?php

namespace ProcessWire;

include_once("../../../index.php");

$row_count = 1; // Licznik wstawionych banerow

// Pobierz dane banerow
$result = $db->query("select * from banners where company_id > 76562 order by company_id");

while ($row = $result->fetch_assoc()) {

// Przygotuj dane o banerze
    if (!empty($row["company_id"])) $company_id = $sanitizer->selectorValue($row["company_id"]);
    if (!empty($row["banner_name"])) $banner_name = $row["banner_name"];
    if (!empty($row["banner_target_url"])) $banner_target_url = $row["banner_target_url"];
    if (!empty($row["banner_expire"])) $banner_expire = $row["banner_expire"];
    if (!empty($row["banner_activated"])) $banner_activated = $sanitizer->int($row["banner_activated"]);
    if (!empty($row["banner_blocked"])) $banner_blocked = $sanitizer->int($row["banner_blocked"]);
    if (!empty($row["banner_type"])) $banner_type = $row["banner_type"];
    if (!empty($row["banner_location_index"])) $banner_location_index = $sanitizer->int($row["banner_location_index"]);
    if (!empty($row["banner_location_industry"])) $banner_location_industry = $sanitizer->int($row["banner_location_industry"]);
    if (!empty($row["banner_location_job"])) $banner_location_job = $sanitizer->int($row["banner_location_job"]);

    print_r($company_id);

// Grafika banera dodawana osobno
    if (!empty($row["banner_image"])) $banner_image = $row["banner_image"];

// Znajdz sekcje "banery" dla firmy banera
    $target_company = $pages->get("template=company,company_id=$company_id");

// Dodaj baner tylko w przypadku gdy istnieje firma
    if (!empty($target_company->id)) {

        echo "Target company: $target_company->company_name\n";
        echo "Target company id: $target_company->company_id\n";

        $banners_group = $target_company->find("title=Banery");
        $banners = $banners_group[0];

// Dodaj baner do sekcji "banery" dla danej firmy
        $new_banner = new Page();
        $new_banner->setOutputFormatting(false);
        $new_banner->template = "banner";
        $new_banner->parent = $banners;
        $new_banner->title = $banner_name;
        $new_banner->banner_name = $banner_name;
        $new_banner->banner_expire = $banner_expire;
        $new_banner->banner_type = $banner_type;

// Target URL
        if (!empty($banner_target_url)) $new_banner->banner_target_url = $banner_target_url;

// Checkboxes
        if (isset($banner_activated) && $banner_activated === 1) $new_banner->banner_activated = true;
        if (isset($banner_activated) && $banner_activated === 0) $new_banner->banner_activated = false;

        if (isset($banner_blocked) && $banner_blocked === 1) $new_banner->banner_blocked = true;
        if (isset($banner_blocked) && $banner_blocked === 0) $new_banner->banner_blocked = false;

        if (isset($banner_location_index) && $banner_location_index === 1) $new_banner->banner_location_index = true;
        if (isset($banner_location_index) && $banner_location_index === 0) $new_banner->banner_location_index = false;

        if (isset($banner_location_industry) && $banner_location_industry === 1) $new_banner->banner_location_industry = true;
        if (isset($banner_location_industry) && $banner_location_industry === 0) $new_banner->banner_location_industry = false;

        if (isset($banner_location_job) && $banner_location_job === 1) $new_banner->banner_location_job = true;
        if (isset($banner_location_job) && $banner_location_job === 0) $new_banner->banner_location_job = false;

        $new_banner->save();

// Dodaj grafike do banera
        if (!empty($banner_image)) {
            if (file_exists("./logos/$banner_image")) {
                if (isset($new_banner->banner_image)) $new_banner->banner_image->add("./logos/$banner_image");
                sleep(1);
                $new_banner->save();
            }
        }


        echo "Banner with id: $new_banner->id added. Row number: $row_count\n";
        echo "-------------------------------------------------------------\n";

        $row_count++;
    }
}
