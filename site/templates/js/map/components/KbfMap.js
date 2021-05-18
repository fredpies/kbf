import errors from "../../modules/Errors";
import config from "../../config/config";
import {isTouchDevice} from "../../functions/library";

let url = config.url;
let apiEndpoint = config.apiEndpoint;

class KbfMap extends EventTarget {

    constructor(selector) {

        super();
        let $ = window.$;

        // Sprawdz poprawnosc argumentow
        if (selector === undefined) throw errors.argumentNotFound('selector');
        let $map = $(selector);
        if ($map.length === 0) throw errors.elementNotFound(selector);

        // Aliasy i referencje
        this.on = this.addEventListener;
        this.off = this.removeEventListener
        this.emit = this.dispatchEvent;

        this.$nameInfo = $('.kbf-map-info'); // Informacja o nazwie wojewodztwa przy kursorze

        // Ustaw element mapy
        this.mapElement = $map[0];
        this.$map = $map;

        // Ustaw kontekst
        let instance = this;

        // Czy urzadzenie jest dotykowe
        this.isTouchDevice = isTouchDevice();

        // Ustaw wojewodztwo i powiat
        this.currentProvinceName = 'Wszystkie';
        this.currentAreaName = 'Wszystkie';
        this.labelLayerGroup = L.layerGroup(); // Warstwa etykiet
        this.zoomedToArea = false; // Czy powiekszono do powiatu

        // Ustaw branze i sub branze
        this.currentIndustry = 'Wybierz';
        this.currentSubIndustry = '';

        this.markers = []; // Dodane markery

        // Inicjuj warstwe wojewodztw
        this.provincesLayer = L.geoJSON(window.provincesGeoJSON, {
            style: function () {
                return {
                    weight: 0.6,
                    fillOpacity: 0.1,
                    color: '#7a838c',
                    fillColor: '#478aee'
                }
            },
            onEachFeature: function (feature, layer) {

                let provinceName = feature.properties.name; // Nazwa wojewodztwa

                if (!instance.isTouchDevice) {
                    // Usun event listenery
                    layer.off('mouseover');
                    layer.off('mousemove');
                    layer.off('mouseout');
                    layer.off('click');

                    // Przyciemnij warstwy na ktorych znajduje sie kursor i wyswietl nazwe wojewodztwa przy kursorze

                    layer.on('mouseover', function (e) {
                        this.setStyle({fillOpacity: 0.2})
                        instance.$nameInfo.text(provinceName).css({
                            zIndex: 5000,
                            top: e.containerPoint.y + 'px',
                            left: e.containerPoint.x + 'px'
                        });

                    })
                    layer.on('mouseout', function () {
                        this.setStyle({fillOpacity: 0.1});
                        instance.$nameInfo.css({zIndex: 0});
                    })

                    layer.on('click', function () {
                        this.setStyle({fillOpacity: 0.1});
                    })

                    // Wyswietl nazwe wojewodztwa przy kursorze
                    layer.on('mousemove', function (e) {
                        instance.$nameInfo.css({
                            top: e.containerPoint.y - 20 + 'px',
                            left: e.containerPoint.x + 20 + 'px'
                        })
                    })

                    // Emituj zdarzenie z nazwa wojewodztwa po kliknieciu i skaluj do niego
                    layer.on('click', instance.zoomToProvinceHandler(provinceName));
                }

                if (instance.isTouchDevice) {
                    // Emituj zdarzenie z nazwa wojewodztwa po kliknieciu i skaluj do niego
                    layer.off('click');
                    layer.on('click', instance.zoomToProvinceHandler(provinceName));
                }
            }
        })

        // Inicjalizuj mape
        this.init();
        $(window).on('resize', instance.init.bind(instance));

    }

    // Inicjalizuje mape
    init() {

        let instance = this; // Ustaw kontekst

        // Ustaw styl kontenera map
        if (window.innerWidth <= 768) {

            let mapPanelHeight = ($('#kbf-map-panel .card-body')[0]).getBoundingClientRect().height

            this.$map.css({
                width: '100%',
                height: `calc(100vh - ${mapPanelHeight}px)`,
                marginTop: mapPanelHeight + 'px'
            })
        }
        if (window.innerWidth > 600) {
            this.$map.css({
                width: '100%',
                height: '100vh',
                marginTop: 0
            });
        }

        // Inicjuj mape
        if (this.map) {
            this.map.remove();
            this.map = undefined;
        }
        this.map = L.map(this.mapElement, {
            zoomSnap: 0.45,
            minZoom: 5,
            zoomControl: false,
            tap: !L.Browser.mobile // Wylacz tap events dla urzadzen mobilnych, fix !

        });

        window.map = this.map;

        instance.showAll();

        // Kontroluj zmiane mapy bazowej
        this.map.on('zoom', function (e) {
            let currentZoom = e.target.getZoom();
            if (currentZoom > instance.startingZoom) {
                if (instance.map.hasLayer(KbfMap.polandProvincesTiles)) instance.map.removeLayer(KbfMap.polandProvincesTiles);
                if (instance.map.hasLayer(KbfMap.polandLabels)) instance.map.removeLayer(KbfMap.polandLabels);
                if (!instance.map.hasLayer(KbfMap.polandDetailMap)) KbfMap.polandDetailMap.addTo(instance.map);

            }
            if (currentZoom <= instance.startingZoom) {
                if (!instance.map.hasLayer(KbfMap.polandProvincesTiles)) KbfMap.polandProvincesTiles.addTo(instance.map); // Dodaj map tile wojewodztw
                if (!instance.map.hasLayer(KbfMap.polandLabels)) KbfMap.polandLabels.addTo(instance.map); // Dodaj map tile wojewodztw
                if (instance.map.hasLayer(KbfMap.polandDetailMap)) instance.map.removeLayer(KbfMap.polandDetailMap);

            }
        })

    }

    // Usuwa warstwy
    removeLayers() {

        if (this.currentAreasLayer) {
            this.currentAreasLayer.off('mouseover');
            this.currentAreasLayer.off('mouseout');
        }

        if (this.provincesLayer) {
            this.provincesLayer.off('mouseover');
            this.provincesLayer.off('mouseout');
        }

        if (this.currentAreaLayer) {
            this.currentAreaLayer.off('mouseover');
            this.currentAreaLayer.off('mouseout');
        }

        if (this.map.hasLayer(this.provincesLayer)) {
            this.map.removeLayer(this.provincesLayer);
            this.provincesLayer.remove();
        }

        if (this.map.hasLayer(this.currentAreasLayer)) {
            this.map.removeLayer(this.currentAreasLayer);
            this.currentAreasLayer.remove();
        }

        if (this.map.hasLayer(this.currentAreaLayer)) {
            this.map.removeLayer(this.currentAreaLayer);
            this.currentAreaLayer.remove();
        }

        if (this.map.hasLayer(this.labelLayerGroup)) {
            this.map.removeLayer(this.labelLayerGroup);
            this.labelLayerGroup.remove();
        }

        let instance = this;

        // Usun markery
        this.markers.forEach(function (marker) {
            instance.map.removeLayer(marker);
        })

        this.markers = [];

    }

    // Pokazuje cala mape
    showAll() {

        let instance = this; // Ustaw kontekst

        this.removeLayers(); // Usuw wszystkie warstwy

        if (this.map.hasLayer(KbfMap.polandProvincesTiles)) this.map.removeLayer(KbfMap.polandProvincesTiles);

        // Skaluj i pozycjonuj mape
        this.map.setView([52, 20]); // Centrum Polski

        // Ustaw skale poczatkowa
        this.map.once('zoom', function () {
            instance.startingZoom = instance.map.getZoom();
        });

        this.provincesLayer.addTo(this.map); // Pokaz wojewodztwa
        this.map.fitBounds(this.provincesLayer.getBounds()); // Ustaw widok

        KbfMap.polandProvincesTiles.addTo(this.map); // Dodaj map tile wojewodztw
        KbfMap.polandLabels.addTo(this.map).bringToFront(); // Dodaj map tile wojewodztw

        if (this.isTouchDevice && window.innerWidth >= 700 && window.innerHeight > 480) this.showProvinceLabels(); // Pokaz etykiety na urzadzeniach dotykowych
        this.map.scrollWheelZoom.disable(); // Wylacz scroll zoom

        // Ustaw nazwy wojewodztwa i powiatu
        this.currentProvinceName = 'Wszystkie';
        this.currentAreaName = 'Wszystkie';

    }

    // Pokazuje etykiety wojewodztw
    showProvinceLabels() {

        let instance = this;

        this.provincesLayer.eachLayer(function (layer) {
            let provinceName = layer.feature.properties.name;

            let position = layer.getCenter();
            let style = '';

            // Fix na szerokosc
            if (provinceName === 'Kujawsko-Pomorskie' || provinceName === 'Warmińsko-Mazurskie') {
                style = `width: ${provinceName.length * 7}px`;
            }

            // Fix na pozycje
            let provinces = ['Kujawsko-Pomorskie', 'Warmińsko-Mazurskie', 'Dolnośląskie']
            if (provinces.indexOf(provinceName) >= 0) {
                position = {lat: position.lat, lng: position.lng - 0.8};
            }

            provinces = ['Wielkopolskie', 'Podkarpackie', 'Świętokrzyskie', 'Małopolskie', 'Lubuskie', 'Lubelskie', 'Śląskie', 'Opolskie', 'Podlaskie'];
            if (provinces.indexOf(provinceName) >= 0) {
                position = {lat: position.lat, lng: position.lng - 0.4};
            }

            provinces = ['Pomorskie'];
            if (provinces.indexOf(provinceName) >= 0) {
                position = {lat: position.lat, lng: position.lng - 1};
            }

            provinces = ['Łódzkie'];
            if (provinces.indexOf(provinceName) >= 0) {
                position = {lat: position.lat, lng: position.lng - 0.3};
            }

            let html = `<div style= "${style}" class="kbf-provinces-label">${provinceName}</div>`;
            L.marker(position, {icon: L.divIcon({html})}).addTo(instance.labelLayerGroup);

        })
        this.labelLayerGroup.addTo(this.map);
    }

    // Event handler dla skalowania do wojewodztwa
    zoomToProvinceHandler(provinceName) {

        let instance = this;

        return function (e) {

            e.originalEvent.stopPropagation();
            instance.zoomToProvince(provinceName); // Skaluj do wojewodztwa
            instance.emit(new CustomEvent('province-clicked', {
                detail: {
                    province: instance.currentProvinceName,
                    area: instance.currentAreaName
                }
            }));
        }
    }

    // Skaluje do powiatow
    zoomToProvince(provinceName) {

        let instance = this; // Ustaw kontekst
        let provinceArea;
        let isTouchDevice = this.isTouchDevice;

        this.map.scrollWheelZoom.disable(); // Wylacz scroll zoom
        this.map.dragging.enable(); // Wlacz dragging

        this.zoomedToArea = false;
        this.currentProvinceName = provinceName;

        this.removeLayers(); // Usun warstwy
        this.$nameInfo.css('zIndex', 0); // Ukryj informacje

        if (provinceName !== 'Wszystkie') {

            // Znajdz geometrie wojewodztwa
            L.geoJSON(window.provincesGeoJSON, {
                filter: function (feature) {
                    return feature.properties.name === provinceName
                },

                onEachFeature: function (feature, layer) {
                    provinceArea = layer;
                }
            })

            // Powiaty dla wybranego wojewodztwa
            this.currentAreasLayer = L.geoJSON(window.areasGeoJSON, {
                style: function () {
                    return {
                        weight: 0.8,
                        fillOpacity: 0.1,
                        color: '#7a838c',
                        fillColor: '#478aee'
                    }
                },

                filter: function (feature) {
                    return feature.properties.province === provinceName
                },

                onEachFeature: function (feature, layer) {

                    let areaName = feature.properties.name; // Nazwa powiatu
                    if (instance.map.hasLayer(layer)) instance.map.removeLayer(layer);

                    // Jeżeli urzadzenie nie jest dotykowe przyciemnij warstwy na ktorych znajduje sie kursor
                    if (!isTouchDevice) {

                        // Usun event listenery z powiatu
                        layer.off('click');
                        layer.off('mouseover');
                        layer.off('mousemove');
                        layer.off('mouseout');

                        layer.on('mouseover', function (e) {
                            this.setStyle({fillOpacity: 0.2})
                            instance.$nameInfo.text(areaName).css({
                                zIndex: 5000,
                                top: e.containerPoint.y + 'px',
                                left: e.containerPoint.x + 'px'
                            });

                        })

                        layer.on('mouseout', function () {
                            this.setStyle({fillOpacity: 0.1});
                            instance.$nameInfo.css({zIndex: 0});
                        })

                        // Wyswietl nazwe powiatu przy kursorze
                        layer.on('mousemove', function (e) {
                            instance.$nameInfo.css({
                                top: e.containerPoint.y - 20 + 'px',
                                left: e.containerPoint.x + 20 + 'px'
                            })
                        })

                    }

                    // Emituj zdarzenie z nazwa wojewodztwa i powiatu po kliknieciu i skaluj do powiatu
                    layer.on('click', instance.zoomToAreaHandler(areaName, instance.currentProvinceName, layer));

                },
            });

            // Zakres powiatow
            this.map.addLayer(provinceArea); // Warstwa musi byc dodana do mapy zeby na niej centrowac

            provinceArea.setStyle({fillOpacity: 0.1})

            // Ustaw mape na powiatach
            this.map.panTo(provinceArea.getCenter());
            this.map.fitBounds(provinceArea.getBounds());

            // Dodaj warstwe powiatow do mapy
            this.map.addLayer(this.currentAreasLayer);
            this.map.removeLayer(provinceArea);
        }

        if (provinceName === 'Wszystkie') this.showAll(); // Jezeli wybrano wszystkie wojewodztwa pokaz cala mape


    }

    // Event handler dla skalowania do powiatu
    zoomToAreaHandler(areaName, provinceName, layer) {

        let instance = this; // Ustaw kontekst

        return function (e) {

            e.originalEvent.stopPropagation;
            layer.setStyle({fillOpacity: 0.1});

            if (!instance.zoomedToArea) {

                instance.zoomToArea(areaName, instance.currentProvinceName, layer); // Skaluj do powiatu
                instance.zoomedToArea = true;

                // Emituj dane gdy kliknieto powiat
                instance.emit(new CustomEvent('area-clicked', {
                    detail: {
                        province: instance.currentProvinceName,
                        area: instance.currentAreaName
                    }
                }));
            }


        }
    }

    // Skaluje do powiatu
    zoomToArea(areaName, provinceName, area) {

        let instance = this; // Ustaw kontekst
        let areaCenter;
        let areaBounds;

        this.removeLayers(); // Usun warstwy

        if (area) {
            areaBounds = area.getBounds();
            this.currentAreaLayer = area;
            this.map.addLayer(this.currentAreaLayer);
            areaCenter = this.currentAreaLayer.getCenter();
        }

        instance.currentAreaName = areaName;

        // Znajdz geometrie powiatu jesli nie podano area
        if (area === undefined) {
            if (instance.currentAreaLayer) {
                instance.map.removeLayer(instance.currentAreaLayer);
                instance.currentAreaLayer.remove();
            }

            L.geoJSON(window.areasGeoJSON, {
                filter: function (feature) {
                    return feature.properties.name === areaName && feature.properties.province === provinceName
                },

                style: function () {
                    return {
                        weight: 0.85,
                        fillOpacity: 0.1,
                        color: '#7a838c',
                        fillColor: '#478aee'
                    }
                },

                onEachFeature: function (feature, layer) {

                    areaBounds = layer.getBounds();
                    instance.currentAreaLayer = layer;
                    instance.map.addLayer(layer);
                    areaCenter = layer.getCenter();


                }
            })
        }

        this.$nameInfo.css('zIndex', 0); // Ukryj informacje

        // Usun event listenery z powiatu
        if (!this.isTouchDevice) {
            this.currentAreaLayer.off('mouseover');
            this.currentAreaLayer.off('mousemove');
            this.currentAreaLayer.off('mouseout');
            this.currentAreaLayer.off('click');
        }

        // Ustaw mape na lokalizacji powiatu
        this.map.panTo(areaCenter);
        this.map.fitBounds(areaBounds);
        this.map.scrollWheelZoom.enable(); // Wlacz scroll zoom
        this.map.dragging.enable(); // Wlacz dragging

    }

    removeCompanyMarkers() {

        let instance = this;

        // Usun markery
        this.markers.forEach(function (marker) {
            instance.map.removeLayer(marker);
        });
    }

    // Dodaje markery firm do mapy
    addCompanyMarkers(markersData) {

        let instance = this;

        if (markersData && markersData.length > 0) {

            this.markers = [];
            let markerMarkup;

            // Dodaj markery
            markersData.forEach(function (markerData) {
                let markerLayer = new L.marker([markerData.lat, markerData.lon], { icon: KbfMap.markerSymbol });
                markerMarkup = `<h6 class="mb-3">${markerData.company_name}</h6><p>${markerData.company_address}</p><p>${markerData.company_zip} ${markerData.company_city}</p>
                
                <p>${markerData.company_phone_1.length > 0 ? 'tel. ' + markerData.company_phone_1 : ''} ${markerData.company_phone_2.length > 0 ? ' , ' + markerData.company_phone_2 : ''}</p>
                <div style="text-align: center"><a href="https://webplanet.biz${markerData.url}">Zobacz szczegóły</a></div>`;
                markerLayer.bindPopup(markerMarkup);
                instance.markers.push(markerLayer);

            });

            this.markers.forEach(function (marker) {
                marker.addTo(instance.map);
            })
        }

    }

    // TODO
    destroy() {
    }

}

KbfMap.polandBoundary = [[47.027, 13.074], [56.851, 25.029]]; // Zasieg Polski
KbfMap.polandDetailMap = L.tileLayer.provider('OpenStreetMap.Mapnik'); // Tile Map szczegolowy
KbfMap.polandProvincesTiles = L.tileLayer.provider('USGS.USTopo'); // Tile Map dla wojewodztw
KbfMap.polandLabels = L.tileLayer.provider('Stamen.TonerLabels'); // Tile Map etykiet

KbfMap.polandTiles = L.tileLayer.provider('OpenStreetMap.Mapnik'); // Tile Map default

KbfMap.layerStyle = {}; // Style warstwy wojewodztwa i powiatu
KbfMap.markerSymbol = L.icon({
    iconUrl: `${url}/kbf/site/templates/assets/images/marker-icon.png`,
    iconSize:     [30, 40], // size of the icon
    iconAnchor:   [15, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})

KbfMap.markersAPIEndpoint = apiEndpoint;

export default KbfMap;