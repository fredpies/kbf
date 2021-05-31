<?php namespace ProcessWire;

include_once "functions.php";

class FormField
{

    public $placeholderMap = array(

        "{type}" => "",
        "{required}" => "",
        "{msgRequired}" => "",
        "{inputmask}" => "",
        "{value}" => ""

    );

    public function __construct($className = "address-autocomplete")
    {
        $this->placeholderMap["{class}"] = $className;
    }

    public function renderMarkup($markup)
    {
        if (count($this->placeholderMap)) return replacePlaceholders($this->placeholderMap, $markup);
        return "";
    }

    public function __set($property, $value)
    {
        $this->placeholderMap["{" . $property . "}"] = $value;
    }

    public function __get($property)
    {
        return $this->placeholderMap["{" . $property . "}"];
    }

}

class FormFieldText extends FormField
{

    public function __construct($className = "address-autocomplete")
    {
        parent::__construct($className);
    }

    public static $markup = '
    
        <div class="col-12 col-lg-5 mb-2">
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="{type}" class="{class} form-control form-control-lg text-uppercase"
                                   name="{name}" {required} {msgRequired} {inputmask} value="{value}">

                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
                </div>

                <div class="d-none d-lg-flex col-5 col-xl-4">
                    <p class="kbf-form-info align-self-center">{description}</p>
                </div>
    ';

    public function render()
    {
        return parent::renderMarkup(self::$markup);
    }

}

class FormFieldAddressAutocomplete extends FormField
{

    public function __construct($className = "")
    {
        parent::__construct("address-autocomplete");
    }

    public static $markup = '
    
        <div class="col-12 col-lg-5 mb-2">
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="{type}" class="{class} form-control form-control-lg text-uppercase"
                                   name="{name}" {required} {msgRequired} data-inputmask-regex="[A-Za-zŃÓŻŹŁŚńóżźłś\s-]+\d{1,}[a-zA-Z]{1,}" value="{value}">
                            
                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
                </div>

                <div class="d-none d-lg-flex col-5 col-xl-4">
                    <p class="kbf-form-info align-self-center">{description}</p>
                </div>
    ';

    public function render()
    {
        return parent::renderMarkup(self::$markup);
    }

}


class FormFieldHidden extends FormField
{

    public static $markup = '

        <input   
                type="hidden"
                name="{name}" 
                value="{value}">

    ';

    public function __construct($className = "")
    {
        parent::__construct($className);
    }

    public function render()
    {
        return parent::renderMarkup(self::$markup);
    }

}

class FormFieldTextArea extends FormField
{

    public static $markup = '

        <div class="wysiwyg col-12 col-lg-10 col-xl-9 mb-5">
                <label class="text-uppercase px-3">{label}</label>
                <div class="editor">{value}</div>
                <input {required} {msgRequired} type="hidden" name="{name}">
    
            </div>
    ';

    public function __construct($className = "")
    {
        parent::__construct($className);
    }

    public function render()
    {
        return parent::renderMarkup(self::$markup);
    }

}

class FormFieldImage extends FormField
{

    public static $markup = '
    
        <div class="col-12 col-lg-5 mb-2">
                    <div class="kbf-logo-uploader-label text-uppercase px-3">{label}</div>
                    <label class="kbf-logo-uploader input-group input-group-lg input-group-round mb-4" for="{name}">
                      
                         <input id="{name}" type="{type}" class="d-none form-control form-control-lg"
                                       name="{name}" {required} {value}>
                                       
                        <div class="d-flex no-gutters input-focus-bg justify-content-center">
                            <img alt="logo-placeholder" src="{logoImage}" class="col-4 my-2 kbf-logo-uploader-image">
                        </div>
                            
                    </label>
                 
                    </div>
                
                <div class="d-none d-lg-flex col-5 col-xl-4">
                    <p class="kbf-form-info align-self-center">{description}</p>
                </div>
  
    ';

    public function __construct($className = "")
    {
        parent::__construct($className);
    }

    public function render()
    {
        return parent::renderMarkup(self::$markup);
    }

}
