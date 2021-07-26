<?php namespace ProcessWire;
include_once "functions.php";

class Alert {

    public $className;
    public $heading = "";
    public $footer = "";
    public $dismissible = false;
    public $hideIcon = false;
    public $type = "primary";
    public $contents = "";

    public static $icons = array(
        "primary" => '<i class="far fa-paper-plane"></i>',
        "secondary" => '<i class="far fa-flag"></i>',
        "success" => '<i class="far fa-check-circle"></i>',
        "danger" => '<i class="far fa-times-circle"></i>',
        "warning" => '<i class="far fa-question-circle"></i>',
        "info" => '<i class="far fa-bell"></i>',
        "dark" => '<i class="far fa-bookmark"></i>'

    );

    public static $alertMarkup = '
    
        <div class="{className} alert alert-{type} {dismissible} fade show mb-5" role="alert">
            {heading}
            {icon}
            {contents}
            <hr>
            {footer}
            {buttonClose}            
        </div>
    
    ';

    public function __construct($className = "") {
        $this->className = $className;
    }


    public function render() {

        $placeholderMap = array(

            "{type}" => $this->type,
            "{className}" => $this->className,
            "{heading}" => '<h4 class="alert-heading">' . $this->heading . '</h4>',
            "{icon}" => $this->hideIcon ? '' : self::$icons[$this->type],
            "{dismissible}" => $this->dismissible ? 'alert-dismissible' : '',
            "{contents}" => $this->contents,
            "{footer}" => $this->footer,
            "{buttonClose}" => $this->dismissible ? '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"></span></button>' : '',

        );

        return replacePlaceholders($placeholderMap, self::$alertMarkup);
    }
}