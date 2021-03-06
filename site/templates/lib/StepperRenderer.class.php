<?php namespace ProcessWire;

include_once "functions.php";

class StepperRenderer
{

    public $stepperName = 'Stepper';
    public $action = '';
    public $actionName = 'Dodaj';
    public $formName = "";

    private $steps = array();
    private $className = "";
    private $isHidden = false;

    // Markups

    public static $stepperMarkup = '
    
        <div class="{className}">

        <div class="container">

            {stepsHeader}
            
            <h3 class="font-weight-800 mb-2 section-title-3 text-center text-uppercase">{stepperName}</h3>
        
        </div>

        <form action="{action}" method="post" name="{formName}" class="{isHidden} position-relative">

            {messages}

            <div class="container container-stepper">
                {pages}
            </div>
            
            {stepsHeader}
            
            <div class="container  d-none d-md-block my-4">
                <div class="col-12 text-center"><label id="company_regon-error" class="error-stepper d-none text-danger" for="company_regon" style="">Sprawdź poprawność wypełnienia odpowiednich pól.</label></div>
                
                <div class="col-12 text-center text-md-right align-self-center">
                    <div class="row justify-content-center">
                        <div class="col-md-5 button-desktop button-prev">
                            <button type="button" disabled="disabled" class="fade show btn btn-round btn-block shadow-none btn-primary position-relative mr-lg-4"><i
                                        class="icon-left d-inline-block position-absolute fa fa-angle-left"></i> Poprzedni krok
                            </button>
                        </div>
                        
                        <div class="col-md-5 button-desktop button-next">
                            <button type="button" class="fade show btn btn-round btn-block shadow-none btn-primary position-relative mr-lg-4">Następny krok<i
                                        class="icon-right d-inline-block position-absolute fa fa-angle-right"></i></button>
                        </div>
                        
                        <div class="col-md-5 button-desktop button-register">
                            <button type="button" class="fade btn btn-round btn-block shadow-none btn-success mr-lg-4">{actionName}</button>
                        </div>
                    </div>
                </div>

            </div>

            <!--  Mobile version -->
            <div class="stepper-footer-mobile container px-0 d-md-none">
                <div class="col-12 text-center"><label class="error-stepper d-none mt-2 text-danger" style="">Sprawdź poprawność wypełnienia odpowiednich pól.</label></div>
                <div class="col-12 text-center text-md-right align-self-center">
                    <div class="row px-3 justify-content-around">
                        <div class="col-5 pl-0 pr-1 button-prev">
                            <button type="button" disabled="disabled" class="fade show btn btn-round btn-block shadow-none btn-secondary position-relative my-3 mr-lg-4"><i
                                        class="icon-left d-inline-block position-absolute fa fa-angle-left"></i> Wróć
                            </button>
                        </div>
                        <div class="col-5 pl-1 pr-0 button-next">
                            <button type="button" class="fade show btn btn-round btn-block shadow-none btn-secondary position-relative my-3 mr-lg-4">Dalej<i
                                        class="icon-right d-inline-block position-absolute fa fa-angle-right"></i></button>
                        </div>
                        <div class="col-5 pl-1 pr-0 button-register">
                            <button type="button" class="fade btn btn-round btn-block shadow-none btn-success my-3 mr-lg-4">{actionName}</button>
                        </div>
                    </div>
            </div>

        
        
        </form>
        
    </div>';


    public static $stepsMarkup = '<div class="steps d-none d-md-flex w-100 text-center mx-auto my-5">{steps}</div>';

    public static $stepMarkup = '
        <div class="step {isActive}">
                    <div class="step-name">{stepName}</div>
                    <div class="bullet">
                        <span>{stepNumber}</span>
                        <span class="fa fa-check"></span>
                    </div>
        </div>
    ';

    public static $messageMarkup = '<div class="top-message justify-content-center w-100 mx-0"><div class="text-center col-12 col-md-10 my-4"><h6 class="d-inline-block font-weight-400 page-info-msg-contents">{message}</h6></div></div>';

    public static $pageMarkup = '<div class="page d-none"><div class="col-12 mb-2">{page}</div></div>';

    public function __construct($className)
    {
        if(!$className) return;
        $this->className = $className;

    }

    public function __get($property) {
        return $this[$property];
    }

    public function __set($property, $value) {

        if ($property === "isHidden") {
            $this->isHidden = $value;
        } else {
            $this[$property] = $value;
        }

    }


    // Rejestruje krok
    public function registerStep($stepName, $message, $markup="") {
        $this->steps[] = array(
            "stepName" => $stepName,
            "message" => $message,
            "markup" => $markup
        );
    }

    // Renderuje stepper
    public function render()
    {

        // Kroki i komunikaty

        $steps = '';
        $messages = '';
        $pages = '';
        $counter = 1;

        foreach ($this->steps as $stepData) {

            if ($counter === 1) {
                $isActive = 'active'; // Tylko pierwszy krok jest aktywny
                $isShown = 'show'; // Tyleko pierwszy komunikat widoczny
            }
            else {
                $isActive = '';
                $isShown = '';
            }

            $steps .= replacePlaceholders(array(

                "{isActive}" => $isActive,
                "{stepNumber}" => $counter,
                "{stepName}" => $stepData["stepName"]

            ), self::$stepMarkup);


            $messages .= replacePlaceholders(array(

                "{message}" => $stepData["message"],
                "{isShown}" => $isShown

            ), self::$messageMarkup);


            $pages .= replacePlaceholders(array(
                "{page}" => $stepData["markup"]
            ), self::$pageMarkup);

            $counter++;

        }

        $stepsHeader = replacePlaceholders(array( "{steps}" => $steps ), self::$stepsMarkup);

        $isHiddenClass = "";
        if ($this->isHidden) $isHiddenClass = "d-none";

        return replacePlaceholders(array(
            "{className}" => $this->className,
            "{isHidden}" => $isHiddenClass,
            "{stepsHeader}" => $stepsHeader,
            "{stepperName}" => $this->stepperName,
            "{messages}" => $messages,
            "{pages}" => $pages,
            "{actionName}" => $this->actionName,
            "{action}" => $this->action,
            "{formName}" => $this->formName

        ), self::$stepperMarkup);

    }
}