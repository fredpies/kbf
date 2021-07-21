import KbfStepper from "../../components/KbfStepper";
import KbfPreloaderButton from "../../components/KbfPreloaderButton";
import errors from "../../modules/Errors";
import KbfIndustrySwitcher from "../../components/KbfIndustrySwitcher";
import config from "../../config/config";
import {replacePlaceholders} from "../../functions/library";
import KbfTagify from "../../components/KbfTagify";

class App {

    constructor() {

        this.regonNotExists = true; // Czy REGON istnieje w bazie KBF
        this.regonFound = true; // Czy REGON istnieje w bazie KBF
        this.regonErrorVisible = false; // Czy wyswietlony jest blad regon

        this.imageName = 'logo-placeholder.jpg';
        this.imageType = 'image/jpg';

        this.init();
        this.addListeners();

    }

    init() {

        let instance = this;

        this.$form = $('form[name="register-company"]');

        this.companyInfo = $('.company-info')[0];
        this.companyDescription = $('.company-description')[0];
        this.companyInfoContents = this.companyInfo.innerHTML; // Placeholder z informacjami o firmie
        this.companyDescriptionContents = this.companyDescription.innerHTML; // Placeholder z informacjami o firmie
        this.$kbfMiniMapContainer = $('#kbf-minimap').parent();

        this.searchByREGONButtonPreloader = new KbfPreloaderButton('.kbf-search-button');

        // Cropper
        this.$modal = $('#modal');
        this.image = document.getElementById('sample_image');
        this.cropper = null;
        this.$companyLogo = $('#company_logo');
        this.$logoPlaceholder = $('.kbf-logo-uploader-image');

        // Przycisk wyszukiwania po numerze REGON
        this.$searchByREGONButton = $('.kbf-search-button');
        this.$searchByREGONButton.attr('disabled', 'disabled');

        //Tagify
        new KbfTagify('input.kbf-keywords');

        // Sprawdz czy walidator istnieje
        if (!$.fn.validate) throw errors.noValidator();

        // Ustaw walidator dla branz
        $.validator.addMethod('industries', function (value, element) {
            return this.optional(element) || value !== 'Wybierz'
        }, "Nazwa branży musi zostać wybrana.");

        // Ustaw walidator dla numeru REGON
        $.validator.addMethod('regon-not-exists', function (value, element) {
            return this.optional(element) || instance.regonNotExists
        }, "REGON jest już zarejestrowany w KBF.");

        $.validator.addMethod('regon-not-found', function (value, element) {
            return this.optional(element) || instance.regonFound
        }, "Firma o podanym numerze REGON nie została odnaleziona.");

        // Walidacja
        this.validatorConfig = {

            formName: 'register-company',
            ignore: [],

            rules: {

                // Ustaw reguly dla branz
                industry: {
                    required: true,
                    industries: true
                },
                "sub-industry": {
                    required: true,
                    industries: true
                },
                "company_regon": {
                    "regon-not-exists": true,
                    "regon-not-found": true,
                },
            },

            // Umiejscowienie komunikatu o bledzie
            errorPlacement: function ($label, $element) {
                $label.addClass('kbf-error-message');

                let $column = $element.closest('[class*="col"]');

                if ($column.length > 0) {
                    $column.append($label);
                } else $label.insertAfter($element);
            }
        };

        this.stepper = new KbfStepper('.kbf-stepper', this.validatorConfig);
        this.$kbfStepper = this.stepper.$kbfStepper;

        // Ustaw przyciski w zaleznosci od szerokosci urzadzenia
        if (window.innerWidth >= 768) {
            this.$prevButton = this.$kbfStepper.find('.button-prev.button-desktop');
            this.$nextButton = this.$kbfStepper.find('.button-next.button-desktop');
            this.$registerButton = this.$kbfStepper.find('.button-register.button-desktop');
            this.registerCompanyPreloader = new KbfPreloaderButton('.button-register.button-desktop button');

        } else {
            this.$prevButton = this.$kbfStepper.find('.button-prev');
            this.$nextButton = this.$kbfStepper.find('.button-next');
            this.$registerButton = this.$kbfStepper.find('.button-register');
            this.registerCompanyPreloader = new KbfPreloaderButton('.button-register button');
        }

        // Wybor branz
        this.industrySwitcher = new KbfIndustrySwitcher('industries', 'sub-industries', "Wybierz", window.innerWidth <= 768, false);
        this.industrySwitcher.on('industries-changed', this.stepper.validateCurrentPage.bind(this.stepper));

        // Wysiwyg
        // this.wysiwyg = new KbfWysiwyg('.wysiwyg', '[name="company_description_hidden"]');
        // this.wysiwyg.on('change', this.stepper.validateCurrentPage.bind(this.stepper))

        // Cropper
        this.$companyLogo.change(function (event) {
            let files = event.target.files;
            instance.imageName = files[0].name;
            instance.imageType = files[0].type

            let done = function (url) {
                instance.image.src = url;
                instance.$modal.modal('show');
            };

            if (files && files.length > 0) {
                let reader = new FileReader();
                reader.onload = function (event) {
                    done(reader.result);
                };
                reader.readAsDataURL(files[0]);
            }

            instance.$companyLogo.val('');

        });

        this.$modal.on('shown.bs.modal', function () {
            instance.cropper = new Cropper(instance.image, {
                // aspectRatio: 3,
                viewMode: 1,
                preview: '.preview'
            });

            $('#crop').click(function () {
                let canvas = instance.cropper.getCroppedCanvas({
                    width: 400,
                    height: 400
                });

                canvas.toBlob(function (blob) {

                    let file = new File([blob], instance.imageName, {type: instance.imageType, lastModified: new Date().getTime()});
                    let container = new DataTransfer();
                    container.items.add(file);
                    instance.$companyLogo[0].files = container.files;

                    let reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function () {

                        let base64data = reader.result;
                        instance.$logoPlaceholder.attr('src', base64data);
                        instance.$modal.modal('hide');

                    };
                });
            });


        }).on('hidden.bs.modal', function () {
            instance.cropper.destroy();
            instance.cropper = null;
        });


    }

    addListeners() {

        let instance = this;

        this.$prevButton.on('click', this.prevPage.bind(this));
        this.$nextButton.on('click', this.nextPage.bind(this));
        this.$registerButton.on('click', this.submitRegister.bind(this)); // TODO

        // Pole REGON
        let $regonField = $('[name="company_regon"]');

        $regonField.on('change', this.regonFieldHandler($regonField).bind(this));
        $regonField.on('input', this.regonFieldHandler($regonField).bind(this));
        $regonField.on('paste', this.regonFieldHandler($regonField).bind(this));

        this.searchByREGONButtonPreloader.on('click', async function () {

            if (instance.regonErrorVisible) {
                $('.kbf-error-message').css('display', 'none');
            }

            instance.regonErrorVisible = false;

            let data = await instance.getDataFromREGON($regonField.val());

            instance.stepper.validateCurrentPage();

            instance.searchByREGONButtonPreloader.stopPreloader();

            let $companyNameField = $('[name="company_name"]');
            let $companyNipField = $('[name="company_nip"]');
            let $companyAddressField = $('[name="company_address"]');
            let $companyZipField = $('[name="company_zip"]');
            let $companyCityField = $('[name="company_city"]');
            let $latField = $('[name="lat"]');
            let $lonField = $('[name="lon"]');

            $companyNameField.val('');
            $companyNipField.val('');
            $companyAddressField.val('');
            $companyZipField.val('');
            $companyCityField.val('');
            $latField.val('');
            $lonField.val('');


            instance.regonFound = true;
            instance.regonNotExists = true;

            let isError = data['error'] !== undefined;

            if (isError) {
                if (data['error'] === 'No data found') instance.regonFound = false;
                if (data['error'] === 'Regon exists') instance.regonNotExists = false;
                instance.regonErrorVisible = true;
            }

            if (instance.regonNotExists && !isError) {

                // Ustaw wartosci dla pol
                $companyNameField.val(data["company_name"]);
                $companyNameField[0].removeAttribute('disabled');

                $companyNipField.val(data["company_nip"]);
                $companyNipField[0].removeAttribute('disabled');

                $companyAddressField.val(data["company_address"]);
                $companyAddressField[0].removeAttribute('disabled');

                $companyZipField.val(data["company_zip"]);
                $companyZipField[0].removeAttribute('disabled');

                $companyCityField.val(data["company_city"]);
                $companyCityField[0].removeAttribute('disabled');

                // TODO: province_name, area_name
                // TODO: getLocationData(address, zip, city) => { lat, lon, province_name, area_name }

                $latField.val(data["lat"]);
                $lonField.val(data["lon"]);


            }

        })
    }

    nextPage(e) {

        this.stepper.nextPage(e);

        if (this.stepper.currentPageIdx > 0) this.$prevButton.find('button').removeAttr('disabled');

        if (this.stepper.currentPageIdx === this.stepper.lastPageIdx) {
            this.$nextButton.hide();
            this.$registerButton.show();
            this.$registerButton.find('button').addClass('show');
        }

        this.setSummary();

    }

    prevPage(e) {

        this.stepper.prevPage(e);

        if (this.stepper.currentPageIdx < this.stepper.lastPageIdx) {
            this.$registerButton.hide();
            this.$registerButton.find('button').removeClass('show');
            this.$nextButton.show();

        }

        if (this.stepper.currentPageIdx === 0) {
            this.$prevButton.find('button').attr('disabled', 'disabled');
        }

        this.setSummary();

    }

    // Przygotowuje podsumowanie wpisu
    setSummary() {

        let industry = $('[name="industry"]').val();
        let subIndustry = $('[name="sub-industry"]').val();

        let lat = $('[name="lat"]').val();
        let lon = $('[name="lon"]').val();

        // Ukryj minimape jezeli nie pobrano wspolrzednych
        if (this.stepper.currentPageIdx === this.stepper.lastPageIdx) {

            if (!lat || !lon) {
                this.$kbfMiniMapContainer.hide();
            }
        }


        this.companyInfo.innerHTML = replacePlaceholders({
            '{company_name}': $('[name="company_name"]').val() || '{company_name}',
            '{company_address}': $('[name="company_address"]').val() || '{company_address}',
            '{company_regon}': $('[name="company_regon"]').val() || '{company_regon}',
            '{company_zip}': $('[name="company_zip"]').val() || '{company_zip}',
            '{company_city}': $('[name="company_city"]').val() || '{company_city}',
            '{company_phone_1}': $('[name="company_phone_1"]').val() || '{company_phone_1}',
            '{company_www}': $('[name="company_www"]').val() || '',
            '{company_email}': $('[name="company_email"]').val() || '{company_email}',
            '{company_industry}': industry !== 'Wybierz' ? industry : '{company_industry}' || '{company_industry}',
            '{company_sub_industry}': subIndustry !== 'Wybierz' ? subIndustry : '{company_sub_industry}',

        }, this.companyInfoContents);


        // Usun logo WWW jezel nie podano w formularzu
        if (!$('[name="company_www"]').val()) {

            let $companyWWW = $('.company-www');
            $companyWWW.removeClass('d-block');
            $companyWWW.addClass('d-none')
        } else {
            let $companyWWW = $('.company-www');
            $companyWWW.addClass('d-block');
            $companyWWW.removeClass('d-none');
        }

        this.companyDescription.innerHTML = replacePlaceholders({
            '{company_description_html}': $('[name="company_description_html"]').val() || '',
        }, this.companyDescriptionContents)

    }

    // Aktywuje przycisk wyszukiwania jezeli dlugosc REGON jest prawidlowa
    regonFieldHandler($regonField) {

        return function () {
            if ($regonField.val().length >= 7) this.$searchByREGONButton.attr('disabled', false);
            else this.$searchByREGONButton.attr('disabled', 'disabled');
        }
    }

    // Potwierdza rejestracje
    submitRegister(e) {

        e.preventDefault();
        e.stopPropagation();

        this.$prevButton.find('button').attr('disabled', 'disabled').off('click'); // Wylacz prev button
        this.$form.submit();

    }

    async getDataFromREGON(regon) {
        if (!regon) return [];
        return await $.get(config.apiEndpoint + `/api/regon/?regon=${regon}`)

    }

}

export default App;