import errors from "../modules/Errors";
import KbfMap from "../map/components/KbfMap";

class KbfMiniMap {

    constructor(selector) {

        let $ = window.$;
        this.$miniMap = $(selector);

        // Emituj wyjatek gdy nie podano selektora albo element nie zostal znaleziony
        if (!selector || this.$miniMap.length === 0) throw errors.elementNotFound(selector);

        this.lat = this.$miniMap.data('lat');
        this.lon = this.$miniMap.data('lon');

        // Emituj wyjatek jezeli nie podano wspolrzednych geograficznych
        if (!this.lat || !this.lon) return;

        // Ustaw element mapy
        this.miniMapElement = this.$miniMap[0];

        this.init();

    }

    init() {

        // Ustaw kontekst
        let instance = this;

        // Inicjuj mape
        if (this.map) {
            this.map.remove();
            this.map = undefined;
        }

        this.minimap = L.map(this.miniMapElement, {
            zoom: 17,
            dragging: false,
            scrollWheelZoom: false,
            attributionControl: false,
            boxZoom: false,
            zoomControl: false,
            center: [Number(instance.lat), Number(instance.lon)],
            tap: !L.Browser.mobile // Wylacz tap events dla urzadzen mobilnych, fix !
        });

        // Dodaj tile map
        if (this.minimap.hasLayer(KbfMap.polandTiles)) this.minimap.removeLayer(KbfMap.polandTiles);
        KbfMap.polandTiles.addTo(this.minimap);

        // Dodaj marker
        L.marker([Number(instance.lat), Number(instance.lon)], { icon: KbfMap.markerSymbol }).addTo(this.minimap);

    }

}


export default KbfMiniMap;