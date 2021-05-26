<?php namespace ProcessWire;

class FormRenderer
{

    public $fields = array(); // Pola dodawane do formularza
    public $action; // Akcja formularza
    public $operation = "add"; // Rodzaj operacji wykonywanej przez formularz

    private $name; // Nazwa formularza, atrybut "name"
    private $currentPage; // Przetwarzana strona

    public function __construct($name, $page)
    {

        $this->name = $name;
        $this->currentPage = $page;

    }

    // Dodaje pole do formularza
    public function addField($field, $fieldset = "main") {
        if (!isset($field)) return;
        $this->fields[$fieldset][] = $field;
    }

    public function addMarkup($markup, $fieldset = "main") {
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


            // Slownik dla pol PW
            $fieldTypes = array(
                "FieldtypeText" => "text",
                "FieldtypeImage" => "file"
            );

            // Czy pole jest wymagane ?
            $required = $field->required ? "required" : "";
            $msg_required = $required ? ' data-msg-required="' . $sanitizer->string($field->notes) . '"' : "";

            // Czy zastosowano maske wprowadzania ?
            $inputmask = $field->placeholder ? ' data-inputmask-regex="' . $field->placeholder . '"' : "";

            // Czy nalezy wyswietlic wartosc dla pola ?
            $value = $this->operation === "update" ? 'value="' . $this->currentPage->get($field->name) . '"' : "";

            // Renderuj w zaleznosci od typu pola
            switch ($field->type) {

                case 'FieldtypeText':
                    $markup = '
                <!-- Pole formularza -->
                <div class="col-12 col-lg-5 mb-2">
                    <div class="input-group input-group-lg input-group-round mb-4">
                        <label class="text-uppercase px-3">' . $field->label . '</label>
                        <div class="input-group-inner">
                            <div class="input-group-prepend">
                                <span class="input-group-text input-group-icon"><i class="fa ' . $field->icon . '"></i></span>
                            </div>

                            <input autocomplete="off" type="' . $fieldTypes[(String)$field->type] . '" class="form-control form-control-lg"
                                   name="' . $field->name . '"
                                   ' . $required . $msg_required . $inputmask . $value . '>

                            <div class="input-focus-bg"></div>

                        </div>
                    </div>
                </div>
                <!-- Koniec pola formularza-->

                <!-- Opis pola dla lg i wiekszych -->
                <div class="d-none d-lg-flex col-5 col-xl-4">
                    <p class="kbf-form-info align-self-center">' . $field->description . '</p>
                </div>
                <!-- Koniec opisu pola dla lg i wiekszych -->
            ';;
                    break;

                case 'FieldtypeTextarea':
                    $markup = '
    
            <div data-value="" class="wysiwyg col-12 col-lg-10 col-xl-9 mb-5">
                <label class="text-uppercase px-3">' . $field->label . '</label>
                <div class="editor"></div>
                <input ' . $required . $msg_required . ' type="hidden" name="' . $field->name . '"  value="">
    
            </div>
    
            ';
                    break;

                case 'FieldtypeImage':

                    $logoImage = $urls->images . 'logo-placeholder.jpg';

                    $markup = '
                    
                    <div class="col-12 col-lg-5 mb-2">
                    <div class="kbf-logo-uploader-label text-uppercase px-3">' . $field->label . '</div>
                    <label class="kbf-logo-uploader input-group input-group-lg input-group-round mb-4" for="' . $field->name . '">
                      
                         <input id="' . $field->name . '" type="' . $fieldTypes[(String)$field->type] . '" class="d-none form-control form-control-lg"
                                       name="' . $field->name . '"
                                       ' . $required . $value . '>
                                       
                        <div class="d-flex no-gutters input-focus-bg justify-content-center">
                            <img alt="logo-placeholder" src="' . $logoImage . '" class="col-3 my-2 kbf-logo-uploader-image">
                        </div>
                            
                    </label>
                    
                   
                    
                    
                    
                    </div>
                
                <!-- Opis pola dla lg i wiekszych -->
                <div class="d-none d-lg-flex col-5 col-xl-4">
                    <p class="kbf-form-info align-self-center">' . $field->description . '</p>
                </div>
                <!-- Koniec opisu pola dla lg i wiekszych -->
                
            ';
                    break;

            };

        }

        return $markup;

    }

    // Renderuje formularz
    public function render() {

        $formMarkup = '
        
            <form novalidate action="{action}" role="form" name="{name}" class="pl-lg-5">

            <!-- Pola formularza-->
            <div class="row justify-content-center">

               {fieldsMarkup}

                <div class="form-buttons row justify-content-between col-12 col-lg-10 col-xl-9 mb-5">
                    <button type="submit" class="btn btn-block btn-round shadow-none btn-primary">{submitText}</button>
                    <button type="button" class="kbf-back-button mt-0 btn btn-block btn-round shadow-none btn-secondary">Wróć</button>
                </div>

            </div>
            <!-- Koniec pol formularza-->

        </form>
        
        ';

        $fieldsMarkup = '';

        // Renderuj dla urzadzen stacjonarnych

            // Sprawdz ile wystepuje grup pol
            // Jezeli wystepuje wiecej niz jedna grupa pol utworz zakladki
                // Utworz mape pole - grupa pol
                // Renderuj pola dla kazdej grupy pol

        foreach ($this->fields["main"] as $field) {
            $fieldsMarkup .= $this->renderFormField($field);
        }

        // Ustaw nazwe przycisku submit
        $submitText = $this->operation === 'add' ? "Dodaj" : "Aktualizuj";

        $formMarkup = str_replace("{name}", $this->name, $formMarkup);
        $formMarkup = str_replace("{fieldsMarkup}", $fieldsMarkup, $formMarkup);
        $formMarkup = str_replace("{submitText}", $submitText, $formMarkup);
        $formMarkup = str_replace("{action}", $this->action, $formMarkup);

        return $formMarkup;
    }

}