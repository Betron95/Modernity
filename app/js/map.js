/*Яндекс карта*/
ymaps.ready(init);
var myMap,mapPin1;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.80459207, 37.60010900],
        zoom: 15
    });
    mapPin1 = new ymaps.Placemark([55.80459206892335,37.600119728836056], {
        hintContent: 'улица Складочная, 15'
    });
    myMap.geoObjects.add(mapPin1);
}