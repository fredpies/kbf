<?php namespace ProcessWire;

include_once "functions.php";

class FormField
{

    public $placeholderMap = array(

        "{type}" => "",
        "{required}" => "",
        "{disabled}" => "",
        "{msgRequired}" => "",
        "{inputmask}" => "",
        "{value}" => "",
        "{className}" => ""

    );

    public function __construct($disabled = false, $className = "")
    {
        if (!empty($className)) $this->placeholderMap["{className}"] = $className;
        if ($disabled) {
            $this->placeholderMap["{disabled}"] = "disabled";
            $this->placeholderMap["{inputmask}"] = "";
        }
    }

    public function renderMarkup($markup)
    {

        if (count($this->placeholderMap)) {

            if (!empty($this->placeholderMap["{msgRequired}"])) {
                $this->placeholderMap["{msgRequired}"] = 'data-msg-required="' . $this->placeholderMap["{msgRequired}"] . '"';
            }

            if (!empty($this->placeholderMap["{inputmask}"])) {
                $this->placeholderMap["{inputmask}"] = 'data-inputmask-regex="' . $this->placeholderMap["{inputmask}"] . '"';
            }

            return replacePlaceholders($this->placeholderMap, $markup);
        }

        return "";
    }

    public function __set($property, $value)
    {

        if ($value === true && $property === 'required') $this->placeholderMap['{' . $property . '}'] = 'required';
        else if ($value === true && $property === 'disabled') $this->placeholderMap['{' . $property . '}'] = 'disabled';
        else $this->placeholderMap['{' . $property . '}'] = $value;
    }

    public function __get($property)
    {
        return $this->placeholderMap['{' . $property . '}'];
    }

}

class FormFieldText extends FormField
{

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public static $markup = '
    
        <div class="col-12 col-lg-6 col-xl-5 mb-3 {className}">
                <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="{type}" class="{className} form-control form-control-lg text-uppercase"
                                   name="{name}" {disabled} {required} {msgRequired} {inputmask} value="{value}">

                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
        </div>

        <div class="d-none d-lg-flex col-5 col-lg-4 col-xl-3 align-self-center">
                    <p class="kbf-form-info">{description}</p>
        </div>
    ';

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}

class FormFieldAddressAutocomplete extends FormField
{

    public function __construct($disabled = false)
    {
        parent::__construct($disabled, "address-autocomplete");
    }

    public static $markup = '
        <div class="col-12 col-lg-6 col-xl-5 mb-3 {className}">
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="{type}" class="form-control form-control-lg text-uppercase"
                                   name="{name}" {disabled} {required} {msgRequired} data-inputmask-regex="[A-Za-zŃÓŻŹŁŚńóżźłś\s-]+\d{1,}[a-zA-Z]{1,}" value="{value}">
                            
                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
        </div>

        <div class="d-none d-lg-flex col-5 col-xl-3 align-self-center">
            <p class="kbf-form-info">{description}</p>
        </div>
    ';

    public function render()
    {
        return $this->renderMarkup(self::$markup);
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

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}

class FormFieldTextArea extends FormField
{

    public static $markup = '

     <div class="{className}">
     
        <label style="padding-left: 1rem;" class="text-uppercase">{label}</label>
        <div class="wysiwyg col-12 mb-3 px-0">
            <div class="editor">{value}</div>
        </div>
        <input class="form-control" {required} {disabled} {msgRequired} type="hidden" name="{name}" value="{value}">
        
    </div>
    ';

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}

class FormFieldKeywords extends FormField
{

    public static $markup = '

        <div class="{className}">
            <label style="padding-left: 1rem;" class="text-uppercase mt-3">Słowa kluczowe</label>
            <div class="col-12 mb-3 px-0">
                <input class="kbf-keywords form-control form-control-lg" name="company_keywords" value="{value}"></input>
            </div>
        </div>
    ';

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}

class FormFieldImage extends FormField
{

    public static $markup = '
    
    
        <div class="row col-12 col-lg-10 col-xl-9 px-0 {className}">
   
            <div class="col-12 col-lg-5 mb-3">
                        <div class="kbf-logo-uploader-label text-uppercase px-3">{label}</div>
                        <label class="kbf-logo-uploader input-group input-group-lg input-group-round mb-4" for="{name}">
                          
                            <input id="{name}" type="{type}" class="d-none form-control form-control-lg"
                                           name="{name}" {required} {msgRequired} {disabled} {value}>
                                           
                            <div class="d-flex no-gutters input-focus-bg justify-content-center">
                                <img alt="logo-placeholder" src="{logoImage}" class="col-5 my-2 kbf-logo-uploader-image">
                            </div>
                                
                        </label>
                     
            </div>
                    
            <div class="d-none d-lg-flex col-5 col-xl-4 align-self-center">
                <p class="kbf-form-info">{description}</p>
            </div>

        </div>

  
    ';

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}

class FormFieldIndustries extends FormField
{

    public static $markup = '

            <div class="d-flex justify-content-center flex-wrap {className}">
                    <div data-name="industry" id="industries" class="dropdown col-12 col-md-5 col-lg-6 mb-4 px-0">
                        <label class="text-uppercase pl-3 pl-sm-4 pl-lg-0">Branża</label>
                        <button class="btn btn-round btn-primary px-md-3 mx-0 mx-lg-0 mb-3 mb-md-0 dropdown-toggle btn-block"
                                type="button" {disabled}
                                id="industries-button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                        </button>
                    </div>

                    <div data-name="sub-industry" id="sub-industries" class="dropdown col-12 col-md-5  col-lg-6  pl-0 pl-md-3 pr-0">
                        <label class="text-uppercase px-3">Sub-branża</label>
                        <button class="btn btn-round btn-primary mx-0 mx-lg-0 mb-3 mb-md-0 dropdown-toggle btn-block"
                                type="button" {disabled}
                                id="sub-industries-button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                        </button>
                    </div>
            </div>
        
    ';

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}

class FormFieldRegonSearch extends FormField
{

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public static $markup = '
    
        <div class="col-12 col-lg-6 col-xl-5 mb-3 {className}">
        
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        
                        <div class="input-group-inner">
                          
                            <input autocomplete="off" name="company_regon" type="text" style="font-size: 0.83rem" class="form-control form-control-lg" {disabled} {required} data-rule-minlength="7" data-msg-minlength="Numer REGON musi posiadać minimum 7 cyfr." {msgRequired} {inputmask} value="{value}">
                            
                            <div class="input-group-append">
                                <button class="kbf-search-button btn btn-round btn-primary shadow-none mb-0" type="submit">Pobierz dane</button>
                            </div>
                            
                            <div class="input-focus-bg"></div>
                            
                            
                        </div>
                        
                    </div>
        </div>

        <div class="d-none d-lg-flex col-5 col-lg-4 col-xl-3 align-self-center">
            <p class="kbf-form-info">{description}</p>
        </div>
                
    ';

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}