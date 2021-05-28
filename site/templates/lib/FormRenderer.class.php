<?php namespace ProcessWire;

include_once "functions.php";

class FormRenderer
{

    public $fields = array(); // Pola dodawane do formularza
    public $action = ""; // Akcja formularza
    public $operation = "add"; // Rodzaj operacji wykonywanej przez formularz


    // Markups
    public static $formMarkup = '
        <form novalidate action="{action}" role="form" name="{name}" class="pl-lg-5">

            <!-- Pola formularza-->
            <div class="row justify-content-center">

               {fieldsMarkup}

                <div class="form-buttons row justify-content-between col-12 col-lg-10 col-xl-9 mt-5">
                    <button type="submit" class="btn btn-block btn-round shadow-none btn-primary">{submitText}</button>
                    <button type="button" class="kbf-back-button mt-0 btn btn-block btn-round shadow-none btn-secondary">Wróć</button>
                </div>

            </div>
            <!-- Koniec pol formularza-->

        </form>
    ';

    public static $FieldtypeTextMarkup = '
    
        <div class="col-12 col-lg-5 mb-2">
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">{label}</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa {icon}"></i></span>
                            </div>

                            <input autocomplete="off" type="{type}" class="form-control form-control-lg"
                                   name="{name}" {required} {msgRequired} {inputmask} {value}>

                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
                </div>

                <div class="d-none d-lg-flex col-5 col-xl-4">
                    <p class="kbf-form-info align-self-center">{description}</p>
                </div>
    ';

    public static $FieldtypeTextareaMarkup = '

        <div data-value="" class="wysiwyg col-12 col-lg-10 col-xl-9 mb-5">
                <label class="text-uppercase px-3">{label}</label>
                <div class="editor"></div>
                <input {required} {msgRequired} type="hidden" name="{name}"  value="">
    
            </div>
    ';

    public static $FieldtypeImageMarkup = '
    
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
                
                <!-- Opis pola dla lg i wiekszych -->
                <div class="d-none d-lg-flex col-5 col-xl-4">
                    <p class="kbf-form-info align-self-center">{description}</p>
                </div>
                <!-- Koniec opisu pola dla lg i wiekszych -->
  
    ';


    private $name; // Nazwa formularza, atrybut "name"
    private $currentPage; // Przetwarzana strona

    private $fieldTypes = array(
        "FieldtypeText" => "text",
        "FieldtypeImage" => "file"
    );

    public function __construct($name, $page)
    {

        $this->name = $name;
        $this->currentPage = $page;

    }

    // Dodaje pole do formularza
    public function addField($field) {
        if (!isset($field)) return;
        $this->fields[] = $field;
    }

    public function addMarkup($markup) {
        if (!isset($markup)) return;
        $this->fields[$fieldset][] = "<div class='col-12 col-lg-10 col-xl-9 mb-5'>$markup</div>";
    }

    // Renderuje pole formularza
    private function renderFormField($field) {

        $markup = "";
        $urls = wire("urls");
        $sanitizer = wire("sanitizer");

        if (is_string($field)) {
            $markup = $field;
        }

        if ($field instanceof Field) {

            // Czy pole jest wymagane ?
            $required = $field->required ? "required" : "";
            $msgRequired = $required ? ' data-msg-required="' . $sanitizer->string($field->notes) . '"' : "";

            // Czy zastosowano maske wprowadzania ?
            $inputmask = $field->placeholder ? ' data-inputmask-regex="' . $field->placeholder . '"' : "";

            // Czy nalezy wyswietlic wartosc dla pola ?
            $value = $this->operation === "update" ? 'value="' . $this->currentPage->get($field->name) . '"' : "";

            // Typ pola
            $type = "";
            if (isset($this->fieldTypes[(String)$field->type])) $type = $this->fieldTypes[(String)$field->type];

            // Mapa placeholders
            $placeholdersMap = array(

                "{label}" => $field->label,
                "{icon}" => $field->icon,
                "{type}" => $type,
                "{name}" => $field->name,
                "{description}" => $field->description,
                "{required}" => $required,
                "{msgRequired}" => $msgRequired,
                "{inputmask}" => $inputmask,
                "{value}" => $value

            );

            // Renderuj w zaleznosci od typu pola
            switch ($field->type) {

                case 'FieldtypeText':
                    $markup = replacePlaceholders($placeholdersMap, self::$FieldtypeTextMarkup);
                    break;

                case 'FieldtypeTextarea':

                    $markup = replacePlaceholders($placeholdersMap, self::$FieldtypeTextareaMarkup);
                    break;

                case 'FieldtypeImage':

                    $placeholdersMap["{logoImage}"] = $urls->images . 'logo-placeholder.jpg';
                    $markup = replacePlaceholders($placeholdersMap, self::$FieldtypeImageMarkup);
                    break;

            };

        }

        return $markup;

    }

    // Renderuje wszystkie pola
    public function render() {

        $fieldsMarkup = '';

        $allFields = array(); // Wszystkie pola niezaleznie od fieldset
        $tabs = array_keys($this->fields);

        foreach ($this->fields as $_field) {
            $fieldsMarkup .= $this->renderFormField($_field);
        }

        // Ustaw nazwe przycisku submit
        $submitText = $this->operation === 'add' ? "Dodaj" : "Aktualizuj";

        // Zamien placeholders
        $formMarkup = replacePlaceholders(array(

            "{action}" => $this->action,
            "{name}" => $this->name,
            "{submitText}" => $submitText,
            "{fieldsMarkup}" => $fieldsMarkup

        ), self::$formMarkup);

        return  $formMarkup;

    }

}