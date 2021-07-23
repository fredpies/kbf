import KbfForm from "../../components/KbfForm";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import config from "../../config/config";

class KbfSendCv extends KbfForm {

    constructor() {
        super({ formName: 'send-cv'}, 'pl');
    }

    init() {

        super.init();

        this.$jobNameField = $('input[name="job_name"]');
        this.$jobURLField = $('input[name="job_url"]');
        this.$confirmationPageURLField = $('input[name="confirmation_page_url"]');
        this.$jobIdField = $('input[name="job_id"]');
        this.$nameField = $('input[name="name"]');
        this.$phoneField = $('input[name="phone"]');
        this.$emailField = $('input[name="email"]');
        this.$companyEmailField = $('input[name="company_email"]');
        this.$companyIdField = $('input[name="company_id"]');
        this.$attachmentField = $('input[name="attachment"]');

        this.$submitButton = $('button.send-cv[type="submit"]');
        this.formData = new FormData();

        this.preloaderButton = new KbfPreloaderButton('button.send-cv[type="submit"]');


    }

    addListeners() {

        let instance = this;

        this.$submitButton.on('click', function (e) {

            e.preventDefault();
            instance.hostname = window.location.hostname;

            instance.formData.append('subject', `Aplikacja na stanowisko: "${instance.$jobNameField.val()}"`);
            instance.formData.append('to', instance.$companyEmailField.val());
            instance.formData.append('from', 'administrator@webplanet.biz'); //TODO: Zmiana wg configa

            instance.formData.append('name', instance.$nameField.val());
            instance.formData.append('phone', instance.$phoneField.val());
            instance.formData.append('email', instance.$emailField.val());

            instance.formData.append('attachment', instance.$attachmentField[0].files[0]);

            let message = `
                <p style="font-weight: bold">Dzień dobry.</p>
                <p>W załączeniu przesyłam swoją aplikację.</p>
                <p>Link do ogłoszenia : <a href="${instance.hostname + instance.$jobURLField.val()}">${instance.hostname + instance.$jobURLField.val()}</a> </p>
                <p>Dane kontaktowe :</p>
                <p>Numer telefonu: ${instance.$phoneField.val()}</p>
                <p>Adres e-mail: ${instance.$emailField.val()}</p>
                <p style="font-weight: bold">Pozdrawiam,</p>
                <p>${instance.$nameField.val()}</p>
            `;

            instance.formData.append('bodyHTML', message);
            instance.validate();

            if (instance.formIsValid) {
                $.ajax(`${config.apiEndpoint}api/mail-cv/`, {
                    type: 'POST',
                    data: instance.formData,
                    processData: false,
                    contentType: false,

                }).done(function () {
                    window.location.replace(window.location.protocol + '//' + instance.hostname + instance.$confirmationPageURLField.val() + `?company_id=${instance.$companyIdField.val()}&job_id=${instance.$jobIdField.val()}`);

                }).fail(function () {
                    console.log('Error sending CV.');
                })
            }
        })

    }

}

export default KbfSendCv;