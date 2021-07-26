<?php namespace ProcessWire;

include_once "partials/_init.php";
include_once "lib/functions.php";
include_once "lib/Alert.class.php";

$session = wire('session');
$pages = wire('pages');

if ($session->stripe_id) {

    // Zarejestruj firme

    $company_page = new Page();
    $company_page->template = 'company';
    $company_page->parent = $pages->get('template=companies');
    $company_page->name = $session->company_name;
    $company_page->title = $session->company_name;
    $company_page->company_name = $session->company_name;
    $company_page->company_email = $session->company_email;
    $company_page->company_phone_1 = $session->company_phone_1;
    $company_page->company_nip = $session->company_nip;
    $company_page->company_regon = $session->company_regon;

    $company_page->province_name = $session->province_name;
    $company_page->area_name = $session->area_name;

    $company_page->industry = $session->industry;
    $company_page->sub_industry = $session->get('sub-industry');

    $company_page->company_www = $session->company_www;
    $company_page->company_description_html = $session->company_description_html;
    $company_page->company_keywords = $session->company_keywords;
    $company_page->company_subscription = $session->subscription;
    $company_page->company_subscription_expire = date('Y-m-d', mktime(0,0,0, date('m'), date('d'), date('Y') + 1));

    $company_page->company_address = $session->company_address;
    $company_page->company_city = $session->company_city;
    $company_page->company_zip = $session->company_zip;

    $company_page->lat = $session->lat;
    $company_page->lon = $session->lon;

    $company_page->company_funds = 0;

    $company_page->save();
    $company_id = $company_page->id;

    $company_page->company_id = $company_id;
    $company_page->of(false);
    $company_page->save();
    $company_page->of(true);

    $services_container_page = new Page();
    $services_container_page->template = 'basic-page';
    $services_container_page->parent = $company_page;
    $services_container_page->title = 'Usługi';
    $services_container_page->save();

    $products_container_page = new Page();
    $products_container_page->template = 'basic-page';
    $products_container_page->parent = $company_page;
    $products_container_page->title = 'Produkty';
    $products_container_page->save();

    $jobs_container_page = new Page();
    $jobs_container_page->template = 'basic-page';
    $jobs_container_page->parent = $company_page;
    $jobs_container_page->title = 'Oferty Pracy';
    $jobs_container_page->save();

    $password = sha1(bin2hex(random_bytes(8)));
    $confirmation_code = sha1(bin2hex(random_bytes(8)));
    $proto = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https://" : "http://";
    $confirmation_page_url = $pages->get('template=activation')->url;

    $new_user = new User();
    $new_user->of(false);
    $new_user->name = $company_page->company_email;
    $new_user->email = $company_page->company_email;
    $new_user->pass = $password;
    $new_user->company_id = $company_page->company_id;
    $new_user->confirmation_code = $confirmation_code;
    $new_user->addRole('company');
    $new_user->save();
    $new_user->of(true);

    // Wyslij mail
    mailTo(array(

        "to" => $session->company_email,
        "from" => 'no-reply@webaplanet.biz', //TODO: Musi byc zmienione
        "subject" => 'Dane logowania',
        "bodyHTML" => '

            <h4>Firma została zarejestrowana w Katalogu Branżowym Firm</h4>
            <h4>Dane logowania do panelu zarzadzania :</h4>
            <p>Login : ' . $company_page->company_email . '</p>
            <p>Hasło : ' . $password . '</p>
            <p>Kliknij na poniższym linku w celu aktywacji swojego konta.</p>
            <p><a href="' . $proto . $_SERVER['HTTP_HOST'] . $confirmation_page_url . '?c='. $confirmation_code . '">' . $proto . $_SERVER['HTTP_HOST'] . $confirmation_page_url . '?c='. $confirmation_code . '</a></p>

        '

    ), 'Katalog Branżowy Firm');

    $login_url = $pages->get('template=login')->url;

    // Alert
    $alert = new Alert('mt-5');
    $alert->type = "success";
    $alert->hideIcon = true;
    $alert->heading = "Firma została zarejestrowana w Katalogu Branżowym Firm.";
    $alert->contents = "<p>Na adres e-mail: <b>" . $company_page->company_email . "</b> został wysłany login i hasło oraz link aktywacyjny umożliwiający zalogowanie się do panelu zarządzania. </b></p>";

    $markup = '<h3 class="font-weight-800 mb-0 pt-lg-5 py-4 section-title-3 text-center text-uppercase">FIRMA ZOSTAŁA ZAREJESTROWANA</h3>'.
        $alert->render() .
        '<div class="col-12 col-md-5 mx-auto">
            <a href="' . $login_url . '" class="kbf-back-button mt-0 btn btn-round btn-block shadow-none btn-secondary">Logowanie</a>
        </div>';


    $session->remove('stripe_id');


}


?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php include_once "partials/_head.php" ?>

</head>
<body>

<!-- Preloader -->
<?php //include_once "partials/_preloader.php"
?>

<!-- Content -->
<div class="main-content py-0">
    <div class="container">
        <?php  if(isset($markup)) echo $markup ?>
    </div>
</div>


<!-- Go to top -->
<?php include_once "partials/_go-to-top.php" ?>

<!-- Scripts -->
<?php include_once "partials/_scripts.php" ?>


<script>

    $(function () {

        // Ustaw tooltips
        $('.tooltip-btn').tooltip()
        $('.tooltip-btn-light').tooltip({
            template: '<div class="tooltip tooltip-light" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        })

    })

</script>
</body>
</html>
