<?php namespace ProcessWire;

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

    $industries_result = $db->query($sql); // Wykonaj zapytanie sql

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

    $sub_industries = array(); // Sub brnaze
    if (!isset($industry)) return $sub_industries;

    // Przygotuj zapytanie
    $industry = $database->quote($industry);
    $sql = "SELECT distinct sub_industry from industries where industry = $industry";

    $sub_industries_result = $db->query($sql); // Wykonaj zapytanie sql

    if ($sub_industries_result->num_rows > 0) {
        while ($row = $sub_industries_result->fetch_array()) {

            $sub_industry = mb_strtoupper($row["sub_industry"], "utf-8"); // Konieczne mb_ ..., dane pobierane z bazy trzeba okreslic kodownaie !
            array_push($sub_industries, $sub_industry);
        }
    } else return array();

    return $sub_industries;

}

/****************
 *    MARKUP
 * *************/

// Wyswietla informacje o firmie
function render_company_info($company_data = array()) {

    if (count($company_data) === 0) return;
    $pages = wire("pages");

    // Strona z lista firm
    $company_list_page_url = $pages->get("template=companies")->url;

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
    echo "<span>" . $company_data["company_name"] . "</span>";
    echo "</a>";

    // Wyswietl regon jesli istnieje
    if (!empty($company_data["company_regon"])) echo "<div class=\"company-address mb-2 small\">REGON:" . $company_data["company_regon"] . "</div>";

    echo "<div class=\"company-street\">" . $company_data["company_address"] ."</div>";
    echo "<div class=\"company-zip-city mb-2\">";
    echo "<span class=\"company-zip\">" . $company_data["company_zip"] . " </span>";
    echo "<span class=\"company-city\">" . $company_data["company_city"] . "</span>";
    echo "</div>";

    // Tylko pierwszy telefon
    if (!empty($company_data["company_phone_1"]) && empty($company_data["company_phone_2"]))
        echo "<a class=\"d-block text-dark text-nowrap\" href=\"tel:" . $company_data["company_phone_1"] . "+48601789633\">
        <i class=\"fas fa-phone-alt mr-2\"></i>" . $company_data["company_phone_1"] . "</a>";

    // Obydwa telefony
    if (!empty($company_data["company_phone_1"]) && !empty($company_data["company_phone_2"]))
        echo "<a class=\"d-block text-dark text-nowrap\" href=\"tel:" . $company_data["company_phone_1"] . "\">
               <i class=\"fas fa-phone-alt mr-2\"></i>" . $company_data["company_phone_1"] .
            "<a class=\"d-block text-dark text-nowrap\" href=\"tel:" . $company_data["company_phone_2"] . "\">
                <i class=\"fas fa-phone-alt mr-2\"></i>" . $company_data["company_phone_2"] . "</a>";

    // Wyswietl fax jesli istnieje
    if (!empty($company_data["company_fax"]))
        echo "<a class=\"d-block text-dark text-nowrap\" href=\"fax:" . $company_data["company_fax"] . "\"><i class=\"fas fa-fax mr-2\"></i>" . $company_data["company_fax"] . "</a>";

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

// Wyswietla panel ze skrocona informacja o ofercie pracy
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

// Wyswietla panel z informacjami o produkcie
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

// Wyswietla panel z informacjami o usludze
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

// Wyswietla element listy firm
function render_company_list_item($company_data, $message_url) {

    if(count($company_data) === 0 || !isset($message_url)) return;
    $urls = wire("urls");

    // Czy logo firmy istnieje
    if (!empty($company_data["company_logo_url"])) {
        $logo_url = $company_data["company_logo_url"];
    } else $logo_url = $urls->images . "upload/company-logo.png";

    // Czy www firmy istnieje
    if (!empty($company_data["company_www"])) {
        $company_www_markup = "<div class='my-2 h6 font-weight-300'><a href='" . $company_data["company_www"] . "'>" . $company_data["company_www"] . "</a></div>";
    } else $company_www_markup = "";

    // Czy drugi telefon firmy istnieje
    if (!empty($company_data["company_phone_2"])) {
        $second_phone_markup = "<a class='company-phone text-dark font-weight-300 d-block text-nowrap mt-1' title='Telefon kontaktowy' href='tel:" . $company_data["company_phone_2"] . "'><i class='fas fa-phone-alt mr-2'></i>" . $company_data["company_phone_2"] . "</a>";
    } else $second_phone_markup = "";

    // Czy fax firmy istnieje
    if (!empty($company_data["company_fax"])) {
        $fax_markup =  "<a class='company-phone text-dark font-weight-300 d-block text-nowrap mt-1' title='Numer FAX' href='fax:" . $company_data["company_fax"] . "'><i class='fas fa-fax mr-2'></i>" . $company_data["company_fax"] . "</a>";
    } else $fax_markup = "";

    // Czy istnieje e-mail
    if (!empty($company_data["company_email"])) {
        $email_markup = "
            <a href='" . $message_url ."' class='d-block align-self-start text-dark tooltip-btn ml-1' data-toggle='tooltip' data-placement='right' title='' data-original-title='Wyślij wiadomość'>
                <img width='22' height='24' class='d-inline-block mx-auto' src='" . $urls->images ."email.svg' alt='email-image'>
            </a>
        ";
    } else $email_markup = "";

    // Renderuj markup
    echo "
        
        <div class='row bg-white rounded-lg shadow-sm p-4 mb-4 company-list-item'>
            
            <div class='col-12 col-sm-2 p-xl-4'>
                <img src='" . $logo_url . "' alt='image' class='company-logo d-block mx-auto img-fluid mt-xl-0'>
            </div>
            
            <div class='col-12 col-sm-5 col-xl-6 text-center text-sm-left'>
                <a class='company-name text-dark d-block mt-3 mb-2 font-weight-500' href='" . $company_data["company_url"] ."'><span>" . $company_data["company_name"] ."</span></a>
                <div class='company-street h6 font-weight-300'>" . $company_data["company_address"] ."</div>
                <div class='company-zip-city mb-2 mb-sm-0 h6 font-weight-300'><span class='company-zip'>" . $company_data["company_zip"] ." </span><span class='company-city'>" . $company_data["company_city"] ."</span></div>
                $company_www_markup
            </div>
            
            <div class='col-12 col-sm-4 col-xl-3 text-center text-sm-left'>
                    <a class='company-phone text-dark font-weight-300 d-block text-nowrap mt-3' title='Telefon kontaktowy' href='tel:" . $company_data["company_phone_1"] . "'><i class='fas fa-phone-alt mr-2'></i>" . $company_data["company_phone_1"] . "</a>
                    $second_phone_markup
                    $fax_markup
            </div>
            
            <div class='col-12 col-sm-1 p-xl-3'>
                <a href='#' class='d-block align-self-start text-dark tooltip-btn' data-toggle='tooltip' data-placement='right' title='' data-original-title='Dodaj do ulubionych'>
                    <img width='28' height='28' class='d-inline-block mx-auto' src='" . $urls->images ."heart.svg' alt='heart-image'>
                </a>
                
                $email_markup
                
            </div>
            
        </div>
    
    ";

}

// Wyswietla element listy ofert pracy
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

// Wyswietla element listy produktow
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

// Wyswietla element listy uslug
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

/****************
 *   DANE KBF
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
        "job_name" => $sanitizer->text($job_page->job_name),
        "job_expire" => $sanitizer->text($job_page->job_expire),
        "job_city" => $sanitizer->text($job_page->job_city),
        "job_province_name" => $sanitizer->text($job_page->province_name),
        "job_type" => $sanitizer->text($job_page->job_type),
        "job_description" => $sanitizer->text($job_page->job_description),
        "job_start_date" => $sanitizer->text($job_page->job_start_date),
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
