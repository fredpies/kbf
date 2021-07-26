<?php namespace ProcessWire;
include_once "lib/functions.php";
?>
<div class="kbf-banner-index">
    <div class="banner-slides-wrapper arrow-nav-overflow bg-white" data-dots="false" data-nav="true">

        <div class="banner-slides-container owl-carousel" data-height="140px">

                    <!-- php find 100 random banners-->
                    <?php
                        $banners = $pages->find("template=banner, banner_location_index=1, banner_activated=1, sort=random")->getRandom(100);
                        foreach ($banners as $banner) {
                            $company = sanitize_company_data($banner->parent("template=company"));
                            if($banner->banner_type == "old") {
                    ?>

                    <!-- Slide item -->
                    <a target="_blank" href="http://<?php echo $banner->banner_target_url; ?>">
                        <div class="d-flex flex-column" data-height="140px">
                            <div class="d-flex align-items-center bg-white" data-height="140px">
                                <div class="container px-4">
                                    <div class="row">
                                        <div class="col-12 col-md-6 text-center text-lg-left align-self-center">
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

        <!-- Navigation -->
        <div class="carousel-custom-nav carousel-nav-lg d-none d-xl-block">
            <a class="carousel-control-prev" href="#" data-width="9%">
                <span class="carousel-control-prev-icon dark" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#" data-width="9%">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    </div>
</div>