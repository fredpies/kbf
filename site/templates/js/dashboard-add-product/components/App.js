import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfWysiwyg from "../../components/KbfWysiwyg";
import KbfForm from "../../components/KbfForm";
import KbfProductImagesAdd from "../../components/KbfProductImagesAdd";
import Alpine from "alpinejs";
import config from "../../config/config";

class App {

    constructor() {

        this.init();

    }

    init() {

        // Wysiwyg
        // TODO: Musi byc zmienione, ukryte pole musi byc niezalezne od kontekstu
        this.$descriptionFieldHidden = $('[name="product_description_hidden"]');
        this.wysiwyg = new KbfWysiwyg('.wysiwyg');

        let htmlToInsert = this.$descriptionFieldHidden.val();
        let editor = document.getElementsByClassName('ql-editor')
        editor[0].innerHTML = htmlToInsert

        let component = this;

        new KbfProductImagesAdd();

        // Adding product
        window.addProduct = function () {

            return {

                init() {

                    this.$form = $('[name="dashboard-add-product"]');
                    this.formData = new FormData();
                    this.validate = component.validate;
                    this.formIsValid = component.formIsValid;
                    this.preloaderButton = new KbfPreloaderButton('.submit-button', false);
                    this.backButton = new KbfPreloaderButton('.back-button');
                    this.form = new KbfForm({formName: 'dashboard-add-product'}, 'pl');

                },

                addProduct() {

                    let instance = this;

                    this.form.validate();
                    if (window.imageNames.length === 0 ) {

                        console.log($('#product_images-error'));
                        $('#product_images-error').attr('style', 'display: block')
                    }
                    else $('#product_images-error').attr('style', 'display: none')

                    if(this.form.formIsValid && window.imageNames.length > 0) {

                        this.preloaderButton.triggerStart($('.submit-button')[0]);
                        this.formData.append('company_id', this.$el.dataset.companyId);
                        this.formData.append('product_name', this.$form.find('input[name="product_name"]').val());
                        this.formData.append('product_price', this.$form.find('input[name="product_price"]').val());
                        this.formData.append('product_inventory', this.$form.find('input[name="product_inventory"]').val());
                        this.formData.append('product_description', this.$form.find('input[name="product_description"]').val());
                        this.formData.append('image_names', window.imageNames);

                        $.ajax(config.apiEndpoint + 'api/add-product/', {
                            type: 'POST',
                            data: instance.formData,
                            processData: false,
                            contentType: false,

                        }).done(function (res) {
                            instance.$form.submit();
                        }).fail(function () {
                            console.log('Error');
                        })

                    }
                }
            }
        }

        window.Alpine = Alpine;
        Alpine.start();
    }



}

export default App;