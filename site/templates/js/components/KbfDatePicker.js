import errors from "../modules/Errors";
import 'app-datepicker';

class KbfDatepicker extends EventTarget {

    constructor(selector, inputElementSelector) {

        super();

        let $ = window.$;

        // Sprawdz czy podano argumenty
        if (!selector) throw errors.argumentNotFound("Selector");
        if (!inputElementSelector) throw errors.argumentNotFound("inputElementSelector");

        this.$datepicker = $(selector);
        this.$inputElement = $(inputElementSelector);

        if(this.$datepicker.length === 0) throw errors.elementNotFound(selector);
        if(this.$inputElement.length === 0) throw errors.elementNotFound(selector);

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

    }


    addListeners() {

        let instance = this;

        function datePickerHandler() {
            this.$datepicker.on('datepicker-value-updated' , function (e) {
                instance.$inputElement.val(e.originalEvent.detail.value);
                instance.hideDatePicker();
            })
        }

        this.$inputElement.on('click', datePickerHandler.bind(this));
        this.$inputElement.on('focus', this.showDatePicker.bind(this))

        $(window).on('click', function (e) {
            if(e.target.tagName !== 'APP-DATEPICKER' && e.target.tagName !== 'INPUT') {
                instance.hideDatePicker();
                $('[name="job_expire"]').off('click', datePickerHandler);
            }
        })
    }

    showDatePicker() {
        this.$datepicker.fadeIn(200);
    }

    hideDatePicker() {
        this.$datepicker.fadeOut(200);
    }
}

export default KbfDatepicker