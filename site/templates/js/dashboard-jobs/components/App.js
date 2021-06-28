class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        this.$deleteButtons = $('a[data-id]');
        this.$jobIdField = $('input[name="job_id"]');

    }


    addListeners() {

        let instance = this;

        this.$deleteButtons.on('click', function () {
            instance.$jobIdField.val($(this).data('id'));
        })

    }
}

export default App;