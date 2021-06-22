import errors from "../modules/Errors";
import autosize from "autosize";

class KbfRepeaterItem extends EventTarget {

    constructor(selector) {

        super();

        let $ = window.$;

        // Sprawdz czy podano argumenty
        if (!selector) throw errors.argumentNotFound("Selector");

        this.$repeaterItems = $(selector);
        if(this.$repeaterItems.length === 0) throw errors.elementNotFound(selector);

        this.$currentInput = undefined;
        this.$currentItems = [];
        
        this.init();
        this.addListeners();
    }

    init() {

        let $ = window.$;
        let instance = this;

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        this.$removeButtons = this.$repeaterItems.find('.repeater-actions a');
        this.$repeaterItemContents = this.$repeaterItems.find('span');


    }

    addListeners() {

        let instance = this;

        this.$removeButtons.on('click', (e) => {
            instance.removeItem(e);

        });
        this.$repeaterItemContents.on('blur', function (e) {
            instance.currentRepeater = e.target.closest('.job-details-edit');
            instance.$currentInput = $(instance.currentRepeater).find('[type="hidden"]');
            instance.getCurrentItems();
            instance.updateInput();
        });

    }

    removeItem(e) {

        e.preventDefault();
        let instance = this;

        this.currentRepeater = e.target.closest('.job-details-edit');
        this.$currentInput = $(this.currentRepeater).find('[type="hidden"]');

        let $target = $(e.target.parentElement);

        $target.closest('.repeater-item').fadeOut(250, function () {
            this.remove();
            instance.getCurrentItems();
            instance.updateInput();
        })

    }

    updateInput() {

        let itemContents = [];

        this.$currentItems.each(function (idx, $item) {
            itemContents.push($item.innerHTML.trim());
        })

        this.$currentInput.val(itemContents.join(','));

    }

    getCurrentItems() {
       this.$currentItems = $(this.currentRepeater).find('.repeater-item span');
    }


}


export default KbfRepeaterItem;