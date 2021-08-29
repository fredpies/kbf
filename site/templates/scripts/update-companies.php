<?php

namespace ProcessWire;

include_once("../../../index.php");

$db = wire('db');
$pages = wire('pages');
$sanitizer = wire('sanitizer');

$result = $db->query('SELECT * FROM company_sub_sub_industries_2');
while($row = $result->fetch_array()) {

    $company_page = $pages->get('company_id=' . $sanitizer->selectorValue($row[0]));
    if ($company_page->company_id) {
        $company_page->of(false);
        $company_page->sub_sub_industry = $row[1];
        $company_page->save();

        echo "Company id: " . $company_page->company_id . "updated.\n";

    }


}






