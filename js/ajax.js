var xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		createPins(JSON.parse(xmlhttp.responseText));
	}
}

function getUserLocation() {
   var geoLocation = new Microsoft.Maps.GeoLocationProvider(map);
   geoLocation.getCurrentPosition({showAccuracyCircle: false,
      successCallback: function(object) {
         return object.center;
      }});
   console.log("failed to obtain user location");
}

window.onLoad=function({
	var coords=getUserLocation();
	xmlhttp.open("GET","./getDestinations.php?lon="+coords.longitude+"&lat"+coords.latitude);
	xmlhttp.send();
});