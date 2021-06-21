import errors from "../modules/Errors";
import PerfectScrollbar from 'perfect-scrollbar';

class KbfDropdown extends EventTarget {

    constructor(selector, opts = [], scrollBlock = true) {

        super();

        let $ = window.$;

        // Sprawdz poprawnosc argumentow
        if (selector === undefined) throw errors.argumentNotFound('selector');

        this.selector = selector;
        this.opts = opts;

        this.scrollBlock = scrollBlock; // Czy blokowac scroll po otwarciu dropdown

        this.init(); // Inicjalizuj
        this.addListeners(); // Dodaj event listenery
        this.initScrollBar(); // Inicjuj scrollbar

    }

    init() {

        let $ = window.$;

        // Aliasy
        this.on = this.addEventListener;
        this.off = this.removeEventListener;
        this.emit = this.dispatchEvent;

        this.$dropdowns = $(this.selector);

        // Ustaw opcje z atrybuty data-options
        let dataOptions = this.$dropdowns.data('options');
        if (dataOptions) this.opts = dataOptions.split(',');

        if (this.$dropdowns.length === 0) throw errors.elementNotFound(this.selector);

        this.$dropdownButtons = this.$dropdowns.find('button'); // Przyciski dropdown

        // Wstaw ukryte pole formularza
        this.$dropdowns.append($('<input class="form-control" type="hidden">'));
        this.$hiddenInputs = this.$dropdowns.find('input[type="hidden"]');

        // Ustaw opcje
        this.setOptions(this.opts);
        this.$dropdownItems = this.$dropdowns.find('.dropdown-item'); // Elementy menu

    }

    // Dodaje listenery
    addListeners() {

        let $ = window.$;

        let instance = this; // Ustaw kontekst
        this.$dropdownItems.off('click');

        let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

        function preventDefault(e) {
            e.preventDefault();
        }

        function disableScroll() {
            window.addEventListener('DOMMouseScroll', preventDefault, { passive: false }); // older FF
            window.addEventListener(wheelEvent, preventDefault, { passive: false }); // modern desktop
            window.addEventListener('touchmove', preventDefault, { passive: false }); // mobile
        }

        function enableScroll() {
            window.removeEventListener('DOMMouseScroll', preventDefault, { passive: false });
            window.removeEventListener(wheelEvent, preventDefault, { passive: false });
            window.removeEventListener('touchmove', preventDefault, { passive: false });
        }

        if (this.scrollBlock) {
            // Blokowanie scrollingu body kiedy dropdown jest widoczny
            this.$dropdowns.on('shown.bs.dropdown', function (e) {
                e.stopPropagation();
                disableScroll();

            });

            this.$dropdowns.on('hidden.bs.dropdown', function (e) {
                e.stopPropagation();
                enableScroll();
            });
        }

        // Fix dla przyciskow steppera // TODO przeniesc do steppera
        // this.$dropdowns.on('shown.bs.dropdown', function (e) {
        //
        //     e.stopPropagation();
        //     let $steps = $('.step');
        //     let $buttons = $('.button-prev, .button-next, .button-register');
        //     if ($steps.length) $steps.css('z-index', -1);
        //     if ($buttons.length) $buttons.css('z-index', -1);
        //
        // });
        //
        // this.$dropdowns.on('hidden.bs.dropdown', function (e) {
        //
        //     e.stopPropagation();
        //     let $steps = $('.step');
        //     let $buttons = $('.button-prev, .button-next, .button-register');
        //     if ($steps.length) $steps.css('z-index', '');
        //     if ($buttons.length) $buttons.css('z-index', '');
        //
        // });


        // Gdy klikniemy na dropdown item
        this.$dropdownItems.on('click', function (e) {

            e.preventDefault()

                let $this = $(this);

                // Sprawdz czy wartosci sie zmienila
                if ($this.text() !== instance.displayed) {

                    // Wyswietl nowa wartosc na przycisku
                    instance.displayed = $this.text();
                    instance.$dropdownButtons.text(instance.displayed);

                    // Ustaw ukryte pole
                    // Jeżeli opts jest obiektem
                    if (Array.isArray(instance.opts) === false && typeof instance.opts === 'object') {
                        instance.$hiddenInputs.attr({
                            name: instance.$dropdowns.data('name'),
                            value: instance.opts[instance.displayed]
                        });

                        instance.emit(new CustomEvent('change', {detail: instance.opts[instance.displayed]})); // Emituj nowa wartosc

                    } else
                        // Jezeli opts jest tablica
                    if (Array.isArray(instance.opts) === true) {
                        instance.$hiddenInputs.attr({
                            name: instance.$dropdowns.data('name'),
                            value: instance.displayed
                        });

                        instance.emit(new CustomEvent('change', {detail: instance.displayed})); // Emituj nowa wartosc

                    }
                }
            }
        );

    }

    // Inicjalizuje opcje
    setOptions(opts) {

        let $ = window.$;

        let dropdownMenu, optionsLastIdx, idx;
        let ariaLabelledBy = this.$dropdownButtons.attr('id');
        let instance = this; // Ustaw kontekst

        // Jeżeli opts jest obiektem
        if (Array.isArray(opts) === false && typeof opts === 'object') {

            let keys = Object.keys(opts);
            optionsLastIdx = keys.length - 1;
            idx = 0;

            // Ustaw stan
            this.setState();

            // Aktualizuj ukryte pole
            this.updateHiddenInput();

            // Przygotuj elementy menu
            dropdownMenu = `<div class="dropdown-menu" aria-labelledby="${ariaLabelledBy}">`;
            do {
                dropdownMenu += `<a class="dropdown-item" href="#">${keys[idx]}</a>`;
            } while (idx++ < optionsLastIdx)

            dropdownMenu += '</div>';

        } else

            // Jezeli opts jest tablica
        if (Array.isArray(opts) === true) {

            optionsLastIdx = opts.length - 1;
            idx = 0;

            // Ustaw stan
            this.setState();

            // Aktualizuj ukryte pole
            this.updateHiddenInput();

            // Przygotuj elementy menu
            dropdownMenu = `<div class="dropdown-menu" aria-labelledby="${ariaLabelledBy}">`;
            do {
                dropdownMenu += `<a class="dropdown-item" href="#">${opts[idx]}</a>`;
            } while (idx++ < optionsLastIdx)

            dropdownMenu += '</div>';

        }

        this.$dropdownButtons.text(this.displayed); // Ustaw tekst na przycisku
        this.$dropdownButtons.on('click', function () {
            instance.initScrollBar();

            // Scrollbar fix !
            instance.$dropdownMenu.on('click', function (e) {
                if (e.target.className.indexOf('ps__') !== -1) {
                    e.stopPropagation();
                }
            })

        })

        this.$dropdowns.find('.dropdown-menu').remove();

        this.$dropdownMenu = $(dropdownMenu);
        this.$dropdownButtons.after(this.$dropdownMenu);


        // Ustaw szerokosc dropdown menu na szerokosc przycisku - fix
        this.$dropdownButtons.off('mouseenter');
        this.$dropdownButtons.on('mouseenter', function () {
           let $this = $(this);
           $this.next().css('width', $this.css('width'));
        });
        this.$dropdownMenu.css({width: this.$dropdownMenu.prev('button').css('width')});

    }

    // Ustawia nowe opcje
    updateOptions(opts) {

        let newMenuItemsHtml = ''; // Generowany kod html dla elementow menu
        this.opts = opts;

        // Jeżeli opts jest obiektem
        if (Array.isArray(this.opts) === false && typeof this.opts === 'object') {

            let keys = Object.keys(this.opts);

            // Usun istniejace elementy menu
            this.$dropdownItems.remove();

            // Generuj nowy kod html dla elementow menu <a class="dropdown-item" href="#">Wszystkie</a>
            keys.forEach(function (key) {
                newMenuItemsHtml += `<a class="dropdown-item" href="#">${key}</a>`;
            });

            this.$dropdownButtons.text(keys[0]); // Aktualizuj przycisk
            this.$dropdownMenu.html(newMenuItemsHtml);
            this.$dropdownItems = this.$dropdownMenu.find('.dropdown-item');
            this.addListeners(); // Dodaj ponownie listenery

            // Ustaw stan
            this.setState();
            this.initScrollBar();

        } else

            // Jezeli opts jest tablica
        if (Array.isArray(this.opts) === true) {

            // Usun istniejace elementy menu
            this.$dropdownItems.off('click');
            this.$dropdownItems.remove();

            this.opts.forEach(function (opt) {
                newMenuItemsHtml += `<a class="dropdown-item" href="#">${opt}</a>`;
            });

            this.$dropdownButtons.text(this.opts[0]); // Aktualizuj przycisk
            this.$dropdownMenu.html(newMenuItemsHtml);
            this.$dropdownItems = this.$dropdownMenu.find('.dropdown-item');
            this.addListeners(); // Dodaj ponownie listenery

            // Ustaw stan
            this.setState();

        }

        // Aktualizuj ukryte pole
        this.updateHiddenInput();

    }

    // Aktualizuje ukryte pole input
    updateHiddenInput() {
        // Ustaw ukryte pola
        this.$hiddenInputs.attr({
            name: this.$dropdowns.data('name'),
            value: this.value
        });
    }

    // Ustawia aktywna opcje
    setActive(optionName) {

        // Sprawdz poprawnosc argumentow
        if (optionName === undefined) throw errors.argumentNotFound('optionName');

        // Jeżeli opts jest obiektem
        if (Array.isArray(this.opts) === false && typeof this.opts === 'object') {

            // Sprawdz czy opcja istnieje
            if ((optionName in this.opts) === false) throw new Error(`Option ${optionName} does not exist`);

            // Ustaw stan
            this.displayed = optionName;
            this.value = this.opts[optionName];
        }

        // Jezeli opts jest tablica
        if (Array.isArray(this.opts) === true) {

            // Sprawdz czy opcja istnieje
            if (this.opts.includes(optionName) === false) throw new Error(`Option ${optionName} does not exist`);

            // Ustaw stan
            this.displayed = optionName;
            this.value = optionName;

        }

        this.$dropdownButtons.text(this.displayed); // Wyswietl nowa wartosc na przycisku
        this.updateHiddenInput(); // Aktualizuj ukryty input

    }

    // Ustawia stan
    setState() {

        // Jeżeli opts jest obiektem
        if (Array.isArray(this.opts) === false && typeof this.opts === 'object') {

            let keys = Object.keys(this.opts);

            // Ustaw stan
            this.value = this.opts[keys[0]];
            this.displayed = keys[0];
            this.items = keys;

        }
        // Jezeli opts jest tablica
        if (Array.isArray(this.opts) === true) {

            // Ustaw stan
            this.value = this.opts[0];
            this.displayed = this.opts[0];
            this.items = this.opts;

        }
    }

    // Aktywuje scrollbar
    initScrollBar() {

        let instance = this;

        if (this.scrollbar) this.scrollbar.destroy();

        // Inicjuj scrollbar
        this.scrollbar = new PerfectScrollbar(this.$dropdownMenu[0], {
            minScrollbarLength: 20
        });

        this.$psRail = this.$dropdowns.find('[class*="ps__rail-y"]');
        this.$psThumb = this.$dropdowns.find('[class*="ps__thumb-y"]');

        // Wylacz pan mapy gdy kursor znajduje sie na scrollbar i mapa istnieje
        this.$psRail.on('mouseenter', function () {
            if (window.map) window.map.dragging.disable();

        });

        this.$dropdownMenu.on('mouseenter', function (e) {

            e.stopPropagation();

            instance.scrollbar.update();

            if (window.map) {
                window.map.scrollWheelZoom.disable();
                window.map.dragging.disable();
            }
        })

        // Wlacz pan mapy gdy kursor opuszcza dropdown i mapa istnieje
        this.$psRail.on('mouseleave', function () {
            if (window.map) window.map.dragging.enable();
        })

        this.$dropdownMenu.on('mouseleave', function () {
            if (window.map) {
                window.map.scrollWheelZoom.enable();
                window.map.dragging.enable();
            }
        })

        this.$psRail.on('mousedown mouseup click', function (e) {
            e.stopPropagation();
        })


    }

    destroy() {
        this.$dropdownItems.off('click');
        this.$hiddenInputs.remove();
        this.$dropdownMenu.remove();
    }

}

export default KbfDropdown;