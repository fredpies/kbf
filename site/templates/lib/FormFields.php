<?php namespace ProcessWire;

include_once "functions.php";

class FormField
{

    public $placeholderMap = array(

        "{type}" => "",
        "{required}" => "",
        "{msgRequired}" => "",
        "{inputmask}" => "",
        "{value}" => "",
        "{className}" => ""

    );

    public function __construct($className)
    {
        if (!empty($className)) $this->placeholderMap["{className}"] = $className;
    }

    public function renderMarkup($markup)
    {
        if (count($this->placeholderMap)) return replacePlaceholders($this->placeholderMap, $markup);
        return "";
    }

    public function __set($property, $value)
    {
        $this->placeholderMap['{' . $property . '}'] = $value;
    }

    public function __get($property)
    {
        return $this->placeholderMap['{' . $property . '}'];
    }

}

class FormFieldText extends FormField
{

    public function __construct($className = "")
    {
        parent::__construct($className);
    }

    public static $markup = '
    
        <div class="col-12 col-lg-5 mb-4">
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="{type}" class="{className} form-control form-control-lg text-uppercase"
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
        return $this->renderMarkup(self::$markup);
    }

}

class FormFieldAddressAutocomplete extends FormField
{

    public function __construct($className = "")
    {
        parent::__construct("address-autocomplete");
    }

    public static $markup = '
    
        <div class="col-12 col-lg-5 mb-4">
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="{type}" class="form-control form-control-lg text-uppercase"
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

    public function __construct($className = "")
    {
        parent::__construct($className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}

class FormFieldTextArea extends FormField
{

    public static $markup = '

        <label class="text-uppercase pl-3 pl-sm-4">{label}</label>
        <div class="wysiwyg col-12 mb-5 px-3">
            <div class="editor">{value}</div>
        </div>
        <input {required} data-msg-required="{msgRequired}" type="hidden" name="{name}" value="{value}">
    ';

    public function __construct($className = "")
    {
        parent::__construct($className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}

class FormFieldImage extends FormField
{

    public static $markup = '
    
    
        <div class="col-12 col-lg-10 col-xl-9">
    
    
        <div class="col-12 col-md-6 mb-4 px-4">
                    <div class="kbf-logo-uploader-label text-uppercase px-3">{label}</div>
                    <label class="kbf-logo-uploader input-group input-group-lg input-group-round mb-4" for="{name}">
                      
                         <input id="{name}" type="{type}" class="d-none form-control form-control-lg"
                                       name="{name}" {required} {value}>
                                       
                        <div class="d-flex no-gutters input-focus-bg justify-content-center">
                            <img alt="logo-placeholder" src="{logoImage}" class="col-5 my-2 kbf-logo-uploader-image">
                        </div>
                            
                    </label>
                 
                    </div>
                
                <div class="d-none d-md-flex col-md-6 col-xl-4">
                    <p class="kbf-form-info align-self-center">{description}</p>
                </div>

</div>

  
    ';

    public function __construct($className = "")
    {
        parent::__construct($className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}


class FormFieldIndustries extends FormField
{

    public static $markup = '

            <div class="d-flex flex-wrap">
                    <div data-name="industry" id="industries" class="dropdown col-12 col-md-6 mb-4">
                        <label class="text-uppercase pl-3 pl-sm-4 pl-lg-0">Branża</label>
                        <button class="btn btn-round btn-primary px-3 mx-0 mx-lg-0 mb-3 mb-md-0 dropdown-toggle btn-block"
                                type="button"
                                id="industries-button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                        </button>
                    </div>

                    <div data-name="sub-industry" id="sub-industries" class="dropdown col-12 col-md-6">
                        <label class="text-uppercase px-3">Sub-branża</label>
                        <button class="btn btn-round btn-primary px-3 mx-0 mx-lg-0 mb-3 mb-md-0 dropdown-toggle btn-block"
                                type="button"
                                id="sub-industries-button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                        </button>
                    </div>
            </div>
        
    ';

    public function __construct($className = "")
    {
        parent::__construct($className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$markup);
    }

}
