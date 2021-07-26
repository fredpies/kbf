import errors from "../modules/Errors";

class KbfTagify extends EventTarget {

    constructor(selector) {

        super();

        let $ = window.$;

        // Sprawdz czy podano argumenty
        if (!selector) throw errors.argumentNotFound("Selector");
        this.$tagifyElement = $(selector);
        if(this.$tagifyElement.length === 0) throw errors.elementNotFound(selector);

        this.init();
        this.addListeners();
    }

    init() {

        let $ = window.$;
        let instance = this;

        this.$tagifyElement.tagify().on('change', function (e, value) {

            // Aktualizuj wartosc pola
            if (value) {

                let currentValue = JSON.parse(value);

                currentValue = currentValue.map(function (nextValue) {
                    return nextValue.value
                })

                instance.$tagifyElement.val(currentValue.join(','));
            }
            else instance.$tagifyElement.val('');
        });

    }


    addListeners() {

    }
}


export default KbfTagify;