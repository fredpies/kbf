<?php namespace ProcessWire;

include_once "functions.php";

class FormField
{

    public static $descriptionTemplate = '
            <div class="d-none d-lg-flex col-5 col-lg-6 align-self-center">
                    <p class="kbf-form-info">{description}</p>
            </div>';

    public $placeholderMap = array(

        "{type}" => "",
        "{required}" => "",
        "{disabled}" => "",
        "{msgRequired}" => "",
        "{inputmask}" => "",
        "{value}" => "",
        "{className}" => "",
        "{description}" => "",
        "{descriptionMarkup}" => ""

    );

    public function __construct($disabled = false, $className = "")
    {
        if (!empty($className)) $this->placeholderMap["{className}"] = $className;
        if ($disabled) {
            $this->placeholderMap["{disabled}"] = "disabled";
            $this->placeholderMap["{inputmask}"] = "";
        }

    }

    public function renderMarkup($template, $description = true)
    {

        if ($description === true) {

            $this->placeholderMap["{descriptionMarkup}"] = replacePlaceholders(array(
                "{description}" => $this->placeholderMap["{description}"]
                )
            ,self::$descriptionTemplate);

        };


        if (count($this->placeholderMap)) {

            if (!empty($this->placeholderMap["{msgRequired}"])) {
                $this->placeholderMap["{msgRequired}"] = 'data-msg-required="' . $this->placeholderMap["{msgRequired}"] . '"';
            }

            if (!empty($this->placeholderMap["{inputmask}"])) {
                $this->placeholderMap["{inputmask}"] = 'data-inputmask-regex="' . $this->placeholderMap["{inputmask}"] . '"';
            }

            if (empty($this->placeholderMap["{className}"])) {
                $this->placeholderMap["{className}"] = 'col-12 col-lg-6 mb-3';
            }

            return replacePlaceholders($this->placeholderMap, $template);
        }

        return "";
    }

    public function __set($property, $value)
    {

        if ($value === true && $property === 'required') $this->placeholderMap['{required}'] = 'required';
        else if ($value === true && $property === 'disabled') $this->placeholderMap['{disabled}'] = 'disabled';
        else $this->placeholderMap['{' . $property . '}'] = $value;
    }

    public function __get($property)
    {
        return $this->placeholderMap['{' . $property . '}'];
    }

}

class FormFieldDatepicker extends FormField
{
    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public static $template = '

    <div class="row justify-content-start mx-auto w-100 mb-3">

       <div class="col-12 col-xl-4 align-self-center mb-3">
                <label class="kbf-form-info text-uppercase px-3">{label}</label>
        </div>
        
        <div class="col-12 col-xl-8">
                <div class="input-group input-group-lg input-group-round mb-4">
                        <div class="input-group-inner position-relative">
                        
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>
        
                            <input data-inputmask-regex="\d{4}-\d{2}-\d{2}" autocomplete="off" type="text" class="form-control  text-uppercase" name="{name}" {required} {msgRequired} value="{value}">
        
                            <div class="input-focus-bg"></div>
        
                            <div class="kbf-date-picker {name}-date-picker shadow-md">
                        
                            <app-datepicker
                              firstdayofweek="1"
                              weeknumbertype="first-4-day-week"
                              startview="calendar"
                              value="{value}"
                              locale="pl-PL"
                              weeklabel="Wk"
                              dragratio="0.15"
                              inline
                            ></app-datepicker>
                        
                        </div>
        
                        </div>
                        
                </div>
        </div>

    </div>
';

    public function render()
    {
        return $this->renderMarkup(self::$template);
    }

}

class FormFieldEmail extends FormField
{

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public static $template = '
    
        <div class="{className}">
                <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="text" class="form-control"
                                   name="{name}" {disabled} {required} {msgRequired} {inputmask} value="{value}">

                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
        </div>

        {descriptionMarkup}
        
    ';

    public function render($description = true)
    {
        return $this->renderMarkup(self::$template, $description);
    }

}

class FormFieldText extends FormField
{

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public static $template = '
    
        <div class="{className}">
                <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="text" class="form-control text-uppercase"
                                   name="{name}" {disabled} {required} {msgRequired} {inputmask} value="{value}">

                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
        </div>

        {descriptionMarkup}
        
    ';

    public function render($description = true)
    {
        return $this->renderMarkup(self::$template, $description);
    }

}

class FormFieldPassword extends FormField
{

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public static $template = '
    
        <div class="{className}">
                <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="password" class="form-control"
                                   name="{name}" {disabled} {required} {msgRequired} {inputmask} value="{value}">

                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
        </div>

        {descriptionMarkup}
        
    ';

    public function render($description = true)
    {
        return $this->renderMarkup(self::$template, $description);
    }

}

class FormFieldAutocomplete extends FormField
{

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public static $descriptionClass = 'd-none d-lg-flex col-5 col-xl-3 align-self-center';
    
    public static $template = '
        <div class="{className}">
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="{type}" class="form-control  text-uppercase"
                                   name="{name}" {disabled} {required} {msgRequired} {inputmask} value="{value}">
                            
                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
        </div>

        {descriptionMarkup}
       
    ';

    public function render($description = true)
    {
        return $this->renderMarkup(self::$template, $description);
    }

}

class FormFieldHidden extends FormField
{

    public static $template = '

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
        return $this->renderMarkup(self::$template);
    }

}

class FormFieldTextArea extends FormField
{

    public static $template = '

            <div class="{className}">
               <div class="col-12 mx-lg-0 mx-auto px-0">
                    <label class="text-uppercase px-3">{label}</label>
                </div>
                
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
        return $this->renderMarkup(self::$template);
    }

}

class FormFieldKeywords extends FormField
{

    public static $template = '
        
        <div class="{className}">
            <div class="col-12 mx-lg-0 mx-auto px-0">
                <label class="text-uppercase px-3">Słowa kluczowe</label>
            </div>
            
            <div class="col-12 mb-3 px-0">
                <input class="kbf-keywords form-control " name="company_keywords" value="{value}"></input>
            </div>
        </div>
    ';

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public function render()
    {
        return $this->renderMarkup(self::$template);
    }

}

class FormFieldImage extends FormField
{

    public static $template = '
    
        <div class="row col-12 col-lg-10 px-0 ">
   
            <div class="col-12 col-lg-6 mb-3">
                        <div class="col-12 mx-lg-0 mx-auto px-0 {className}">
                            <label class="text-uppercase px-3 mt-3">{label}</label>
                        </div>
                        <label class="kbf-logo-uploader input-group input-group-lg input-group-round mb-4" for="{name}">
                          
                            <input id="{name}" type="file" class="d-none form-control "
                                           name="{name}" {required} {msgRequired} {disabled} {value}>
                                           
                            <div class="d-flex no-gutters input-focus-bg justify-content-center">
                                <img alt="logo-placeholder" src="{imagePlaceholder}" class=" col-5 col-sm-3 col-lg-5 my-2 kbf-logo-uploader-image">
                            </div>
                                
                        </label>
                     
            </div>
                    
            {descriptionMarkup}

        </div>

  
    ';

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public function render($description = true)
    {
        return $this->renderMarkup(self::$template, $description);
    }

}

class FormFieldIndustries extends FormField
{

    public static $template = '

                <div class="row col-12 mb-3">
                    <div data-name="industry" id="industries" class="dropdown col-12 col-md-6 mb-4 px-0">
                        <label class="text-uppercase pl-3 pl-sm-4 pl-lg-0">Branża</label>
                        <button class="btn btn-round btn-primary px-md-3 mx-0 mx-lg-0 mb-3 mb-md-0 dropdown-toggle btn-block"
                                type="button" {disabled}
                                id="industries-button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                        </button>
                    </div>

                    <div data-name="sub-industry" id="sub-industries" class="dropdown col-12 col-md-6 pl-0 pl-md-3 pr-0">
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
        return $this->renderMarkup(self::$template);
    }

}

class FormFieldRegonSearch extends FormField
{

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public static $template = '
    
        <div class="col-12 col-lg-6 mb-3 {className}">
        
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        
                        <div class="input-group-inner">
                          
                            <input autocomplete="off" name="company_regon" type="text" style="font-size: 0.83rem" class="form-control " {disabled} {required} data-rule-minlength="7" data-msg-minlength="Numer REGON musi posiadać minimum 7 cyfr." {msgRequired} {inputmask} value="{value}">
                            
                            <div class="input-group-append">
                                <button class="kbf-search-button btn btn-round btn-primary shadow-none mb-0" type="submit">Pobierz dane</button>
                            </div>
                            
                            <div class="input-focus-bg"></div>
                            
                            
                        </div>
                        
                    </div>
        </div>

        {descriptionMarkup}
                
    ';

    public function render($description = true)
    {
        return $this->renderMarkup(self::$template, $description);
    }

}

class FormFieldDropdown extends FormField
{

    public function __construct($disabled = false, $className = "")
    {
        parent::__construct($disabled, $className);
    }

    public static $template = '<div data-value="{value}" data-options="{options}" data-name="{name}" id="{name}" class="dropdown dropdown-{name} row w-100 mb-3">
                                <div class="d-flex col-12 col-xl-4">
                                    <label class="align-self-center px-4 w-100 text-uppercase" for="{name}-button">{label}</label>
                                </div>
                                <div class="col-12 col-xl-8">
                                     <button class=" btn btn-round btn-primary px-3 mb-md-0 dropdown-toggle w-100" type="button"
                                            id="{name}-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                </div>
                            </div>';

    public function render()
    {
        return $this->renderMarkup(self::$template);
    }

}