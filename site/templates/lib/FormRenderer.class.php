<?php namespace ProcessWire;

include_once "functions.php";
include_once "FormFields.php";

class FormRenderer
{

    public $fields = array(); // Pola dodawane do formularza
    public $action = ""; // Akcja formularza
    public $operation = "add"; // Rodzaj operacji wykonywanej przez formularz

    // Config
    public $noTag = false;
    public $noFooter = false;
    public $onlyFields = false;

    // Markups
    public static $formMarkup = '
        <form class="{isHidden}" novalidate action="{action}" role="form" name="{name}" class="pl-lg-5">

            <div class="row justify-content-center  w-100">

               {fieldsMarkup}

                <div class="form-buttons row justify-content-between col-12 col-lg-10 col-xl-9 mt-5">
                    <button type="submit" class="btn btn-block btn-round shadow-none btn-primary">{submitText}</button>
                    <button type="button" class="kbf-back-button mt-0 btn btn-block btn-round shadow-none btn-secondary">Wróć</button>
                </div>

            </div>

        </form>
    ';

    public static $formMarkupNoTag = '
        <div class="{isHidden} row justify-content-center w-100">

           {fieldsMarkup}

            <div class="form-buttons row justify-content-between col-12 col-lg-10 col-xl-9 mt-5">
                <button type="submit" class="btn btn-block btn-round shadow-none btn-primary">{submitText}</button>
                <button type="button" class="kbf-back-button mt-0 btn btn-block btn-round shadow-none btn-secondary">Wróć</button>
            </div>

        </div>
    ';

    public static $formMarkupNoFooter = '
        <form novalidate action="{action}" role="form" name="{name}" class="{isHidden} pl-lg-5">

            <div class="row justify-content-center  w-100">

               {fieldsMarkup}

            </div>

        </form>
    ';

    public static $formMarkupOnlyFields = '
        <div class="{isHidden} row justify-content-center mx-auto w-100">

           {fieldsMarkup}

        </div>
    ';

    // Wlasnosci formularza
    private $name; // Nazwa formularza, atrybut "name"
    private $templateFields;
    private $isHidden = false; // Czy renderowac ukryty formularz

    // TODO: Usunac $templateFields
    public function __construct($name, $templateFields = array())
    {

        $this->name = $name;
        $this->templateFields = $templateFields;

    }

    public function __get($property) {
        return $this[$property];
    }

    public function __set($property, $value) {

        if ($property === "noTag") {
            $this->noFooter = false;
            $this->onlyFields = false;
        }

        if ($property === "noFooter") {
            $this->noTag = false;
            $this->onlyFields = false;
        }

        if ($property === "onlyFields") {
            $this->noTag = false;
            $this->noFooter = false;
        }

        if ($property === "isHidden") {
            $this->isHidden = $value;
        }
        if ($property === "action") {
            $this->action = $value;
        }

    }


    // Dodaje markup do formularza
    public function addMarkup($markup, $noColumn = false) {
        if (!isset($markup)) return;
        if ($noColumn) $this->fields[] = $markup;
        else $this->fields[] = "<div class='d-flex justify-content-center w-100'>$markup</div>";
    }

    // Renderuje wszystkie pola
    public function render() {

        $fieldsMarkup = "";
        $template = self::$formMarkup;

        // Ustaw rodzaj markup'u w zaleznosci od konfiguracji
        if ($this->noTag) $template = self::$formMarkupNoTag;
        if ($this->noFooter) $template = self::$formMarkupNoFooter;
        if ($this->onlyFields) $template = self::$formMarkupOnlyFields;

        foreach ($this->fields as $_field) {
            $fieldsMarkup .= $_field;
//            $fieldsMarkup .= $this->renderFormField($_field);
        }

        // Ustaw nazwe przycisku submit
        $submitText = $this->operation === 'add' ? "Dodaj" : "Aktualizuj";

        $isHiddenClass = "";
        if ($this->isHidden) $isHiddenClass = "d-none";

        // Zamien placeholders
        $formMarkup = replacePlaceholders(array(

            "{action}" => $this->action,
            "{name}" => $this->name,
            "{submitText}" => $submitText,
            "{fieldsMarkup}" => $fieldsMarkup,
            "{isHidden}" => $isHiddenClass

        ), $template);

        return  $formMarkup;

    }

}