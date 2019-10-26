let map;
let directionService;
let directionsRenderer;
let geocoder;

/**
 * @author Camilo O.
 * solicitar en google llave valida para el uso del api.
 */

 //funcion principal
function initMap(){
    //carga mapa (en.... con, x zoom)
    map = new google.maps.Map(document.getElementById('map'),{
        center:{lat: 4.6005, lng: -74.07},
        zoom: 18
    });

    //marcador en el mapa
    var marrker0= new google.maps.Marker({
        position: {lat: 4.6005, lng: -74.0695},
        map: map,
        title: 'marcador'
    });
    
    //Coordenadas para la variable mCoordinates
    let mCoordinates = [
        {lat: 4.60, lng: -74.069},
        {lat: 4.6005, lng: -74.07},
        {lat: 4.601, lng: -74.069}
    ];

    let coordenadasB = [
        {lat: 4.601, lng: -74.069},
        {lat: 4.603, lng: -74.071},
        {lat: 4.599, lng: -74.069}
    ];

    //linea(s)
    let mPath = new google.maps.Polyline({
        path: mCoordinates,
        geodesic: true,
        strokeColor:'#FF0000',
        strokeOpaity:117,
        strokeWeigt:69
    });
    mPath.setMap(map);

    //polilineas
    let triengle = new google.maps.Polygon({
        paths: mCoordinates,
        strokeColor:'#7545b3',
        strokeOpaity:1,
        strokeWeigt:2,
        fillColor:'#baabce',
        fillOpacity: 0.50
    });
    triengle.setMap(map);

    //inicializar directionsService
    directionService = new google.maps.DirectionsService();
    /*
    *inicializar directionsRenderer
    *otra opcion para quitar los marcadores:
    *DirectionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
    */
   directionsRenderer = new google.maps.DirectionsRenderer();
    //Directions Service
    let request = {
        origin: coordenadasB[0],
        destination: coordenadasB[2],
        travelMode: 'DRIVING',
        waypoints: [{location:coordenadasB[1]}]
    };
    directionService.route(request,function(result,status){
        console.log(result);

    //Directions renderers
        if (status=='OK'){
        directionsRenderer.setDirections(result);
        };
    });
    directionsRenderer.setMap(map);

    //inicializar geocoder
    geocoder = new google.maps.Geocoder();
    //usar Geocoder
    address = 'Universidad de los Andes, Bogota, Colombia'
    geocoder.geocode({'address':address}, function(results, status){
        console.log(results);
        if(status == 'OK'){
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: address
            });
            //map.setMap(marker);
        }else{
            alert('problemas con Geocode'+status);
        }
    });
    //usar Geocoder inverso
    geocoder.geocode({'location':{lat: 4.60, lng: -74.069}}, function(results, status){
        console.log(results);
        if(status == 'OK'){
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: 'marcador2'
            });
            //map.setMap(marker);
        }else{
            alert('problemas con Geocode inverso'+status);
        }
    });
}
