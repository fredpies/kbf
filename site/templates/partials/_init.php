<?php namespace ProcessWire;

$config = wire('config');
$urls = wire('urls');

$config->urls->assets = 'site/templates/assets';
$config->urls->templates = 'site/templates';

// Ustaw sciezki do assets
$urls->set('css', $config->urls->assets . '/css/'); // css
$urls->set('images', $config->urls->assets . '/images/'); // images
$urls->set('js', $config->urls->assets . '/js/'); // js
$urls->set('svg', $config->urls->assets . '/svg/'); // svg
$urls->set('temp', $config->urls->templates . '/temp/'); // Katalog tymczasowy do upload
