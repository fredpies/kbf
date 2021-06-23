import errors from "../modules/Errors";
import { replacePlaceholders } from "../functions/library";

class KbfRepeater extends EventTarget {

    constructor(selector) {

        super();

        let $ = window.$;

        // Sprawdz czy podano argumenty
        if (!selector) throw errors.argumentNotFound("Selector");

        this.$repeaterItems = $(selector);
        if(this.$repeaterItems.length === 0) throw errors.elementNotFound(selector);

        this.$currentHiddenInput = undefined;
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

        this.$addButtons = this.$repeaterItems.closest('.job-details-edit').find('.add-button');
        this.$removeButtons = this.$repeaterItems.find('.repeater-actions a');
        this.$confirmationButtons= $('.confirm-button');
        this.$repeaterItems = this.$repeaterItems.find('span');

        this.$confirmation = $('#confirmation');
    }

    addListeners() {

        let instance = this;

        this.$confirmationButtons.on('click', function (e) {
            e.preventDefault();
            instance.$confirmation.modal('hide');
            instance.removeItem(instance.currentRemoveButton);
        })
        
        this.$removeButtons.on('click', (e) => {
            instance.currentRemoveButton = e.target;
            instance.$confirmation.modal();
        });

        this.$repeaterItems.on('blur', function (e) {
            instance.updateHandler(e);
        });

        this.$addButtons.on('click', function (e) {

            e.preventDefault();

            let $this = $(this);

            let $itemsContainer = $(this).closest('.job-details-edit').find('.list-group');
            let content = replacePlaceholders({ '{itemName}': $this.parent().prev().val() }, KbfRepeater.itemTemplate);

            let $contentElement = $(content);
            $itemsContainer.append($contentElement);
            $this.parent().prev().val('');

            $contentElement.animate({
                opacity: 1,
                bottom: 0
            }, function () {

                let $removeButton = $contentElement.find('.repeater-actions a');
                let $span = $contentElement.find('span');

                // Dodaj listenery do dodanego elementu
                $removeButton.on('click', function (e) {
                    e.preventDefault();
                    instance.removeItem(e.target)
                })

                $span.on('blur', function (e) {
                    instance.updateHandler(e);
                })

                // Zaktualizuj ukryte pole
                instance.currentRepeater = $contentElement[0].closest('.job-details-edit');
                instance.$currentHiddenInput = $(instance.currentRepeater).find('[type="hidden"]');
                instance.getCurrentItems();
                instance.updateInput();

            })
        })
    }

    updateHandler(e) {

        this.currentRepeater = e.target.closest('.job-details-edit');
        this.$currentHiddenInput = $(this.currentRepeater).find('[type="hidden"]');
        this.getCurrentItems();
        this.updateInput();

    }

    removeItem(item) {

        let instance = this;

        this.currentRepeater = item.closest('.job-details-edit');
        this.$currentHiddenInput = $(this.currentRepeater).find('[type="hidden"]');

        let $target = $(item.parentElement);

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

        this.$currentHiddenInput.val(itemContents.join(','));

    }

    getCurrentItems() {
       this.$currentItems = $(this.currentRepeater).find('.repeater-item span');
    }


}

KbfRepeater.itemTemplate = '<li style="opacity: 0; bottom: -8px" class="repeater-item position-relative list-group-item d-flex"><span spellcheck="false" contenteditable="true" class="col-10">{itemName}</span><div class="repeater-actions d-inline-block d-md-flex justify-content-end col-3"><a class="d-inline-block ml-2" href="#">Usuń</a></div></li>';

export default KbfRepeater;