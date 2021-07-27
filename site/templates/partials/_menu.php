<?php namespace ProcessWire;


$page = wire('page');
$pages = wire('pages');
$urls = wire('urls');
$user = wire('user');
$input = wire('input');
$session = wire('session');
$sanitizer = wire('sanitizer');

// Aktualny template
$template_name = $sanitizer->text($page->template);

// Lista szablonow dla ktorych nie wyswietlac menu
$no_menu_templates = array('register-company', 'choose-registration');

// Strona glowna
$home_page_url = $pages->get(1)->url;

// Strona z lista firm
$company_list_page_url = $pages->get("template=companies")->url;

$company_page = null;

if ($user->isLoggedin()) {
    $company_page = get_user_company($user);
}

$targetURL = $pages->get('template=login')->url;
$targetMethod = 'get';

if ($user->isLoggedin()) {
    $targetMethod = 'post';
    $targetURL = $page->url;
}

if ($input->post('action', 'text'))
    if ($input->post('action', 'text') === 'logout') {
        $session->logout();
        $session->redirect($pages->get(1)->url);
    }

?>

<header>
    <div class="navik-header header-shadow navik-mega-menu mega-menu-fullwidth">
        <div class="container">
            <div class="navik-header-container">
                <!--Logo-->
                <div class="logo kbf-menu-logo" data-mobile-logo="<?php echo $urls->images ?>logo-kbf.png"
                     data-sticky-logo="<?php echo $urls->images ?>logo-kbf.png">
                    <a href="<?php echo $home_page_url; ?>"><img src="<?php echo $urls->images ?>logo-kbf.png"
                                                                 alt="logo"/></a>
                </div>

                <?php if (!in_array($template_name, $no_menu_templates)) {?>

                <!-- Burger menu -->
                <div class="burger-menu">
                    <div class="line-menu line-half first-line"></div>
                    <div class="line-menu"></div>
                    <div class="line-menu line-half last-line"></div>
                </div>
                <!--Navigation menu-->
                <nav class="navik-menu menu-hover-reset menu-caret submenu-top-border submenu-scale">
                    <ul>
                        <li>
                            <?php
                            if ($company_page) {
                                echo '<a href="' . $pages->get("template=dashboard")->url . '">Panel zarządzania</a>';
                            } else
                                echo '<a href="' . $pages->get("template=choose-registration")->url . '">Rejestracja</a>';

                            ?>

                        </li>
                         <li>
                            <a href="#">Firmy wg branży</a>
                            <ul>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=ADMINISTRACJA, URZĘDY I FUNDACJE" ?>">ADMINISTRACJA,
                                        URZĘDY I FUNDACJE</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=BIURO I DOM" ?>">BIURO I
                                        DOM</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=BUDOWNICTWO I WYPOSAŻENIE" ?>">BUDOWNICTWO
                                        I WYPOSAŻENIE</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=EDUKACJA, NAUKA, KULTURA, SZTUKA" ?>">EDUKACJA,
                                        NAUKA, KULTURA, SZTUKA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=MEDIA, KOMPUTERY, INTERNET, REKLAMA" ?>">MEDIA,
                                        KOMPUTERY, INTERNET I REKLAMA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=MEDYCYNA, ZDROWIE I URODA" ?>">MEDYCYNA,
                                        ZDROWIE I URODA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=MOTORYZACJA, TRANSPORT, KOMUNIKACJA" ?>">MOTORYZACJA,
                                        TRANSPORT, KOMUNIKACJA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=PRACA" ?>">PRACA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=PRAWO, FINANSE, TŁUMACZENIA" ?>">PRAWO,
                                        FINANSE, TŁUMACZENIA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=PRZEMYSŁ, AUTOMATYKA" ?>">PRZEMYSŁ,
                                        AUTOMATYKA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=TURYSTYKA, SPORT, REKREACJA, HOTELE" ?>">TURYSTYKA,
                                        SPORT, REKREACJA, HOTELE</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=WŁÓKIENNICTWO, ODZIEŻ, OBUWIE" ?>">WŁÓKIENNICTWO,
                                        ODZIEŻ, OBUWIE</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO, OGRODNICTWO" ?>">ŻYWNOŚĆ,
                                        ROLNICTWO, EKOLOGIA, LEŚNICTWO, OGRODNICTWO</a>
                                </li>
                            </ul>
                        </li>
                         <li>
                            <a href="#">Kategorie</a>
                            <ul>
                                <li>
                                    <a href="<?= $pages->get("template=companies")->url; ?>">LISTA FIRM</a>
                                </li>
                                <li>
                                    <a href="<?= $pages->get("template=products")->url; ?>" ?>PRODUKTY NA SPRZEDAŻ</a>
                                </li>
                                <li>
                                    <a href="<?= $pages->get("template=services")->url; ?>">OFEROWANE USŁUGI</a>
                                </li>
                                <li>
                                    <a href="<?= $pages->get("template=jobs")->url; ?>">OFERTY PRACY</a>
                                </li>

                            </ul>
                        </li>

                        <li>
                            <form action="<?= $targetURL ?>" method="<?= $targetMethod ?>">

                        <li class="ml-5 kbf-menu-item">
                            <button type="submit"
                                    class="btn btn-round btn-outline-dark"><?= $user->isLoggedin() ? 'WYLOGUJ' : 'MOJE KBF' ?></button>
                        </li>

                        <li class="kbf-menu-item-mobile">
                            <button type="submit"
                                    style="border: 0;" class="btn btn-outline-dark px-3"><?= $user->isLoggedin() ? 'WYLOGUJ' : 'MOJE KBF' ?></button>
                        </li>

                        <?php
                        if ($user->isLoggedin()) echo '<input type="hidden" name="action" value="logout">';
                        ?>

                        </form>

                        </li>

                    </ul>
                </nav>

                <?php } ?>

            </div>
        </div>
    </div>
</header>
