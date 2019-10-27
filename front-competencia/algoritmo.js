var lista;
var listaYaPaso;
var listafalta;
var listo;

listo = [{location: 'Calle 85 #23-10, Bogota'},
{location: 'Calle 93 #19-10, Bogota'},
{location: 'Calle 100 #19-10, Bogota'},
{location: 'Calle 108 #15-10, Bogota'},
{location: 'Calle 116 #20-10, Bogota'}];

listafalta = listo;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 4.66421, lng: -74.07861 },
        zoom: 16
    });

    inicializarLista();
}

function inicializarLista() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer({
        supressMarkers: true
    })

    let request = {
        origin: 'Colegio Italiano Leonardo Da Vinci, Bogota',
        destination: 'Colegio Italiano Leonardo Da Vinci, Bogota',
        travelMode: 'DRIVING',
        waypoints: [{ location: 'Calle 85 #23-10, Bogota' },
        { location: 'Calle 93 #19-10, Bogota' },
        { location: 'Calle 100 #19-10, Bogota' },
        { location: 'Calle 108 #15-10, Bogota' },
        { location: 'Calle 116 #20-10, Bogota' }]
    };

    directionsService.route(request, function (result, status) {
        console.log(result);
        lista = result;
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        }
    });
    directionsRenderer.setMap(map);
}


function ya(b){
    for(i=0; i<b ; i++){
        listaYaPaso[i]=listo[i];
        listafalta.shift();

    }
}


function calcularPorcentaje(puntoActual, puntoFinalDefinido) {
    return (distanciaRecorrida(puntoActual) / distanciaTotal()) * 100;
}


<<<<<<< HEAD
function distanciaRecorrida(puntoActual) {
    dist = 0;
    for (i = 0; i < listaYaPaso.routes[0].legs.length; i++) {
=======
function distanciaRecorrida(puntoActual)
{
    dist =0;
    for(i = 0 ; i < listaYaPaso.routes[0].legs.length; i++){
>>>>>>> acfc3c32ddd67ca55be6fd838fb5bc6b6839f5fc
        dist = dist + lista.routes[0].legs[i].distance.value;

    }
    return dist
}

function distanciaTotal() {
    dist = 0;
    for (i = 0; i < lista.routes[0].legs.length; i++) {
        dist = dist + lista.routes[0].legs[i].distance.value;
    }
    return dist
}


/*
*BONO
*/
/* dentro = false;
function estaDentroCamino(punto)
{
    if(){
        dentro = true;
    }
    return dentro
<<<<<<< HEAD
=======
} */

function calcularaListas() {

>>>>>>> 8bb66011e38ef3b417e7c3b2a4b7aa9aa0e17474
}
 */

/***
 * Modifica Json (BONO)
 */
<<<<<<< HEAD
function calcularNuevaRuta(puntoActual){
  

    let request = {
        origin: puntoActual,
        destination: 'Colegio Italiano Leonardo Da Vinci, Bogota',
        travelMode: 'DRIVING',
        waypoints: listafalta
    };
=======
function calcularNuevaRuta(puntoActual, puntoFinal) {
>>>>>>> 8bb66011e38ef3b417e7c3b2a4b7aa9aa0e17474

    directionsService.route(request, function(result, status){
        console.log(result);
        if(status == 'OK') {
            directionsRenderer.setDirections(result);
        }
    });
    directionsRenderer.setMap(map);
}