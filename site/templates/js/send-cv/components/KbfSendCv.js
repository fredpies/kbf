import KbfForm from "../../components/KbfForm";

class KbfSendCv extends KbfForm {

    constructor() {
        super({ formName: 'send-cv'}, 'pl');
    }

    init() {

        this.$submitButton = $('button.send-cv[type="submit"]');

    }

    addListeners() {

        this.$submitButton.on('click', function (e) {

            e.preventDefault();
            $.post( "https://webplanet.biz/kbf/api/mail/",
                {
                    from: "administrator@webplanet.biz",
                    to: "pkwiecien13@gmail.com",
                    subject: "test",
                    bodyHTML: "<p><b>test</b></p>"

                })
                .fail(function () {
                    console.log('fail')
                })
                .done(function( data ) {
                    console.log( "Data Loaded: " + JSON.stringify(data) );
                });

        })


    }

}

export default KbfSendCv;