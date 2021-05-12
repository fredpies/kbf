<?php namespace ProcessWire;

$config->urls->assets = 'site/templates/assets';

// Ustaw sciezki do assets
$urls->set('css', $config->urls->assets . '/css/'); // css
$urls->set('images', $config->urls->assets . '/images/'); // images
$urls->set('js', $config->urls->assets . '/js/'); // js
$urls->set('svg', $config->urls->assets . '/svg/'); // svg
