import KbfForm from "../../components/KbfForm";
import config from "../../config/config";

class KbfSendCv extends KbfForm {

    constructor() {
        super({ formName: 'send-cv'}, 'pl');
    }

    init() {

        this.$jobNameField = $('input[name="job_name"]');
        this.$jobURLField = $('input[name="job_url"]');
        this.$nameField = $('input[name="name"]');
        this.$phoneField = $('input[name="phone"]');
        this.$emailField = $('input[name="email"]');
        this.$attachmentField = $('input[name="attachment"]');

        this.$submitButton = $('button.send-cv[type="submit"]');
        this.formData = new FormData();

    }

    addListeners() {

        let instance = this;

        this.$submitButton.on('click', function (e) {

            e.preventDefault();

            instance.formData.append('to', 'pkwiecien13@gmail.com');
            instance.formData.append('to', 'pkwiecien13@gmail.com');
            instance.formData.append('name', instance.$nameField.val());
            instance.formData.append('subject', `Aplikacja na stanowisko: ${instance.$jobNameField.val()}`);
            instance.formData.append('phone', instance.$phoneField.val());
            instance.formData.append('email', instance.$emailField.val());
            instance.formData.append('attachment', instance.$attachmentField[0].files[0]);

            let message = `
                <p style="font-weight: bold">Dzień dobry.</p>
                <p>W załączeniu przesyłam aplikację na stanowisko pracy zaproponowane w ofercie.</p>
                <p>Link do ogłoszenia : <a href="${instance.$jobURLField.val()}">${instance.$jobURLField.val()}</a> </p>
                <p>Moje dane kontaktowe :</p>
                <p>Telefon: ${instance.$phoneField.val()}</p>
                <p>Email: ${instance.$emailField.val()}</p>
                <p style="font-weight: bold">Pozdrawiam,</p>
                <p>${instance.$nameField.val()}</p>
            `;

            instance.formData.append('bodyHTML', message);

            $.ajax(`${config.apiEndpoint}api/mail-cv/`, {
                type: 'POST',
                data: instance.formData,
                processData: false,
                contentType: false,

            }).done(function (res) {
                console.log(res);
            }).fail(function () {
                console.log('fail');
            })


        })


    }

}

export default KbfSendCv;