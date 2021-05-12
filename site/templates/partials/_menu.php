<?php namespace ProcessWire;

// Strona glowna
$home_page_url = $pages->get(1)->url;

// Strona z lista firm
$company_list_page_url = $pages->get("template=companies")->url;

?>

<header>
    <div class="navik-header header-shadow navik-mega-menu mega-menu-fullwidth">
        <div class="container">
            <div class="navik-header-container">
                <!--Logo-->
                <div class="logo kbf-menu-logo" data-mobile-logo="<?php echo $urls->images ?>logo-kbf.png" data-sticky-logo="<?php echo $urls->images ?>logo-kbf.png">
                    <a href="<?php echo $home_page_url; ?>"><img src="<?php echo $urls->images ?>logo-kbf.png" alt="logo"/></a>
                </div>
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
                            <a href="#">Dodaj Firmę</a>
                        </li>
                        <li>
                            <a href="#">Firmy wg branży</a>
                            <ul>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=ADMINISTRACJA, URZĘDY I FUNDACJE"?>">ADMINISTRACJA, URZĘDY I FUNDACJE</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=BIURO I DOM"?>">BIURO I DOM</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=BUDOWNICTWO I WYPOSAŻENIE"?>">BUDOWNICTWO I WYPOSAŻENIE</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=EDUKACJA, NAUKA, KULTURA, SZTUKA"?>">EDUKACJA, NAUKA, KULTURA, SZTUKA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=MEDIA, KOMPUTERY, INTERNET, REKLAMA"?>">MEDIA, KOMPUTERY, INTERNET I REKLAMA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=MEDYCYNA, ZDROWIE I URODA"?>">MEDYCYNA, ZDROWIE I URODA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=MOTORYZACJA, TRANSPORT, KOMUNIKACJA"?>">MOTORYZACJA, TRANSPORT, KOMUNIKACJA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=PRACA"?>">PRACA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=PRAWO, FINANSE, TŁUMACZENIA"?>">PRAWO, FINANSE, TŁUMACZENIA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=PRZEMYSŁ, AUTOMATYKA"?>">PRZEMYSŁ, AUTOMATYKA</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=TURYSTYKA, SPORT, REKREACJA, HOTELE"?>">TURYSTYKA, SPORT, REKREACJA, HOTELE</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=WŁÓKIENNICTWO, ODZIEŻ, OBUWIE"?>">WŁÓKIENNICTWO, ODZIEŻ, OBUWIE</a>
                                </li>
                                <li>
                                    <a href="<?php echo $company_list_page_url . "?industry=ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO, OGRODNICTWO"?>">ŻYWNOŚĆ, ROLNICTWO, EKOLOGIA, LEŚNICTWO, OGRODNICTWO</a>
                                </li>
                            </ul>
                        </li>
                        <li class="ml-5 kbf-menu-item">
                            <button type="button" class="btn btn-round btn-outline-dark">MOJE KBF</button>
                        </li>
                        <li class="kbf-menu-item-mobile">
                            <a href="#">MOJE KBF</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
