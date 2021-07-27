import KbfForm from "../../components/KbfForm";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfFooterTop from "../../components/KbfFooterTop";

class App extends KbfForm {

    constructor() {
        super({

            formName: 'change-password',
            rules: {
                pass: {
                    minlength: 8
                },
                'pass-new': {
                    minlength: 8,
                },
                'pass-repeat': {
                    minlength: 8,
                    equalTo: "#pass-new"
                }
            },

            messages: {
                pass: {
                    minlength: 'Hasło musi posiadać minimum 8 znaków.'
                },
                'pass-new': {
                    minlength: 'Hasło musi posiadać minimum 8 znaków.',
                },
                'pass-repeat': {
                    minlength: 'Hasło musi posiadać minimum 8 znaków.',
                    equalTo: 'Hasła nie mogą się różnić.'
                }
            }


        }, 'pl');
        this.init();
        this.addListeners();
    }

    init() {

        new KbfFooterTop();
        this.formElement = $('form[name="change-password"]');
        this.$submitButton = $('.submit-button');
        new KbfPreloaderButton('.back-button');


    }

    addListeners() {

        let instance = this;
        this.$submitButton.on('click', function (e) {

            e.stopPropagation();
            e.preventDefault();

            instance.validate();
            if (instance.formIsValid) {
             instance.formElement.submit();
            }

        })
    }

    sendConfirmationLink() {

    }


}

export default App;