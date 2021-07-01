<?php namespace ProcessWire;

require_once __DIR__ . "../../../../vendor/autoload.php";
include_once "FormFields.php";

use GusApi\Exception\InvalidUserKeyException;
use GusApi\Exception\NotFoundException;
use GusApi\GusApi;

/****************
 *  BAZA DANYCH
 * *************/

// Zwraca branze z bazy
function get_industries() {

    $db = wire("db");

    $industries = array(); // Branze
    if (!isset($db)) return $industries;

    // Przygotuj zapytanie
    $sql = "SELECT distinct industry from industries";

    $industries_result = $db->query($sql);

    if ($industries_result->num_rows > 0) {
        while ($row = $industries_result->fetch_array()) {

            $industry = mb_strtoupper($row["industry"], "utf-8");
            array_push($industries, $industry);
        }
    } else return array();

    return $industries;

}

// Zwraca sub branze z bazy na podstawie nazwy branzy
function get_sub_industries($industry) {

    $database = wire("database");
    $db = wire("db");

    $sub_industries = array(); // Sub branze
    if (!isset($industry)) return $sub_industries;

    // Przygotuj zapytanie
    $industry = $database->quote($industry);
    $sql = "SELECT distinct sub_industry from industries where industry = $industry";

    $sub_industries_result = $db->query($sql);

    if ($sub_industries_result->num_rows > 0) {
        while ($row = $sub_industries_result->fetch_array()) {

            $sub_industry = mb_strtoupper($row["sub_industry"], "utf-8");
            array_push($sub_industries, $sub_industry);
        }
    } else return array();

    return $sub_industries;

}

/****************
 *    MARKUP
 * *************/

// Renderuje informacje o firmie
// TODO: Wymaga refaktoryzacji
function render_company_info($company_data = array()) {

    if (count($company_data) === 0) return;
    $pages = wire("pages");

    // Strona z lista firm
    $company_list_page_url = $pages->get("template=companies")->url;

    // Usun bledy w informacji o firmie
    $filtered_company = filter_company_name($company_data);
    $company_name = $filtered_company["company_name"];
    $company_address = $filtered_company["company_address"];
    $company_city = $filtered_company["company_city"];

    // Renderuj markup
    echo "<div ";

    // Jezeli logo nie istnieje ustaw padding left
    $paddingLeft = "";
    if (empty($company_data["company_logo_url"])) $paddingLeft = "style=\"padding-left: 15px;\"";
    echo $paddingLeft. "class=\"row no-gutters\">";

    // Wyswietl logo firmy jezeli istnieje
    if (!empty($company_data["company_logo_url"])) {
        echo "<div class=\"col-2 text-center\"><img class=\"d-inline-block img-fluid\" alt=\"logo\" src=\"" . $company_data["company_logo_url"] . "\"></div>";
    }

    echo "<div class=\"col-10 company-info pl-2\">";
    echo "<a class=\"company-name h5 d-block text-left mb-2 section-title-4 font-weight-700\" href=\"" . $company_data["company_url"] . "\">";
    echo "<span>" . $company_name . "</span>";
    echo "</a>";

    // Wyswietl regon jesli istnieje
    if (!empty($company_data["company_regon"])) echo "<div class=\"company-address mb-2 small\">REGON:" . $company_data["company_regon"] . "</div>";

    echo "<div class=\"company-street\">" . $company_address ."</div>";
    echo "<div class=\"company-zip-city mb-2\">";
    echo "<span class=\"company-zip\">" . $company_data["company_zip"] . " </span>";
    echo "<span class=\"company-city\">" . $company_city . "</span>";
    echo "</div>";

    // Tylko pierwszy telefon
    if (!empty($company_data["company_phone_1"]) && empty($company_data["company_phone_2"]))
        echo "<a class=\"d-block text-dark text-nowrap\" href=\"tel:" . filter_phone_fax_number($company_data["company_phone_1"]) . "\">
        <i class=\"fas fa-phone-alt mr-2\"></i>" . filter_phone_fax_number($company_data["company_phone_1"]) . "</a>";

    // Obydwa telefony
    if (!empty($company_data["company_phone_1"]) && !empty($company_data["company_phone_2"]))
        echo "<a class=\"d-block text-dark text-nowrap\" href=\"tel:" . filter_phone_fax_number($company_data["company_phone_1"]) . "\">
               <i class=\"fas fa-phone-alt mr-2\"></i>" . filter_phone_fax_number($company_data["company_phone_1"]) .
            "<a class=\"d-block text-dark text-nowrap\" href=\"tel:" . $company_data["company_phone_2"] . "\">
                <i class=\"fas fa-phone-alt mr-2\"></i>" . filter_phone_fax_number($company_data["company_phone_2"]) . "</a>";

    // Wyswietl fax jesli istnieje
    if (!empty($company_data["company_fax"]))
        echo "<a class=\"d-block text-dark text-nowrap\" href=\"fax:" . filter_phone_fax_number($company_data["company_fax"]) . "\"><i class=\"fas fa-fax mr-2\"></i>" . filter_phone_fax_number($company_data["company_fax"]) . "</a>";

    // Wyswietl www jesli istnieje
    if (!empty($company_data["company_www"]))
        echo "<a class=\"d-block text-dark text-nowrap\" href=\"http://" . $company_data["company_www"] . "\" target=\”_blank\”><i class=\"fas fa-globe mr-2\"></i>" . $company_data["company_www"] . "</a>";

    // Branza i sub-branza
    echo "<div class=\"company-industries\">";
    // Wyswietl branze
    if (!empty($company_data["industry"]))
        echo "<a href=\"" . $company_list_page_url ."?industry=" . $company_data["industry"] . "\"><span class=\"company-industry badge badge-pill badge-primary mb-1 mt-3\">" . $company_data["industry"] . "</span></a>";
    // Wyswietl sub-branze
    if (!empty($company_data["sub_industry"]))
        echo "<a href=\"" .  $company_list_page_url . "?sub_industry=" .  $company_data["sub_industry"] ."\"><span class=\"company-industry badge badge-pill badge-warning mb-1 mt-1\">" . $company_data["sub_industry"] . "</span></a>";

    echo "</div></div></div>";

}

// Renderuje podsumowanie firmy
function render_company_summary() {

    return '<div class="container"><div class="row mt-3">
                    
                    <div class="col-12 col-md-8 px-0">
                    
                    <div style="padding-left: 15px;" class="row no-gutters">
                    
                        <div class="col-10 company-info pl-2">
                        
                            <span class="company-name h5 d-block text-left mb-2 section-title-4 font-weight-700">{company_name}</span>
                            
                            <div class="company-address mb-2 small">REGON:{company_regon}</div>
                            <div class="company-street">{company_address}</div>
                        
                            <div class="company-zip-city mb-2">
                                <span class="company-zip">{company_zip}</span>
                                <span class="company-city">{company_city}</span>
                            </div>
                        
                            <span class="d-block text-dark text-nowrap"><i class="fas fa-phone-alt mr-2"></i>{company_phone_1}</span>
                            <span class="company-www d-block text-dark text-nowrap"><i class="fas fa-globe mr-2"></i>{company_www}</span>
                            <span class="d-block text-dark text-nowrap"><i class="fas fa-envelope mr-2"></i>{company_email}</span>
                        
                            <div class="company-industries">
                                <span class="badge badge-pill badge-primary mb-1 mt-3">{company_industry}</span>
                                <span class="badge badge-pill badge-warning mb-1 mt-1">{company_sub_industry}</span>
                            </div>
                        
                        </div>
                        
                    </div>
                    
                    
                    </div>
    
                    <!-- Minimap -->
                    <div class="col-12 col-md-4 my-3 my-md-0 no-gutters">
                        <div id="kbf-minimap" data-lat="{lat}" data-lon="{lon}"></div>
                    </div>
                   
                    <div class="col-12 mt-5 mb-4">
                        <div class="company-description my-2 my-md-4">{company_description_html}</div>
                    </div>

                </div>
        </div>';

}

// Renderuje panel ze skrocona informacja o ofercie pracy
function render_job_info($job_data = array(), $device = "desktop") {

    if (count($job_data) === 0) return;
    $urls = wire("urls");

    $job_excerpt_background_image = $urls->images . "upload/service-card-box-01.png";

    if ($device === "desktop") {

        echo "<div class=\"col-md-6 col-lg-4\">";
        echo "<div class=\"company-job card text-white bg-viridian-100 border-0 shadow bg-image\" data-img-src=\"$job_excerpt_background_image\">";
        echo "<div class=\"company-job-title card-header font-weight-700 text-uppercase\">";
        echo "<a href=\"#\" class=\"d-flex align-items-center text-white\"> <i class=\"fas fa-bahai fa-lg mr-2\"></i> <span class=\"mt-1\">" . $job_data["job_name"] . "</span></a>";
        echo "</div>";
        echo "<div class=\"company-job-description card-body position-relative\">";
        echo "<p class=\"card-text\">Poszukujemy pracownika na stanowisko: <span class=\"d-block my-2 font-weight-600 text-warning\">" . $job_data["job_name"] . "</span>";
        echo get_excerpt($job_data["job_description"], 135);
        echo "</p>";

        echo "<div class=\"show-more text-right pt-2 position-absolute\">";
        echo "<a href=\"" . $job_data["job_url"] . "\" class=\"btn btn-sm btn-link text-white pr-0 mb-0\"><i class=\"fas fa-long-arrow-alt-right\"></i>Więcej informacji</a>";
        echo "</div></div></div></div>";

    }

    if ($device === "phone") {
        echo "<div class=\"company-job-phone card text-white bg-viridian-100 border-0 shadow bg-image\" data-img-src=\"" . $job_excerpt_background_image . "\">";
        echo "<div class=\"company-job-title card-header font-weight-700 text-uppercase p-2\">";
        echo "<a href=\"" . $job_data["job_url"] . "\" class=\"d-flex align-items-center text-white\"><i class=\"fas fa-bahai fa-lg mr-2\"></i> <span class=\"mt-1\">" . $job_data["job_name"] . "</span></a></div>";
        echo "<div class=\"company-job-description card-body p-3 position-relative\">";

        echo "<p class=\"card-text\">Poszukujemy pracownika na stanowisko: <span class=\"d-block my-2 font-weight-600 text-warning\">" . $job_data["job_name"] . "</span>";
        echo get_excerpt($job_data["job_description"], 200);
        echo "</p>";

        echo "<div class=\"show-more text-right pt-2 position-absolute\"><a href=\"" . $job_data["job_url"] . "\" class=\"btn btn-sm btn-link text-white pr-0 mb-0\"><i class=\"fas fa-long-arrow-alt-right\"></i>Więcej informacji</a></div>";
        echo "</div></div>";

    }

};

// Renderuje repeater dla ofert pracy
function render_job_repeater($items = array(), $fieldName = "field", $title = "") {

    // TODO: Trzeba ustawic na realne dane
    $itemTemplate = '<li class="repeater-item d-flex list-group-item"><span spellcheck="false" contenteditable="true" class="col-10">{itemName}</span><div class="repeater-actions d-inline-block d-md-flex justify-content-end col-3"><a class="repeater-delete-action d-inline-block ml-2">Usuń</a></div></li>';

    $value = "";
    $idx = 0;

    foreach ($items as $itemName) {
        if ($idx === 0) $value .= $itemName;
        else $value .= "," . $itemName;
        $idx++;
    }

    $template = '<div class="job-details-edit row justify-content-center">
            
                    <div class="col-12 d-none d-md-block">
                        <h5>{title}</h5>
                    </div>
                
                    <div class="col-12">
                        <ul class="list-group list-group-flush pb-0">
                           {items}
                           <li class="repeater-item d-none"></li>
                        </ul>
                    </div>
                
                    <div class="col-12 input-group input-group-round my-3 px-0">
                    
                        <div class="input-group-inner">
                            <input autocomplete="off" type="text" class="{fieldName}-input form-control valid" data-inputmask-regex="[a-zA-ZńółęśźżŃÓŁĘŚŹŻ\s]+">
                            <div class="input-group-append"><button type="button" class="add-button btn btn-round btn-primary mb-0">Dodaj</button></div>
                            <div class="input-focus-bg"></div>
                        </div>
                        
                    </div>
                    
                    <input class="repeater-hidden-input" type="hidden" name="{fieldName}" required data-msg-required="Dodaj przynajmniej jedną pozycję do listy." value="{value}">
                
                    <label id="repeater-error" class="error kbf-error-message" for="{fieldName}"</label>
                    
                </div>';

    // Przygotuj {items}

    $itemsMarkup = '';

    foreach ($items as $itemName) {
        $itemsMarkup .= replacePlaceholders(array(
            "{itemName}" => $itemName
        ), $itemTemplate);
    }

    return replacePlaceholders(array(
        "{title}" => $title,
        "{items}" => $itemsMarkup,
        "{fieldName}" => $fieldName,
        "{value}" => $value
    ), $template);

}

// Renderuje panel z informacjami o produkcie
function render_product_info($product_data, $device="desktop") {

    if (count($product_data) === 0) return;
    $sanitizer = wire("sanitizer");

    if ($device === "desktop") {
        echo "<div class=\"company-product col-md-6 col-xl-4 col-sm-12 mb-3 overflow-hidden position-relative\">";
        echo "<div class=\"company-product-info bg-white mb-5 mb-lg-0 shadow\">";
        echo "<div class=\"company-product-info-images hover-flip-img hover-item\">";

        $image_counter = 1;

        foreach ($product_data["product_images"] as $product_image) {
            if ($image_counter === 1) echo "<figure class=\"img-front z-index-0\" style=\"background-image: url('$product_image->url');\"></figure>";
            if ($image_counter === 2) echo "<figure class=\"z-index-0\" style=\"background-image: url('$product_image->url');\"></figure>";
            $image_counter++;
        }

        echo "</div>";

        echo "<div class=\"company-product-info-details bg-white position-absolute text-center z-index-9\">";
        echo "<h5 class=\"font-weight-700 mt-2\"><a href=\"" . $product_data["product_url"]  . "\" class=\"text-dark-gray\">" . $product_data["product_name"] . "</a></h5>";

        echo "<p>" . $sanitizer->text(get_excerpt($product_data["product_description"], 145)) . "</p>";
        echo "<h6 class=\"font-weight-400 font-italic mb-2\"><span class=\"text-carrot\">" . $product_data["product_price"] . " PLN<br></span>
                                        <a href=\"" . $product_data["product_url"] . "\" class=\"mx-auto mt-4 d-inline-block btn btn-round btn-indigo ml-2\">Zobacz więcej</a>
                                       </h6>";

        echo "</div><div class=\"header-shadow-wrapper\"></div></div></div>";
    }

    if ($device === "phone") {

        echo "<div class=\"company-product-phone col-md-6 col-xl-4 col-sm-12 mb-3 overflow-hidden position-relative\">";
        echo "<div class=\"company-product-info bg-white mb-5 mb-lg-0 shadow\">";
        echo "<div class=\"company-product-info-images hover-flip-img hover-item\">";

        $image_counter = 1;

        foreach ($product_data["product_images"] as $product_image) {
            if ($image_counter === 1) echo "<figure class=\"img-front z-index-0\" style=\"background-image: url('$product_image->url');\"></figure>";
            if ($image_counter === 2) echo "<figure class=\"z-index-0\" style=\"background-image: url('$product_image->url');\"></figure>";
            $image_counter++;
        }

        echo "</div>";

        echo "<div class=\"company-product-info-details bg-white p-2 position-absolute text-left z-index-9\">"; // 3
        echo "<h5 class=\"font-weight-700 mt-2\"><a href=\"#\" class=\"text-dark-gray\">" . $product_data["product_name"] . "</a></h5>";
        echo "<p>" . $sanitizer->text(get_excerpt($product_data["product_description"], 150)) . "</p>";

        echo "<h6 class=\"font-weight-400 font-italic mb-2\"><span class=\"text-carrot\">" . $product_data["product_price"] ." PLN</span>
                                <a href=\"" . $product_data["product_url"] .  "\" class=\"mx-auto mt-4 d-block btn btn-round btn-indigo ml-2\">Zobacz więcej</a></h6>";

        echo "<div class=\"header-shadow-wrapper\"></div>";
        echo "</div></div></div>";

    }

}

// Renderuje panel z informacjami o usludze
function render_service_info($service_data, $device="desktop") {

    if (count($service_data) === 0) return;
    $sanitizer = wire("sanitizer");

    if ($device === "desktop") {
        echo "<div class=\"company-service col-md-6 col-xl-4 col-sm-12 mb-3 overflow-hidden position-relative\">";
        echo "<div class=\"company-service-info bg-white mb-5 mb-lg-0 shadow\">";
        echo "<div class=\"company-service-info-images\">";

        echo "<figure class=\"img-front z-index-0\" style=\"background-image: url('" . $service_data["service_image"]->url . "');\"></figure>";

        echo "</div>";

        echo "<div class=\"company-service-info-details bg-white position-absolute text-center z-index-9\">";
        echo "<h5 class=\"font-weight-700 mt-2\"><a href=\"" . $service_data["service_url"]  . "\" class=\"text-dark-gray\">" . $service_data["service_name"] . "</a></h5>";

        echo "<p>" . $sanitizer->text(get_excerpt($service_data["service_description"], 145)) . "</p>";
        echo "<h6 class=\"font-weight-400 font-italic mb-2\"><span class=\"text-carrot\">" . $service_data["service_price"] . " PLN<br></span>
                                        <a href=\"" . $service_data["service_url"] . "\" class=\"mx-auto mt-4 d-inline-block btn btn-round btn-indigo ml-2\">Zobacz więcej</a>
                                       </h6>";

        echo "</div><div class=\"header-shadow-wrapper\"></div></div></div>";
    }

    if ($device === "phone") {

        echo "<div class=\"company-product-phone col-md-6 col-xl-4 col-sm-12 mb-3 overflow-hidden position-relative\">";
        echo "<div class=\"company-product-info bg-white mb-5 mb-lg-0 shadow\">";
        echo "<div class=\"company-product-info-images hover-flip-img hover-item\">";

            echo "<figure class=\"img-front z-index-0\" style=\"background-image: url('" . $service_data["service_image"]->url . "');\"></figure>";

        echo "</div>";

        echo "<div class=\"company-product-info-details bg-white p-2 position-absolute text-left z-index-9\">";
        echo "<h5 class=\"font-weight-700 mt-2\"><a href=\"#\" class=\"text-dark-gray\">" . $service_data["service_name"] . "</a></h5>";
        echo "<p>" . $sanitizer->text(get_excerpt($service_data["service_description"], 150)) . "</p>";

        echo "<h6 class=\"font-weight-400 font-italic mb-2\"><span class=\"text-carrot\">" . $service_data["service_price"] ." PLN</span>
                                <a href=\"" . $service_data["service_url"] .  "\" class=\"mx-auto mt-4 d-block btn btn-round btn-indigo ml-2\">Zobacz więcej</a></h6>";

        echo "<div class=\"header-shadow-wrapper\"></div>";
        echo "</div></div></div>";

    }

}

// Renderuje element listy firm
function render_company_list_item($company_data) {

    if(count($company_data) === 0) return;

    $urls = wire("urls");
    $pages = wire("pages");
    $message_url = $pages->get("template=message")->url . "?company_id=" . $company_data["company_id"];

    // Czy logo firmy istnieje
    if (!empty($company_data["company_logo_url"])) {
        $logo_url = $company_data["company_logo_url"];
    } else $logo_url = $urls->images . "upload/company-logo.png";

    // Czy www firmy istnieje
    if (!empty($company_data["company_www"])) {
        $company_www_markup = "<div class='send-message-anchor my-2 h6 font-weight-300'><a href='" . $company_data["company_www"] . "'>" . $company_data["company_www"] . "</a></div>";
    } else $company_www_markup = "";

    $company_phone_1 = filter_phone_fax_number($company_data["company_phone_1"]);

    // Czy drugi telefon firmy istnieje
    if (!empty($company_data["company_phone_2"])) {

        $company_phone_2 = filter_phone_fax_number($company_data["company_phone_2"]);
        $second_phone_markup = "<a class='company-phone text-dark font-weight-300 d-block text-nowrap mt-1' title='Telefon kontaktowy' href='tel:" . $company_phone_2 . "'><i class='fas fa-phone-alt mr-2'></i>" . $company_phone_2 . "</a>";
    } else $second_phone_markup = "";

    // Czy fax firmy istnieje
    if (!empty($company_data["company_fax"])) {

        $company_fax = filter_phone_fax_number($company_data["company_fax"]);
        $fax_markup =  "<a class='company-phone text-dark font-weight-300 d-block text-nowrap mt-1' title='Numer FAX' href='fax:" . $company_fax . "'><i class='fas fa-fax mr-2'></i>" . $company_fax . "</a>";
    } else $fax_markup = "";

    // Czy istnieje e-mail
    if (!empty($company_data["company_email"])) {
        $email_markup = "
            <a href='" . $message_url ."' class='d-inline-block d-sm-block text-dark tooltip-btn ml-1' data-toggle='tooltip' data-placement='left' title='Wyślij wiadomość' data-original-title='Wyślij wiadomość'>
                <img width='20' height='22' class='d-inline-block mx-auto' src='" . $urls->images ."email.svg' alt='email-image'>
            </a>
        ";
    } else $email_markup = "";

    // Usun bledy w informacji o firmie
    $filtered_company = filter_company_name($company_data);
    $company_name = $filtered_company["company_name"];
    $company_address = $filtered_company["company_address"];
    $company_city = $filtered_company["company_city"];

    // Renderuj markup
    echo "
        
        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 company-list-item'>
            
            <div class='col-12 col-sm-2 p-xl-4'>
                <img src='" . $logo_url . "' alt='image' class='company-logo d-block mx-auto img-fluid mt-xl-0'>
            </div>
            
            <div class='col-12 col-sm-5 col-xl-6 text-center text-sm-left'>
                <a class='company-name text-dark d-block mt-3 mb-2 font-weight-500' href='" . $company_data["company_url"] ."'><span>" . $company_name ."</span></a>
                <div class='company-street h6 font-weight-300'>" . $company_address ."</div>
                <div class='company-zip-city mb-2 mb-sm-0 h6 font-weight-300'><span class='company-zip'>" . $company_data["company_zip"] ." </span><span class='company-city'>" . $company_city ."</span></div>
                $company_www_markup
            </div>
            
            <div class='col-12 col-sm-4 col-xl-3 text-center text-sm-left'>
                    <a class='company-phone text-dark font-weight-300 d-block text-nowrap mt-3' title='Telefon kontaktowy' href='tel:" . $company_phone_1 . "'><i class='fas fa-phone-alt mr-2'></i>" . $company_phone_1 . "</a>
                    $second_phone_markup
                    $fax_markup
            </div>
            
                <div class='d-flex justify-content-center d-sm-block justify-content-end col-12 col-sm-1 px-0 p-xl-3 mt-2 mt-sm-3 mt-xl-0'>
                    <a href='#' class='d-inline-block d-sm-block text-dark tooltip-btn' data-toggle='tooltip' data-placement='right' title='Dodaj do ulubionych' data-original-title='Dodaj do ulubionych'>
                        <img width='25' height='25' class='d-inline-block mx-auto' src='" . $urls->images ."heart.svg' alt='heart-image'>
                    </a>
                    $email_markup
                    
                </div>
                
            </div>
            
    
    ";

}

// Renderuje element listy ofert pracy
function render_job_list_item($job_data) {

    if(count($job_data) === 0) return;
    $urls = wire("urls");

    $company_logo = $job_data["job_company"]->company_logo;
    if (!isset($company_logo)) $company_logo_url = $urls->images . "upload/company-logo.png";
    else $company_logo_url = $company_logo->url;

    echo "
        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 job-list-item'>

            <div class='col-12 col-sm-2 p-xl-4'>
                <img src='" . $company_logo_url . "' alt='image' class='company-logo d-block mx-auto img-fluid mt-xl-0'>
            </div>
            
            <div class='col-12 col-sm-5 col-xl-6 pt-sm-1 text-center text-lg-left'>
                <a class='job-name text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'  href='" . $job_data["job_url"] . "'><span>" . $job_data["job_name"] . "</span></a>
                <div class='job-description font-weight-300 text-sm-left'>" . get_excerpt($job_data["job_description"], 135). "</div>
            </div>
            
            <div class='mt-3 mt-sm-0 col-12 col-sm-4 col-xl-3 text-left'>
            
                <div class='no-gutters row'>
                    <div class='col-2 col-lg-2 col-sm-2 d-flex flex-column justify-content-center info-element-icon'>
                        <img class='d-block h-50 mx-auto w-100' src='" . $urls->images . "pin.svg' alt='area'>
                    </div>
                    <div class='col-10 col-sm-10 d-flex flex-column justify-content-center'>
                        <div class='info-element-contents p-2'>
                            <span class='job-city pl-2 d-block font-weight-400'>" . $job_data["job_city"] . "</span>
                        </div>
                    </div>
                </div>
                <div class='no-gutters row'>
                    <div class='col-2 col-lg-2 col-sm-2 d-flex flex-column justify-content-center info-element-icon'>
                        <img class='d-block h-50 mx-auto w-100' src='" . $urls->images . "clock.svg' alt='expire'>
                    </div>
                    <div class='col-10 col-sm-10 d-flex flex-column justify-content-center'>
                        <div class='info-element-contents p-2'>
                            <span class='job-expire pl-2 d-block font-weight-400'>" . $job_data["job_expire"] . "</span>
                        </div>
                    </div>
                </div>
                <div class='no-gutters row'>
                    <div class='col-2 col-lg-2 col-sm-2 d-flex flex-column justify-content-center info-element-icon'>
                        <img class='d-block h-50 mx-auto w-100' src='" . $urls->images . "businessman.svg' alt='expire'>
                    </div>
                    <div class='col-10 col-sm-10 d-flex flex-column justify-content-center'>
                        <div class='info-element-contents p-2'>
                            <span class='job-type pl-2 d-block font-weight-400'>" . $job_data["job_type"] . "</span>
                        </div>
                    </div>
                </div>
            
            
            </div>
            <div class='col-12 col-sm-1 p-xl-3'>
                <a href='#' class='text-dark tooltip-btn p-1 mr-n1' data-toggle='tooltip'
                   data-placement='right' title='Dodaj do ulubionych'>
                    <img class='d-block d-inline-block mx-auto' src='" . $urls->images . "heart.svg' alt='heart-image'>
                </a>
            
            </div>
        
        </div>";

}

// Renderuje element listy produktow
function render_product_list_item($product_data) {

    if(count($product_data) === 0) return;
    $urls = wire("urls");

    // Pierwszy obraz produktu
    $product_image_url = $product_data["product_images"]->first()->url;

    // Renderuj markup
    echo "
    
        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
            <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                <img src='" . $product_image_url . "' alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
            </div>
        
            <div class='col-12 col-sm-5 col-xl-6 pt-sm-0 text-center text-lg-left'>
                <a class='product-name text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left' href='" . $product_data["product_url"] . "'><span>" . $product_data["product_name"] . "</span></a>
                <div class='product-description font-weight-300 text-sm-left'>
                    <p>" . get_excerpt($product_data["product_description"], 120) . "</p>
                </div>
            </div>
        
            <div class='mt-1 mt-sm-0 col-12 col-sm-3 text-center font-weight-600 text-sm-left'>
                <span class='product-price badge badge-pill badge-danger d-inline-block'>" . $product_data["product_price"] . " PLN</span>
            </div>
        
            <div class='col-12 col-sm-1 mt-2 mt-sm-0 text-center text-sm-left'>
                <a href='#' class='text-dark tooltip-btn' data-toggle='tooltip' data-placement='right' title='' data-original-title='Dodaj do ulubionych'>
                    <img class='list-heart mx-auto mx-sm-0 position-relative d-inline-block' src='" . $urls->images . "heart.svg' alt='heart-image'>
                </a>
            </div>
        
        </div>
    ";
}

// Renderuje element listy uslug
function render_service_list_item($service_data) {

    if(count($service_data) === 0) return;

    // Obraz uslugi
    $service_image_url = $service_data["service_image"]->url;

    echo " 
        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>

            <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                <img src='" . "$service_image_url" . "' alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
            </div>
            
            <div class='col-12 col-sm-5 col-xl-6 pt-sm-0 text-center text-lg-left'>
                <a class='product-name text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'  href='" . $service_data["service_url"] . "'><span>" . $service_data["service_name"] . "</span></a>
                <div class='product-description font-weight-300 text-sm-left'>" . get_excerpt($service_data["service_description"], 120) . "</div>
            </div>
            
            <div class='mt-1 mt-sm-0 col-12 col-sm-3 text-center font-weight-600 text-sm-left'>
                <span class='product-price badge badge-pill badge-danger d-inline-block'>" . $service_data["service_price"] . " PLN</span>
            </div>
            
        </div>
        ";
}

// Zamienia placeholdera w markupe
function replacePlaceholders($placeholderMap, $markup) {

    if (!$placeholderMap) throw new WireException("replacePlaceholders: Placeholder map has not been provided.");


    foreach ($placeholderMap as $placeholder => $value) {
        $markup = str_replace($placeholder, $value, $markup);
    }
    return $markup;

}

// Zwraca markup paginacji
function get_pagination($page_array) {

    if (!$page_array) return "";

    return $page_array->renderPager(array(
        'nextItemLabel' => "<span aria-hidden='true'>»</span><span class='sr-only'>Następna</span>",
        'previousItemLabel' => "<span aria-hidden='true'>«</span><span class='sr-only'>Poprzednia</span>",
        'listMarkup' => "<ul class='pagination pagination-round justify-content-center'>{out}</ul>",
        'itemMarkup' => "<li class='page-item'>{out}</li>",
        'linkMarkup' => "<a class='page-link' href='{url}'>{out}</a>",
        'currentLinkMarkup' => "<li class='page-item active'><a class='page-link' href='#'>{out}<span class='sr-only'>(current)</span></a></li>",
        'numPageLinks' => 5,
        'arrayToCSV' => false
    ));

}

// Info tekst dla formularzy
function render_info_message($msg, $classList="col-12 mb-3 ") {

    $template = '<div class="{classList}">
                <div class="form-info-message">
                    <span class="d-inline-block page-info-msg-contents"><i class="fas fa-info text-primary mr-2"></i>{msg}</span>
                </div>
                
                </div>
                
                <div class="d-none d-lg-flex col-lg-4 col-xl-3 align-self-center"></div>
                
                ';

    return replacePlaceholders(array("{msg}" => $msg, "{classList}" => $classList), $template);

}

// Modal
function render_modal($id = "modal", $title="Modal", $contents = "", $size="md") {
    $template = '
    
    <div class="modal fade" id="{id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-{size} modal-dialog-centered" role="document">
            <div class="modal-content rounded-xl">
                <div class="modal-body p-0">
    
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
    
                    <div class="row no-gutters">
    
                        <div class="col-lg-12">
                            <div class="px-4 px-md-5 px-lg-4 px-xl-5 py-5">
                                <div class="px-3 px-xl-5 py-4 py-xl-5">
    
                                    <div class="pb-1"></div>
    
                                    <h3 class="section-title-4 text-center font-weight-800 pb-3 mb-4">
                                        {title}
                                        <div class="title-divider-round"></div>
                                    </h3>
                                    
                                    {contents}
    
    
                                </div>
                            </div>
                        </div>
    
                    </div>
    
                </div>
            </div>
    </div>
    </div>';

    return replacePlaceholders(array(
        "{id}" => $id,
        "{title}" => $title,
        "{contents}" => $contents,
        "{size}" => $size,
    ), $template);

}

function render_confirmation_modal() {
    $modalContents = '

    <h5 class="text-center">Czy jesteś pewien, że chcesz usunąć wybraną pozycję ?</h5>
    <div class="row mt-5">
        <div class="col"><button type="button" class="confirm-button btn btn-round btn-danger w-100">Usuń</button></div>
        <div class="col"><button data-dismiss="modal" type="button" class="cancel-button btn btn-round btn-success w-100">Anuluj</button></div>    
    </div>
';

    return render_modal("confirmation", "Potwierdzenie", $modalContents);
}

// Alert
function render_alert($message, $type="success", $close=true) {

    $closeMarkup = $close ? '<button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>' : '';

    $template = '<div class="alert alert-{type} alert-dismissible fade show" role="alert">
                    <p class="mb-0 font-weight-600">{message}</p>'
                 . $closeMarkup .
                '</div>';

    return replacePlaceholders(array(
        "{type}" => $type,
        "{message}" => $message
    ), $template);
}


/******************
 *   PANEL FIRMY
 * ***************/

function render_dashboard_advertiser_list_item($register_date, $first_name, $last_name) {

    $template = '
    
    <div class="row bg-white rounded-lg shadow-sm mb-3 mb-md-2 dashboard-advertiser-list-item">

        <div class="text-center text-md-left col-12 col-sm-5 col-xl-4 p-xl-4">
           {advertiser_register_date}
        </div>

        <div class="col-12 col-sm-4 col-lg-5 col-xl-7 pt-sm-1 p-xl-4 text-center text-lg-left">
            <div class="text-dark d-block mt-3 mt-sm-0 font-weight-500 text-sm-left" href="/kbf2/firmy/odra-3-spolka-z-o.o/oferty-pracy/magazynier-sprzedawca/">
                <span>{advertiser_first_name} {advertiser_last_name}</span>
            </div>
        </div>

        <div class="text-center text-md-left col-12 col-sm-2 col-lg-1 p-xl-2 mt-3 mt-sm-0">
            <a href="#" class="p-1 mr-n1" title="edytuj">Edytuj</a>
            <a href="#" class="p-1 mr-n1" title="usun">Usuń</a>
        </div>

    </div>';


    return replacePlaceholders(array(
        "{advertiser_register_date}" => $register_date,
        "{advertiser_first_name}" => $first_name,
        "{advertiser_last_name}" => $last_name
    ), $template);

}

function render_dashboard_job_list_item($job_name, $job_type, $job_expire, $job_id) {

    $pages = wire('pages');
    $editURL = $pages->get('template=dashboard-edit-job')->url . '?id=' . $job_id;

    $template = '
    
    <div class="row p-4 p-sm-0 pb-sm-1 bg-white rounded-lg shadow-sm mb-3 mb-md-2 dashboard-advertiser-list-item">

        <div class="text-center text-md-left font-weight-700 col-12 col-sm-4 col-lg-5 col-xl-4 pt-sm-1 p-xl-4">
           {job_name}
        </div>

        <div class="col-12 col-sm-3 col-lg-2 col-xl-3 pt-sm-1 p-xl-4 text-center text-lg-left">
            <div class="text-dark d-block mt-3 mt-sm-0  text-sm-left">
                <span>{job_type}</span>
            </div>
        </div>
        
        <div class="col-12 col-sm-3 col-lg-3 col-xl-3 pt-sm-1 p-xl-4 text-center text-lg-left">
            <div class="text-dark d-block mt-3 mt-sm-0 text-sm-left">
                <span class="d-sm-none">Data ważności : &nbsp;</span>
                <span>{job_expire}</span>
            </div>
        </div>

        <div class="text-center text-md-left col-12 col-sm-2 col-lg-1 p-xl-2 mt-3 mt-sm-0">
            <a href="' . $editURL . '" class="p-1 mr-n1" title="edytuj">Edytuj</a>
            <a data-id="{job_id}" data-toggle="modal" href="#confirmation" class="p-1 mr-n1" title="usun">Usuń</a>
        </div>

    </div>';

    return replacePlaceholders(array(
        "{job_id}" => $job_id,
        "{job_name}" => $job_name,
        "{job_type}" => $job_type,
        "{job_expire}" => $job_expire
    ), $template);

}

function render_dashboard_product_list_item($product_data) {

    if(count($product_data) === 0) return;
    $urls = wire("urls");

    // Pierwszy obraz produktu
    $product_image_url = $product_data["product_images"]->first()->url;

    // Renderuj markup
    echo "
    
        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
            <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                <img src='" . $product_image_url . "' alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
            </div>
        
            <div class='col-12 col-sm-4 col-xl-5 pt-sm-0 text-center text-lg-left'>
                <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'<span>" . $product_data["product_name"] . "</span></p>
            </div>
        
            <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                <span class='product-price badge badge-pill badge-danger d-inline-block'>" . $product_data["product_price"] . " PLN</span>
            </div>
        
            <div class='col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-left'>
                 <a class='mr-n1' title='usun'>Usuń z listy</a>
            </div>
        
        </div>
    ";

}

function render_dashboard_product_sold_list_item($product_data) {

    if(count($product_data) === 0) return;
    $urls = wire("urls");

    // Pierwszy obraz produktu
    $product_image_url = $product_data["product_images"]->first()->url;

    // Renderuj markup
    echo "
    
        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
            <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                <img src='" . $product_image_url . "' alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
            </div>
        
            <div class='col-12 col-sm-4 col-xl-5 pt-sm-0 text-center text-lg-left'>
                <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'<span>" . $product_data["product_name"] . "</span></p>
                <p class='text-center text-sm-left'>Sprzedane: 23</p>
            </div>
        
            <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                <span class='product-price badge badge-pill badge-danger d-inline-block'>" . $product_data["product_price"] . " PLN</span>
            </div>
        
            <div class='col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-left'>
                 <a href=''#' class='mr-n1' title='usun'>Usuń z listy</a>
            </div>
        
        </div>
    ";

}

function render_dashboard_product_inventory_list_item($product_data) {

    if(count($product_data) === 0) return;
    $urls = wire("urls");

    // Pierwszy obraz produktu
    $product_image_url = $product_data["product_images"]->first()->url;

    // Renderuj markup
    echo "
    
        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 product-list-item'>
            <div class='col-12 col-sm-3 col-xl-2 pt-xl-0 pl-xl-2 pr-xl-2 pb-xl-2'>
                <img src='" . $product_image_url . "' alt='image' class='product-image d-block mx-auto img-fluid mt-xl-0 img-thumbnail'>
            </div>
        
            <div class='col-12 col-sm-4 col-xl-5 pt-sm-0 text-center text-lg-left'>
                <p class='text-dark d-block mt-3 mt-sm-0 mb-2 font-weight-500 text-sm-left'<span>" . $product_data["product_name"] . "</span></p>
                <p class='text-center text-sm-left'>Dostępne: 42</p>
            </div>
        
            <div class='mt-1 mt-sm-0 col-12 col-sm-2 text-center font-weight-600 text-sm-left'>
                <span class='product-price badge badge-pill badge-danger d-inline-block'>" . $product_data["product_price"] . " PLN</span>
            </div>
        
            <div class='col-12 col-sm-3 mt-2 mt-sm-0 text-center text-sm-left'>
                 <a href=''#' class='mr-n1' title='usun'>Usuń</a><br>
                 <a href=''#' class='mr-n1' title='edytuj'>Edytuj</a>
            </div>
        
        </div>
    ";

}

// Sprawdza czy przekierowac na login
function check_redirect($user) {
    $session = wire('session');
    $pages = wire('pages');
    if (!$user->isLoggedIn()) $session->redirect($pages->get('template=login')->url);
}

// Pobiera strone firmy zalogowanego uzytkownika
function get_user_company($user) {

    $pages = wire('pages');

    if ($user->get('company_id')) {
        return $pages->get($user->get('company_id'));
    }
}

function get_products_count($company_page) {

    if (!isset($company_page)) return;

    $sanitizer = wire('sanitizer');

    $products = $company_page->get('title=Produkty')->find('template=product');
    $product_count = 0;

    foreach ($products as $product) {
        $product_count += $sanitizer->int($product->product_inventory);
    }

    return $product_count;

}

function get_services_count($company_page) {
    if (!isset($company_page)) return;
    return $company_page->get('title=Usługi')->numChildren;
}

function get_jobs_count($company_page) {
    if (!isset($company_page)) return;
    return $company_page->get('title=Oferty Pracy')->numChildren;
}

/****************
 *   SANITIZER
 * *************/

// Pobiera podstawowe informacje o firmie
function sanitize_company_data($company_page) {

    if (!isset($company_page)) return array();
    $sanitizer = wire("sanitizer");

    // Dodaj logo url jezeli logo istnieje
    $company_logo = $company_page->company_logo;
    if (isset($company_logo)) {
        $company_logo_url = $company_logo->url;
    }

    $company_data = array(
        "company_id" => $sanitizer->int($company_page->company_id),
        "company_url" => $company_page->url,
        "company_name" => $sanitizer->text($company_page->company_name),
        "company_logo_url" => !empty($company_logo_url) ? $company_logo_url : "",
        "company_address" => $sanitizer->text($company_page->company_address),
        "company_email" => $sanitizer->email($company_page->company_email),
        "company_zip" => $sanitizer->text($company_page->company_zip),
        "company_phone_1" => $sanitizer->text($company_page->company_phone_1),
        "company_phone_2" => $sanitizer->text($company_page->company_phone_2),
        "company_fax" => $sanitizer->text($company_page->company_fax),
        "company_city" => $sanitizer->text($company_page->company_city),
        "company_regon" => $sanitizer->text($company_page->company_regon),
        "company_www" => $sanitizer->text($company_page->company_www),
        "company_description_html" => $company_page->company_description_html,
        "company_keywords" => $sanitizer->text($company_page->company_keywords),
        "industry" => $sanitizer->text($company_page->industry),
        "sub_industry" => $sanitizer->text($company_page->sub_industry),
        "lat" => $sanitizer->text($company_page->lat),
        "lon" => $sanitizer->text($company_page->lon)
    );

    return $company_data;
}

// Pobiera informacje o ofercie pracy
function sanitize_job_data($job_page) {

    if (!isset($job_page)) return array();
    $sanitizer = wire("sanitizer");

    $current_job_company = $job_page->parent("template=company"); // Firma dla danej oferty pracy

    $job_data = array(
        "job_url" => $job_page->url,
        "job_id" => $job_page->id,
        "job_name" => $sanitizer->text($job_page->job_name),
        "job_expire" => $sanitizer->date($job_page->job_expire, "Y-m-d"),
        "job_city" => $sanitizer->text($job_page->job_city),
        "job_province_name" => $sanitizer->text($job_page->job_province_name),
        "job_type" => $sanitizer->text($job_page->job_type),
        "job_description" => $job_page->job_description,
        "job_start_date" => $sanitizer->date($job_page->job_start_date, "Y-m-d"),
        "job_responsibilities" => $job_page->job_responsibilities,
        "job_requirements" => $job_page->job_requirements,
        "job_offers" => $job_page->job_offers,
        "job_company" => $current_job_company,
        "siblings" => $job_page->siblings(false)
    );

    return $job_data;
}

// Pobiera informacje o produkcie
function sanitize_product_data($product_page) {

    if (!isset($product_page)) return array();
    $sanitizer = wire("sanitizer");

    $product_data = array(
        "product_url" => $product_page->url,
        "product_name" => $sanitizer->text($product_page->product_name),
        "product_images" => $product_page->product_images,
        "product_description" => $product_page->product_description,
        "product_price" => $sanitizer->float($product_page->product_price),
        "product_inventory" => $sanitizer->int($product_page->product_inventory),
        "product_blocked" => $product_page->product_blocked,
        "product_shipping_cost" => $sanitizer->float($product_page->product_shipping_cost),
        "siblings" => $product_page->siblings(false)
    );

    return $product_data;

}

// Pobiera informacje o produkcie
function sanitize_service_data($service_page) {

    if (!isset($service_page)) return array();
    $sanitizer = wire("sanitizer");

    $service_data = array(
        "service_url" => $service_page->url,
        "service_name" => $sanitizer->text($service_page->service_name),
        "service_image" => $service_page->service_image,
        "service_description" => $service_page->service_description,
        "service_price" => $sanitizer->float($service_page->service_price),
        "siblings" => $service_page->siblings(false)
    );

    return $service_data;

}

/****************
 *   HELPERS
 * *************/

// Tworzy skrot opisu
function get_excerpt($content, $length) {
    if (strlen($content) < $length) return $content;
    return substr($content, 0, $length - 4) . " ...";
}

// Pobiera wspolrzedne geograficzne z serwisu nominatim
function get_lat_lon($street, $city, $zip = "")
{
    $base_url = "https://nominatim.openstreetmap.org/?addressdetails=1&";
    $request_url = $base_url . "q=" . urlencode($street . " " . $zip . " " . $city) .
        "&format=json&limit=1&email=pawel.kwiecien@webplanet.biz&lat=53.1227812&lon=18.032730928221874";

    $json = file_get_contents($request_url);
    $json_decoded = json_decode($json, true);

    $lat = "";
    $lon = "";

    if (isset($json_decoded[0]["lat"])) $lat = $json_decoded[0]["lat"];
    if (isset($json_decoded[0]["lon"])) $lon = $json_decoded[0]["lon"];

    return array($lat, $lon);
}

// Pobiera liste adresow
function get_addresses($query)
{


    $request_url = "https://nominatim.openstreetmap.org/search?q=" . $query . "&addressdetails=1&format=json&polygon=0&email=pawel.kwiecien@webplanet.biz";

    $json = file_get_contents($request_url);

    $json_decoded = json_decode($json, true);

    return $json_decoded;
}

// Zwraca query string na podstawie tablicy sub branz
function get_sub_industries_query($sub_industries) {

    $query = "";
    if (empty($sub_industries)) return $query;

    if (count($sub_industries) === 1) $query = $query . "sub_industry" . urlencode("[]") . "=" . $sub_industries[0];
    else {

        $counter = 1;
        foreach ($sub_industries as $sub_industry) {
            $query = $query . (($counter > 1 ) ? "&" : "") . "sub_industry" . urlencode("[]") . "=" . $sub_industry;
            $counter++;
        }
    }

    return $query;
}

// Zwraca query dla filtra
function get_filter_selector($input, $template_name) {

    if (!isset($input) || !isset($template_name)) return;
    $database = wire("database");
    $db = wire("db");
    $sanitizer = wire("sanitizer");

    $query = "template=$template_name, limit=10";

// Ustaw dane z get
    if (count($input->get()) > 0) {

        // Branza i sub branza
        if ($input->industry) {
            $industry = $input->industry;
            $input->whitelist("industry", $industry);

        }

        if ($input->sub_industry) {
            $sub_industry = $input->sub_industry;
            $input->whitelist("sub_industry", $sub_industry);
        }

        if ($input->keywords) {
            $keywords = $input->keywords;
            $input->whitelist("keywords", $keywords);

        }

        // Lokalizacja
        if ($input->province_name && $input->province_name !== "Wszystkie") {
            $province_name = $input->province_name;
            $input->whitelist("province_name", $province_name);
        }

        if ($input->area_name && $input->area_name !== "Wszystkie") {
            $area_name = $input->area_name;
            $input->whitelist("area_name", $area_name);
        }
    }

        // Przygotuj zapytanie
        if (isset($industry) && !isset($sub_industry)) {

            $sub_industry = get_sub_industries(mb_strtoupper($industry, "utf-8"), $database, $db);
            $industry = $sanitizer->selectorValue($industry);
            $query = $query . ",industry=$industry";

        }

        if (!isset($industry) && isset($sub_industry)) {

            if (is_string($sub_industry)) $sub_industry = explode(",", $sub_industry);
            $sub_industry_count = count($sub_industry);

            $industries_selector = "";

            if ($sub_industry_count === 1) {
                $sub_industry_name_sanitized = $sanitizer->selectorValue($sub_industry[0]);
                $query = $query . ",sub_industry=$sub_industry_name_sanitized";
            }

            if ($sub_industry_count > 1) {

                $counter = 1;

                foreach ($sub_industry as $sub_industry_name) {
                    $sub_industry_name_sanitized = $sanitizer->selectorValue($sub_industry_name);
                    if ($counter < $sub_industry_count) $industries_selector = $industries_selector . "$sub_industry_name_sanitized|";
                    if ($counter === $sub_industry_count) $industries_selector = $industries_selector . $sub_industry_name_sanitized;
                    $counter++;
                }

                $query = $query . ",sub_industry=$industries_selector";
            }

        }

    if (isset($province_name)) {
        $province_name = $sanitizer->selectorValue($province_name);
        $query = $query . ",province_name=$province_name";
    }

    if (isset($area_name)) {
        $area_name = $sanitizer->selectorValue($area_name);
        $query = $query . ",area_name=$area_name";
    }

    if (isset($keywords)) {
        $keywords = $sanitizer->selectorValue($keywords);
        $query = $query . ",company_keywords|company_address|company_city|company_name|company_nip|company_regon|province_name|area_name|company_description_html~=$keywords";
    }

    return $query;

}

// Konwertuje nazwe firmy, usuwa bledy w nazewnictwie
function filter_company_name($company_data) {

    if (!isset($company_data)) return array();

    // Przygotuj nazwe firmy
    $company_name = mb_strtolower($company_data["company_name"], "utf-8");
    $company_name = mb_convert_case($company_name, MB_CASE_TITLE, "utf-8");
    $company_name = preg_replace('/\sz\s/i', ' z ', $company_name);
    $company_name = preg_replace('/\sw\s/i', ' w ', $company_name);
    $company_name = preg_replace('/\si\s/i', ' i ', $company_name);
    $company_name = preg_replace('/\s"/i', '', $company_name);
    $company_name = preg_replace('/"\s|$/i', '', $company_name);
    $company_name = preg_replace('/&amp;/i', '', $company_name);

    // Popraw rodzaje spolek
    $company_name = preg_replace('/z\so\.?\s?o\.?/i', ' z o.o.', $company_name);
    $company_name = preg_replace('/\ss[p]*\s*\.?\s*z\so\s*\.?\s*o\.?/i', ' Sp. z o.o.', $company_name);
    $company_name = preg_replace('/\ss[p]*\.?\s*j\.?/i', ' Sp. J.', $company_name);
    $company_name = preg_replace('/\ss[p]*\.?\s*c\.?/i', ' Sp. C.', $company_name);

    // Przygotuj adres
    $company_address = mb_strtolower($company_data["company_address"], "utf-8");
    $company_address = mb_convert_case($company_address, MB_CASE_TITLE, "utf-8");
    $company_city = mb_strtolower($company_data["company_city"], "utf-8");
    $company_city = mb_convert_case($company_city, MB_CASE_TITLE, "utf-8");

    return array(
        "company_name" => $company_name,
        "company_address" => $company_address,
        "company_city" => $company_city
    );
}

// Usuwa zera na poczatku numeru telefonu i faksu
function filter_phone_fax_number($number) {

    if (!isset($number)) return "";

    $first_char =  substr($number, 0, 1);
    if ($first_char === "0") {

        if (substr($number, 1, 1) === "-") return substr($number, 2);
        else return substr($number, 1);
    }
    else return $number;

}

// Pobiera dane z rejestru regon
function get_data_by_regon($regon) {

    if(empty($regon)) return false;

    // Sprawdz czy zarejestrowano firme o podanym numerze REGON
    $pages = wire('pages');
    $sanitizer = wire('sanitizer');

    $company = $pages->get("company_regon=" . $sanitizer->selectorValue($regon));
    if ($company->id) {
        return array(
            "error" => "Regon exists",
            "id" => $company->id
        );
    }

    $gus = new GusApi('abcde12345abcde12345', 'dev');

    $company_name = "";

    try {

        $gus->login();

        $gusReports = $gus->getByRegon($regon);

        foreach ($gusReports as $gusReport) {

            $company_name = $gusReport->getName();
            $company_address = str_replace("ul. ", "", $gusReport->getStreet()) ." ". $gusReport->getPropertyNumber();
            $company_address = str_replace("_", "", $company_address);
            $company_nip = $gusReport->getNip();
            $company_zip = $gusReport->getZipCode();
            $company_city = $gusReport->getPostCity();

            $company_name = mb_strtoupper($company_name, "UTF-8");
            $company_address = mb_strtoupper($company_address, "UTF-8");
            $company_city = mb_strtoupper($company_city, "UTF-8");

        }

        $latLon = get_lat_lon($company_address, $company_zip);

        return array(
            "company_name" => $company_name,
            "company_address" => $company_address,
            "company_nip" => $company_nip,
            "company_zip" => $company_zip,
            "company_city" => $company_city,
            "lat" => $latLon[0],
            "lon" => $latLon[1]
        );

    } catch (InvalidUserKeyException $e) {
        return array("error" => "Bad user key");
    } catch (NotFoundException $e) {
        return array("error" => "No data found");
    }

}

/****************
 *  FORMULARZE
 * *************/

function getFormField($fieldName = "", $required = false, $disabled = false) {

    if (empty($fieldName)) return;

    switch ($fieldName) {

        // FIRMA
        case "company_name":
        {
            $field = new FormFieldText($disabled);
            $field->label = "Nazwa firmy";
            $field->name = $fieldName;
            $field->description = "Nazwa firmy pobrana z rejestru";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Pole z numerem REGON nie może być puste.";
            }

            $field->icon = "fa-info";
            return $field;
        }

        case "company_logo":
        {
            $field = new FormFieldImage();
            $field->name = $fieldName;

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Obraz musi zostać dodany.";
            }

            return $field;
        }

        case "company_address":
        {
            $field = new FormFieldAutocomplete($disabled);
            $field->label = "Adres firmy";
            $field->name = $fieldName;
            $field->description = "Adres firmy pobrany z rejestru";
            $field->msgRequired = "Wypełnienie pola z nazwą miasta jest wymagane.";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Pole z adresem firmy musi zostać wypełnione.";
            }

            $field->icon = "fa-map-marker";
            return $field;
        }

        case "company_city":
        {
            $field = new FormFieldText($disabled);
            $field->label = "Miasto";
            $field->name = $fieldName;
            $field->description = "Miasto pobrane z rejestru";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Pole z nazwą miasta nie może być puste.";
            }

            $field->icon = "fa-map-marker";
            return $field;
        }

        case "company_zip":
        {
            $field = new FormFieldText($disabled);
            $field->label = "Kod pocztowy";
            $field->name = $fieldName;
            $field->description = "Kod pocztowy pobrany z rejestru";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Pole z kodem pocztowym nie może być puste.";
            }

            $field->icon = "fa-map-marker";
            return $field;
        }

        case "company_regon_search":
            {
                $field = new FormFieldRegonSearch($disabled);
                $field->label = "Numer REGON";
                $field->name = $fieldName;
                $field->description = "Wpisz numer REGON firmy w celu pobrania informacji o firmie z rejestru państwowego.";

                if ($required) {
                    $field->required = true;
                    $field->msgRequired = "Pole z numerem REGON musi zostać wypełnione.";
                }

                $field->inputmask = "\d{7,9}";
                $field->icon = "fa-info";
                return $field;
            }

        case "company_regon":
            {
                $field = new FormFieldText($disabled);
                $field->label = "Numer REGON";
                $field->name = $fieldName;
                $field->description = "Zarejestrowany numer REGON.";

                if ($required) {
                    $field->required = true;
                    $field->msgRequired = "Pole z numerem REGON musi zostać wypełnione.";
                }

                $field->inputmask = "\d{7,9}";
                $field->icon = "fa-info";
                return $field;
            }

        case "company_phone_1":
            {
                $field = new FormFieldText($disabled);
                $field->label = "Podstawowy numer telefonu";
                $field->name = $fieldName;
                $field->description = "Wpisz główny numer telefonu do firmy. Wypełnienie pola jest wymagane.";

                if ($required) {
                    $field->required = true;
                    $field->msgRequired = "Wypełnienie pola z numerem telefonu jest wymagane.";
                }

                $field->icon = "fa-phone";
                return $field;
            }

        case "company_phone_2":
            {
                $field = new FormFieldText($disabled);
                $field->label = "Drugi numer telefonu";
                $field->name = $fieldName;
                $field->description = "Wpisz dodatkowy numer telefonu do firmy.";

                if ($required) {
                    $field->required = true;
                    $field->msgRequired = "Wypełnienie pola z numerem telefonu jest wymagane.";
                }

                $field->icon = "fa-phone";
                return $field;
            }

        case "company_fax":
            {
                $field = new FormFieldText($disabled);
                $field->label = "Numer FAX";
                $field->name = $fieldName;
                $field->description = "Wpisz numer FAX do firmy.";

                if ($required) {
                    $field->required = true;
                    $field->msgRequired = "Wypełnienie pola z numerem FAX jest wymagane.";
                }

                $field->icon = "fa-phone";
                return $field;
            }

        case "company_email":
            {
                $field = new FormFieldEmail($disabled);
                $field->label = "Adres e-mail";
                $field->name = $fieldName;
                $field->description = "Wpisz główny adres e-mail do firmy. Wypełnienie pola jest wymagane.";

                if ($required) {
                    $field->required = true;
                    $field->msgRequired = "Wypełnienie pola z adresem e-mail jest wymagane.";
                }

                $field->icon = "fa-envelope";
                return $field;
            }

        case "company_www":
            {
                $field = new FormFieldText($disabled);
                $field->label = "Adres witryny internetowej";
                $field->name = $fieldName;
                $field->description = "Podaj adres firmowej witryny internetowej.";

                if ($required) {
                    $field->required = true;
                    $field->msgRequired = "Wypełnienie pola z adresem witryny internetowej jest wymagane.";
                }

                $field->icon = "fa-info";
                return $field;
            }

        case "company_nip":
        {
            $field = new FormFieldText($disabled);
            $field->label = "Numer NIP";
            $field->name = $fieldName;
            $field->description = "Numer NIP pobrany z rejestru";
            $field->inputmask = "\d{3}-\d{3}-\d{2}-\d{2}";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Pole z numerem NIP nie może być puste.";
            }

            $field->icon = "fa-info";
            return $field;
        }

        case "company_description":
        {
            $field = new FormFieldTextArea($disabled);
            $field->label = "Opis firmy";
            $field->name = 'company_description_html';

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Wypełnienie pola opis firmy jest wymagane.";
            }

            return $field;
        }

        case "company_keywords":
        {
            return new FormFieldKeywords();
        }

        // PRACA

        case "job_name":
        {
            $field = new FormFieldText($disabled);
            $field->label = "Nazwa stanowiska";
            $field->name = $fieldName;
            $field->description = "Podaj nazwę proponowanego stanowiska pracy.";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Nazwa stanowiska pracy nie może być pusta.";
            }

            $field->icon = "fa-info";
            return $field;
        }

        case "job_start_date":
        {
            $field = new FormFieldDatepicker($disabled);
            $field->name = $fieldName;
            $field->label = "Data rozpoczęcia pracy";

            if ($required) {
                $field->required = true;
            }

            $field->icon = "fa-calendar";
            return $field;
        }

        case "job_expire":
        {
            $field = new FormFieldDatepicker($disabled);
            $field->name = $fieldName;
            $field->label = "Data ważności oferty";

            if ($required) {
                $field->required = true;
            }

            $field->icon = "fa-calendar";
            return $field;
        }

        case "job_type":
        {

            $field = new FormFieldDropdown($disabled);
            $field->label = "Rodzaj umowy";
            $field->name = $fieldName;
            $field->description = "Wybierz rodzaj umowy z pracodawcą.";
            $field->options = "Pełny etat,Pół etatu,1/4 etatu,Umowa o dzieło,Umowa zlecenie,Kontrakt";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Oferta pracy wymaga wybrania rodzaju umowy.";
            }

            return $field;
        }

        case "job_city":
        {
            $field = new FormFieldAutocomplete($disabled);
            $field->label = "Miasto";
            $field->name = $fieldName;
            $field->description = "Miasto w którym świadczona będzie praca.";
            $field->msgRequired = "Wypełnienie pola z nazwą miasta jest wymagane.";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Pole z nazwą miasta musi zostać wypełnione.";
            }

            $field->icon = "fa-map-marker";
            return $field;
        }

        case "job_description":
        {
            $field = new FormFieldTextArea($disabled);
            $field->label = "Opis oferty pracy";
            $field->name = $fieldName;

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Wypełnienie pola opis oferty pracy jest wymagane.";
            }

            return $field;
        }

        case "province_name":
        {
            $field = new FormFieldText($disabled);
            $field->label = "Nazwa województwa";
            $field->name = $fieldName;
            $field->description = "Podaj nazwę województwa.";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Nazwa województwa musi zostać wypełniona.";
            }

            $field->icon = "fa-map-marker";
            return $field;
        }

        case "industries":
        {
            return new FormFieldIndustries();
        }

        case "hidden":
        {
            return new FormFieldHidden();
        }

        // UZYTKOWNICY

        case "email":
        {
            $field = new FormFieldEmail($disabled);
            $field->label = "Adres e-mail";
            $field->name = $fieldName;
            $field->description = "Podaj adres e-email.";

            if ($required) {
                $field->required = true;
                $field->msgRequired = "Wypełnienie pola z adresem e-mail jest wymagane.";
            }

            $field->icon = "fa-envelope";
            return $field;
        }

        case "pass": {
            {
                $field = new FormFieldPassword($disabled);
                $field->label = "Hasło";
                $field->name = $fieldName;
                $field->description = "Podaj swoje hasło.";

                if ($required) {
                    $field->required = true;
                    $field->msgRequired = "Wypełnienie pola z hasłem jest wymagane.";
                }

                $field->icon = "fa-lock";
                return $field;
            }


        }

    }


}

/****************
 *  PROCESSWIRE
 * *************/


function update_repeater_values($repeater_data = array()) {

    if (count($repeater_data) === 0) return;

    $page = $repeater_data["page"];
    $repeater_pages = $repeater_data["repeater_pages"];
    $data = $repeater_data["values"];

    $page->of(false);

    // Usun wszystkie repeatery

    if ($repeater_pages->count) {
        foreach ($repeater_pages as $repeater_page) {
            $repeater_page->delete();
            $repeater_page->save();
        }
        $page->save();
    }

    if (!empty($data)) {

        // Dodaj nowe repeatery
        foreach (explode(",", $data) as $_value) {

            $newPage = $repeater_pages->getNew();
            $newPage->set($repeater_data["repeater_field_name"], $_value);
            $newPage->save();

        }
    }

    $page->save();
    $page->of(true);

}

function get_page_for_insert($parent_page, $template, $page_data, $ignore = array()) {

    if (!isset($parent_page)) return;
    if (!isset($template)) return;
    if (!isset($page_data)) return;

    $_page = new Page();
    $_page->of(false);

    $_page->template = $template;
    $_page->parent = $parent_page;

    return $_page;

}

function add_job ($parent_page, $page_data, $template = "job", $ignore = ["name", "title", "job_responsibilities", "job_requirements", "job_offers", "job_description_hidden"]) {

    $_page = get_page_for_insert($parent_page, $template, $page_data, $ignore);

    $_page->name = $page_data["job_name"];
    $_page->title = $page_data["job_name"];

    foreach ($page_data as $page_field => $value) {
        if (!in_array($page_field, $ignore)) {
            $_page->set($page_field, $value);
        }
    }

    $_page->save();
    $_page->of(true);

    return $_page;

}

function delete_page($page_id) {

    if (!isset($page_id)) return;

    $pages = wire('pages');
    $_page = $pages->get($page_id);
    $_page->delete();

}

function update_page($page_id, $page_data = array(), $ignore = array()) {

    $pages = wire('pages');
    $sanitizer = wire('sanitizer');

    $_page = $pages->get($sanitizer->int($page_id));
    $_page->of(false);

    foreach ($page_data as $page_field => $value) {

        if (!in_array($page_field, $ignore))
            $_page->set($page_field, $value);
    }

    $_page->save();
    $_page->of(true);

}

function mailTo($mailData) {

    if (!isset($mailData)) return;

    $mail = new WireMail();
    $mail->subject($mailData["subject"]);
    $mail->to($mailData["to"]);
    $mail->from($mailData["from"]);
    $mail->fromName('KBF');
    $mail->bodyHTML($mailData["bodyHTML"]);
    $mail->attachment($mailData["targetFile"]);

    $c = $mail->send();
    unlink($mailData["targetFile"]);

    return array(
        "status" => "sent",
        "mails" => $c,
        "from" => $mailData["from"],
        "to" => $mailData["to"],
        "bodyHTML" => $mailData['bodyHTML']
    );

}

