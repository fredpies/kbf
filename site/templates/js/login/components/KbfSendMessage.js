import KbfForm from "../../components/KbfForm";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import config from "../../config/config";

class KbfSendMessage extends KbfForm {

    constructor() {
        super({ formName: 'send-message'}, 'pl');
        this.init();
    }

    init() {

        super.init();

        this.formData = new FormData();
        this.$nameField = $('input[name="name"]');
        this.$emailField = $('input[name="email"]');
        this.$companyEmailField = $('input[name="company_email"]');
        this.$messageField = $('textarea[name="message"]');
        this.$submitButton = $('button.send-message[type="submit"]');

        this.$sendMessageContainer = $('.kbf-send-message');
        this.$sendMessageConfirmation = $('.send-message-confirmation');
        this.$h6 = $('.container h6');

        this.preloaderButton = new KbfPreloaderButton('button.send-message[type="submit"]', false);

    }

    addListeners() {

        let instance = this;

        this.$submitButton.on('click', function (e) {

            e.preventDefault();

            instance.formData.append('subject', `Nowa wiadomość z KBF`);
            instance.formData.append('to', instance.$companyEmailField.val());
            instance.formData.append('from', instance.$emailField.val());
            instance.formData.append('fromName', instance.$nameField.val());
            instance.formData.append('bodyHTML', instance.$messageField.val());

            instance.validate();

            if (instance.formIsValid) {
                instance.preloaderButton.triggerStart(instance.$submitButton[0]);

                $.ajax(`${config.apiEndpoint}api/mail/`, {
                    type: 'POST',
                    data: instance.formData,
                    processData: false,
                    contentType: false,

                }).done(function () {

                    instance.$sendMessageContainer.addClass('d-none');
                    instance.$h6.addClass('d-none');
                    instance.$sendMessageConfirmation.removeClass('d-none');

                }).fail(function () {
                    console.log('Error sending message.');
                })
            }

        });
    }

}

export default KbfSendMessage;