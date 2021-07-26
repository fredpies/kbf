import KbfAddressAutocomplete from "../../components/KbfAddressAutocomplete";

class App {

    constructor() {

        this.init();
        this.addListeners();

    }

    init() {

        this.autocomplete = new KbfAddressAutocomplete('.address-autocomplete');

    }

    addListeners() {

        this.autocomplete.on('address-change', function (e) {
            console.log(e.detail);
        })

    }

}

export default App;