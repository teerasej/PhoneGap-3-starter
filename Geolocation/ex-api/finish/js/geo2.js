// JavaScript Document

var watchId;

function watchGeo( event , data ) {
	watchId = navigator.geolocation.watchPosition(getGeolocationSuccess,geolocationError);
	
	console.log("Watch position ID:" + watchId);
}

function unwatchGeo( event, data ) {
	console.log("Un watch position ID:" + watchId);
	
	navigator.geolocation.clearWatch(watchId);
	
	
	$('#txiLatitude').val('');
    $('#txiLongitude').val('');
    $('#txiAltitude').val('');
    $('#txiAccuracy').val('');
    $('#txiAltitudeAccuracy').val('');
    $('#txiHeading').val('');
    $('#txiSpeed').val('');
    $('#txiTimestamp').val('' );
}


function getGeolocationSuccess( position ) {
	console.log("got geo");
	$('#txiLatitude').val(position.coords.latitude   );
    $('#txiLongitude').val(position.coords.longitude );
    $('#txiAltitude').val(position.coords.altitude );
    $('#txiAccuracy').val(position.coords.accuracy );
    $('#txiAltitudeAccuracy').val(position.coords.altitudeAccuracy);
    $('#txiHeading').val(position.coords.heading );
    $('#txiSpeed').val(position.coords.speed  );
    $('#txiTimestamp').val(position.timestamp );

}

function geolocationError( error ) {
	navigator.notification.alert(error.code + ":" + error.message);
}