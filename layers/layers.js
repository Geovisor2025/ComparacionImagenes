var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PerimetroABA_1 = new ol.format.GeoJSON();
var features_PerimetroABA_1 = format_PerimetroABA_1.readFeatures(json_PerimetroABA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroABA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroABA_1.addFeatures(features_PerimetroABA_1);
var lyr_PerimetroABA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroABA_1, 
                style: style_PerimetroABA_1,
                popuplayertitle: 'Perimetro ABA',
                interactive: true,
                title: '<img src="styles/legend/PerimetroABA_1.png" /> Perimetro ABA'
            });
var format_ClasificacinSupervisadaLACAHUARCASASPLANET_2 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaLACAHUARCASASPLANET_2 = format_ClasificacinSupervisadaLACAHUARCASASPLANET_2.readFeatures(json_ClasificacinSupervisadaLACAHUARCASASPLANET_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaLACAHUARCASASPLANET_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaLACAHUARCASASPLANET_2.addFeatures(features_ClasificacinSupervisadaLACAHUARCASASPLANET_2);
var lyr_ClasificacinSupervisadaLACAHUARCASASPLANET_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaLACAHUARCASASPLANET_2, 
                style: style_ClasificacinSupervisadaLACAHUARCASASPLANET_2,
                popuplayertitle: 'Clasificación Supervisada LACAHUARCA SAS PLANET',
                interactive: true,
    title: 'Clasificación Supervisada LACAHUARCA SAS PLANET<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_1.png" /> 2- CAFE<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_2.png" /> 3 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_3.png" /> 4 - COCA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_4.png" /> 5 - FRUTAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_5.png" /> 6 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_6.png" /> 7 - LECHUGA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_7.png" /> 8 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_8.png" /> 9 - MANDARINA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_9.png" /> 10 - PLATANO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_10.png" /> 11- SUELO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCASASPLANET_2_11.png" /> 12- VEGETACION<br />' });
var format_ClasificacinSupervisadaLACAHUARCAPLEIADES_3 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaLACAHUARCAPLEIADES_3 = format_ClasificacinSupervisadaLACAHUARCAPLEIADES_3.readFeatures(json_ClasificacinSupervisadaLACAHUARCAPLEIADES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaLACAHUARCAPLEIADES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaLACAHUARCAPLEIADES_3.addFeatures(features_ClasificacinSupervisadaLACAHUARCAPLEIADES_3);
var lyr_ClasificacinSupervisadaLACAHUARCAPLEIADES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaLACAHUARCAPLEIADES_3, 
                style: style_ClasificacinSupervisadaLACAHUARCAPLEIADES_3,
                popuplayertitle: 'Clasificación Supervisada LACAHUARCA PLEIADES',
                interactive: true,
    title: 'Clasificación Supervisada LACAHUARCA PLEIADES<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_1.png" /> 2 - CAFE<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_2.png" /> 3 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_3.png" /> 4 - COCA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_4.png" /> 5 - FRUTAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_5.png" /> 6 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_6.png" /> 7 - LECHUGA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_7.png" /> 8 - MANDARINA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_8.png" /> 9 - PLATANO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_9.png" /> 10 - SUELO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_10.png" /> 11 - VEGETACION<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCAPLEIADES_3_11.png" /> 12 - WALUSA<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PerimetroABA_1.setVisible(true);lyr_ClasificacinSupervisadaLACAHUARCASASPLANET_2.setVisible(false);lyr_ClasificacinSupervisadaLACAHUARCAPLEIADES_3.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_PerimetroABA_1,lyr_ClasificacinSupervisadaLACAHUARCASASPLANET_2,lyr_ClasificacinSupervisadaLACAHUARCAPLEIADES_3];
lyr_PerimetroABA_1.set('fieldAliases', {'Depto.': 'Depto.', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'A. Cult.': 'A. Cult.', 'A. no Cul': 'A. no Cul', });
lyr_ClasificacinSupervisadaLACAHUARCASASPLANET_2.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Cultivo': 'Cultivo', 'Superficie': 'Superficie', });
lyr_ClasificacinSupervisadaLACAHUARCAPLEIADES_3.set('fieldAliases', {'Clase': 'Clase', 'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Region': 'Region', 'Comunidad': 'Comunidad', 'Cultivo': 'Cultivo', 'Superficie': 'Superficie', });
lyr_PerimetroABA_1.set('fieldImages', {'Depto.': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'A. Cult.': '', 'A. no Cul': '', });
lyr_ClasificacinSupervisadaLACAHUARCASASPLANET_2.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Cultivo': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ClasificacinSupervisadaLACAHUARCAPLEIADES_3.set('fieldImages', {'Clase': 'TextEdit', 'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Region': 'TextEdit', 'Comunidad': 'TextEdit', 'Cultivo': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_PerimetroABA_1.set('fieldLabels', {'Depto.': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'A. Cult.': 'inline label - always visible', 'A. no Cul': 'inline label - always visible', });
lyr_ClasificacinSupervisadaLACAHUARCASASPLANET_2.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Superficie': 'inline label - always visible', });
lyr_ClasificacinSupervisadaLACAHUARCAPLEIADES_3.set('fieldLabels', {'Clase': 'inline label - always visible', 'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Region': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Superficie': 'inline label - always visible', });
lyr_ClasificacinSupervisadaLACAHUARCAPLEIADES_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});