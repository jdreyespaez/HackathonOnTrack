var lista;
var listaYaPaso;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 4.66421, lng: -74.07861 },
        zoom: 16
      });
}

function inicializarLista() {
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


function ya(b) {
    for (i = 0; i < b; i++) {
        listaYaPaso[i] = lista[i];
    }
}


function calcularPorcentaje(puntoActual, puntoFinalDefinido) {
    return (distanciaRecorrida(puntoActual) / distanciaTotal()) * 100;
}

function distanciaRecorrida(puntoActual) {
    dist = 0;
    for (i = 0; i < listaYaPaso.routes[0].legs.length; i++) {
        dist = dist + listaYaPaso.routes[0].legs[i].distance.value;
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
} */

function calcularaListas() {

}

/***
 * Modifica Json (BONO)
 */
function calcularNuevaRuta(puntoActual, puntoFinal) {

}