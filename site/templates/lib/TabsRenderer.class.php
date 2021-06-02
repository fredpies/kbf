<?php namespace ProcessWire;

include_once "functions.php";

class TabsRenderer
{

    private $tabs = array();
    private $className = "";

    // Markups
    public static $tabsContainer = '{contents}';

    public static $tabsHeaderMarkup = '<div class="pb-4 mb-5">
        <div class="d-none d-sm-block mt-sm-4">
            <nav><div class="nav nav-tabs" id="nav-tab" role="tablist">
        
                {tabsNames}
        
        </div></nav></div></div>';


    public static $tabsNameMarkup = '
    
        <a class="{active} {tabsClass} nav-item nav-link" {firstTabId} data-toggle="tab"
                   href="#{tabName}" role="tab" aria-controls="{tabName}"
                   aria-selected="{selected}">{tabNameUppercase}</a>
    ';

    public static $tabsContentsMarkup = '<div class="tab-content" id="nav-tabContent">{tabContents}</div>';

    public static $tabContentMarkup = '<div class="tab-pane fade {active} {show}" id="{tabName}" role="tabpanel" aria-labelledby={tabName}">{tabContent}</div>';

    public function __construct($className)
    {
        if(!$className) return;
        $this->className = $className;

    }

    // Dodaje zawartosc zakladki
    public function addMarkup($markup, $tabName) {
        if (!isset($markup)) return;
        $this->tabs[$tabName] = $markup;
    }

    private function renderTabsHeader() {

        $tabs = array_keys($this->tabs);
        $tabsNamesMarkup = "";
        $tabCounter = 1;

        foreach ($tabs as $tab) {

            // Czy pierwszy tab ?
            $active = $tabCounter === 1 ? "active" : "";
            $firstTabId = $tabCounter === 1 ? 'id="nav-first-tab"' : "";
            $selected = $tabCounter === 1 ? "true" : "false";

            $tabsNamesMarkup .= replacePlaceholders(array(

                "{active}" => $active,
                "{selected}" => $selected,
                "{tabsClass}" => $this->className,
                "{firstTabId}" => $firstTabId,
                "{tabName}" => str_replace(" ", "-", $tab),
                "{tabNameUppercase}" => mb_strtoupper($tab, "utf-8")

            ), self::$tabsNameMarkup);

            $tabCounter++;
        }

        return replacePlaceholders(array(
            "{tabsNames}" => $tabsNamesMarkup
        ), self::$tabsHeaderMarkup);

    }

    // Renderuje tresci zakladek
    private function renderTabsContents() {

        $tabsContents = "";
        $counter = 1;

        foreach ($this->tabs as $tab => $markup) {

            // Czy pierwszy tab ?
            $active = $counter === 1 ? "active" : "";
            $show = $counter === 1 ? "show" : "";

            $tabName = str_replace(' ', '-', $tab);

            $tabsContents .= replacePlaceholders(array(

                "{active}" => $active,
                "{show}" => $show,
                "{tabName}" => $tabName,
                "{tabContent}" => $markup

            ), self::$tabContentMarkup);

            $counter++;

        }

        return $tabsContents;

    }

    // Renderuje zakladki
    public function render() {

        $contents = $this->renderTabsHeader();
        $contents .= $this->renderTabsContents();

        return replacePlaceholders(array(
            "{contents}" => $contents
        ), self::$tabsContainer);

    }

}