import KbfForm from "../../components/KbfForm";

class KbfSendForm extends KbfForm {

    constructor() {

        //TODO: Wersje jezykowe do opracowania pozniej
        let lang = 'pl';

        let formConfig = {
            formName: 'send-message',
            email: {regex: '.+@.+'},
            validator: {
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true
                    }
                },
                messages: {
                    name: lang === 'pl' ? 'Pole z imieniem i nazwiskiem nie może być puste.' : '',
                    email: {
                        required: lang === 'pl' ? 'Pole e-mail nie może być puste.' : '',
                        email: lang === 'pl' ? 'Pole e-mail posiada niewłaściwy format.' : ''
                    },

                    message: lang === 'pl' ? 'Treść wiadomości nie może być pusta.' : '',

                }
            }
        };

        super(formConfig, 'pl');
    }

}

export default KbfSendForm;