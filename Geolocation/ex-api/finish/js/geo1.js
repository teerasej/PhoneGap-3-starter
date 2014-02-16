// JavaScript Document



function gettingGeo( event ,data ) {
	console.log("getting geo");
	navigator.geolocation.getCurrentPosition(getGeolocationSuccess,geolocationError);	
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