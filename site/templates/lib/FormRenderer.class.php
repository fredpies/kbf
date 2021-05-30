<?php namespace ProcessWire;

include_once "functions.php";
include_once "FormFields.php";

class FormRenderer
{

    public $fields = array(); // Pola dodawane do formularza
    public $action = ""; // Akcja formularza
    public $operation = "add"; // Rodzaj operacji wykonywanej przez formularz

    // Markup
    public static $formMarkup = '
        <form novalidate action="{action}" role="form" name="{name}" class="pl-lg-5">

            <div class="row justify-content-center">

               {fieldsMarkup}

                <div class="form-buttons row justify-content-between col-12 col-lg-10 col-xl-9 mt-5">
                    <button type="submit" class="btn btn-block btn-round shadow-none btn-primary">{submitText}</button>
                    <button type="button" class="kbf-back-button mt-0 btn btn-block btn-round shadow-none btn-secondary">Wróć</button>
                </div>

            </div>

        </form>
    ';

    // Wlasnosci formularza
    private $name; // Nazwa formularza, atrybut "name"
    private $currentPage;

    // Pole PW => pole HTML
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

    // Dodaje markup do formularza
    public function addMarkup($markup, $noColumn = false) {
        if (!isset($markup)) return;
        if ($noColumn) $this->fields[] = $markup;
        else $this->fields[] = "<div class='col-12 col-lg-10 col-xl-9 mb-5'>$markup</div>";
    }

    // Renderuje pole formularza
    private function renderFormField($field) {

        $markup = "";
        $urls = wire("urls");
        $sanitizer = wire("sanitizer");

        // Jezeli dodano markup
        if (is_string($field)) {
            $markup = $field;
        }

        // Jezeli dodano pole PW
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

            // Renderuj w zaleznosci od typu pola PW
            switch ($field->type) {

                case 'FieldtypeText':

                    $formFieldText = new FormFieldText();
                    $formFieldText->placeholderMap = $placeholdersMap;
                    $markup = $formFieldText->render();
                    break;

                case 'FieldtypeTextarea':

                    $formFieldText = new FormFieldTextArea();
                    $formFieldText->placeholderMap = $placeholdersMap;
                    if ($this->operation === "update") $formFieldText->value = $this->currentPage->get($field->name);
                    $markup = $formFieldText->render();
                    break;

                case 'FieldtypeImage':

                    $placeholdersMap["{logoImage}"] = $urls->images . 'logo-placeholder.jpg';
                    $formFieldText = new FormFieldImage();
                    $formFieldText->placeholderMap = $placeholdersMap;
                    $markup = $formFieldText->render();
                    break;

            };
        }

        return $markup;

    }

    // Renderuje wszystkie pola
    public function render() {

        $fieldsMarkup = '';

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