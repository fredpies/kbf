<?php namespace ProcessWire;

include_once "functions.php";

class StepperRenderer
{


    public $stepperName = 'Stepper';
    public $action = '';
    public $actionName = 'Dodaj';

    private $steps = array();
    private $className = "";

    // Markups

    public static $stepperMarkup = '
    
        <div class="{className}">

        <div class="container">

            {stepsHeader}
            
            <h3 class="font-weight-800 mb-0 pt-lg-5 py-lg-0 py-4 section-title-3 text-center text-uppercase">{stepperName}</h3>
        
        </div>

        <form action="{action}" class="position-relative">

            {messages}
            
            <div class="container overflow-hidden">
                <div class="page-wrapper d-flex py-5">

                    {pages}
                                        
                </div>
            </div>


            <div class="container d-none d-md-block">
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
            <div class="container px-0 d-md-none">
                <div class="col-12 text-center text-md-right align-self-center">
                    <div class="row justify-content-around">
                        <div class="col-5 pl-0 pr-1 button-prev">
                            <button type="button" disabled="disabled" class="fade show btn btn-round btn-block shadow-none btn-primary position-relative mr-lg-4"><i
                                        class="icon-left d-inline-block position-absolute fa fa-angle-left"></i> Wróć
                            </button>
                        </div>
                        <div class="col-5 pl-1 pr-0 button-next">
                            <button type="button" class="fade show btn btn-round btn-block shadow-none btn-primary position-relative mr-lg-4">Dalej<i
                                        class="icon-right d-inline-block position-absolute fa fa-angle-right"></i></button>
                        </div>
                        <div class="col-5 pl-1 pr-0 button-register">
                            <button type="button" class="fade btn btn-round btn-block shadow-none btn-success mr-lg-4">{actionName}</button>
                        </div>
                    </div>
            </div>


        </form>

    </div>
    
    
    ';


    public static $stepsMarkup = '<div class="steps d-none d-md-flex w-100 text-center mx-auto mt-3">{steps}</div>';

    public static $stepMarkup = '
        <div class="step {isActive}">
                    <div class="step-name">{stepName}</div>
                    <div class="bullet">
                        <span>{stepNumber}</span>
                        <span class="fa fa-check"></span>
                    </div>
        </div>
    ';

    public static $messageMarkup = '<div class="w-100 page-info-msg fade {isShown}" style="font-size: 0.75rem;"><span class="d-inline-block page-info-msg-contents"><i class="fas fa-info text-primary mr-2"></i>{message}</span></div>';

    public static $pageMarkup = '<div class="page">{page}</div>';

    public function __construct($className)
    {
        if(!$className) return;
        $this->className = $className;

    }



    // Rejestruje krok
    public function registerStep($stepName, $message, $markup = '') {

        $this->steps[] = array(
            "stepName" => $stepName,
            "message" => $message,
            "page" => $markup
        );
    }

    // Renderuje stepper
    public function render()
    {

        // Kroki i komunikaty

        $steps = '';
        $messages = '';
        $pages = '';
        $isShown = '';
        $isActive = '';
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
                "{page}" => $stepData["page"]
            ), self::$pageMarkup);

            $counter++;

        }

        $stepsHeader = replacePlaceholders(array( "{steps}" => $steps ), self::$stepsMarkup);


        return replacePlaceholders(array(
            "{className}" => $this->className,
            "{stepsHeader}" => $stepsHeader,
            "{stepperName}" => $this->stepperName,
            "{messages}" => $messages,
            "{pages}" => $pages,
            "{actionName}" => $this->actionName

        ), self::$stepperMarkup);

    }
}