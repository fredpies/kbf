<?php namespace ProcessWire;
include_once "lib/functions.php";
?>
<div class="d-flex flex-column">
    <div class="d-flex align-items-center bg-light">
        <div class="container kbf-banner mt-3 mt-md-5">
            <div class="row">
                <div class="col">
                    <div class="banner-slides-wrapper arrow-nav-overflow bg-white rounded-xl shadow-sm" data-dots="false" data-nav="true">

                        <div class="banner-slides-container owl-carousel" data-height="140px">

                            <?php
                            $banners = $pages->find("template=banner, banner_location_industry=1, banner_activated=1, sort=random")->getRandom(100);
                            foreach ($banners as $banner) {
                            $company = get_company_data($banner->parent("template=company"), $sanitizer);
                            if($banner->banner_type == "old") {
                            ?>
                                <!-- Slide item -->
                                <a target="_blank" href="http://<?php echo $banner->banner_target_url; ?>">
                                    <div class="d-flex flex-column" data-height="140px">
                                        <div class="d-flex align-items-center bg-white" data-height="140px">
                                            <div class="container px-4">
                                                <div class="row">
                                                    <div class="col-12 col-md-6 text-center text-lg-center align-self-center">
                                                        <div class="align-items-center">
                                                            <h4 class="font-weight-800 text-dark-gray mb-0 mb-md-1 add-animate slide-animate d-none d-md-block" data-animated="fadeInRight"><?php echo $company["company_name"]; ?></h4>
                                                            <h5 class="font-weight-800 text-dark-gray mb-0 mb-md-1 add-animate slide-animate d-md-none" data-animated="fadeInRight"><?php echo $company["company_name"]; ?></h5>
                                                            <?php if(strlen($company["company_name"]) <= 50) {
                                                                ?>
                                                                <div class="add-animate slide-animate d-none d-lg-block" data-animated="fadeInLeft">
                                                                    <span class="company-industry badge badge-pill badge-dark mb-1"><?php echo $company["company_city"]; ?></span>
                                                                    <span class="company-industry badge badge-pill badge-primary mb-1"><?php echo $company["industry"]; ?></span>
                                                                    <span class="company-industry badge badge-pill badge-secondary mb-1"><?php echo $company["sub_industry"]; ?></span>
                                                                </div>
                                                            <?php }; ?>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 text-center align-self-center">
                                                        <div class="align-items-center text-center">
                                                            <div class="add-animate slide-animate" data-animated="zoomIn">
                                                                <img class="img-fluid img-kbf-banner-old" src="<?php echo $banner->banner_image->url ?>"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            <?php } else {
                            ?>
                                <!-- Slide item -->
                                <a target="_blank" href="http://<?php echo $banner->banner_target_url; ?>">
                                    <div class="d-flex flex-column" data-height="140px">
                                        <div class="add-animate slide-animate" data-animated="fadeInDown">
                                            <img class="kbf-img-cover" src="<?php echo $banner->banner_image->url ?>"/>
                                        </div>
                                    </div>
                                </a>
                            <?php }}
                            ?>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>