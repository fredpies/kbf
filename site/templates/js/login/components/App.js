import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import KbfForm from "../../components/KbfForm";

class App extends KbfForm {

    constructor() {
        super({ formName: 'login-form'}, 'pl');
        this.init();
        this.addListeners();
  }

    init() {

        super.init();

        this.$loginForm = $('.login-form');
        this.$submitButton = $('.submit-button');
        this.preloaderButton = new KbfPreloaderButton('.submit-button', false);

    }

    addListeners() {

        let instance = this;

        this.$submitButton.on('click', function (e) {

            e.preventDefault();
            instance.validate();

            if (instance.formIsValid) {
                instance.preloaderButton.triggerStart(instance.$submitButton[0]);
                instance.$loginForm.submit();
            }
        })
    }
}

export default App;