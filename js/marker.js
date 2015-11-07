var map = null;

var crap =  [{ "_id" : { "$oid" : "563e537567df6f4bddd226dd"} , "origin" : true , "loc" : [ 40.639751 , -73.778925] , "airport" : "JFK"} , 
            { "_id" : { "$oid" : "563e537567df6f4bddd226de"} , "origin" : true , "loc" : [ 26.072583 , -80.15275] , "airport" : "FLL"} , 
            { "_id" : { "$oid" : "563e537567df6f4bddd226df"} , "origin" : true , "loc" : [ 37.618972 , -122.374889] , "airport" : "SFO"} , 
            { "_id" : { "$oid" : "563e537567df6f4bddd226e0"} , "origin" : true , "loc" : [ 42.364347 , -71.005181] , "airport" : "BOS"} , 
            { "_id" : { "$oid" : "563e537667df6f4bddd226e1"} , "origin" : true , "loc" : [ 33.817722 , -118.151611] , "airport" : "LGB"} , 
            { "_id" : { "$oid" : "563e537667df6f4bddd226e2"} , "origin" : true , "loc" : [ 18.439417 , -66.001833] , "airport" : "SJU"} , 
            { "_id" : { "$oid" : "563e537667df6f4bddd226e3"} , "origin" : true , "loc" : [ 28.429394 , -81.308994] , "airport" : "MCO"} , 
            { "_id" : { "$oid" : "563e537667df6f4bddd226e4"} , "origin" : false , "loc" : [ 29.993389 , -90.258028] , "airport" : "\"MSY\""} , 
            { "_id" : { "$oid" : "563e537667df6f4bddd226e5"} , "origin" : false , "loc" : [ 13.074603 , -59.492456] , "airport" : "\"BGI\""} , 
            { "_id" : { "$oid" : "563e537667df6f4bddd226e6"} , "origin" : false , "loc" : [ 18.429664 , -69.668925] , "airport" : "\"SDQ\""} , 
            { "_id" : { "$oid" : "563e537767df6f4bddd226e7"} , "origin" : false , "loc" : [ 21.036528 , -86.877083] , "airport" : "\"CUN\""} , 
            { "_id" : { "$oid" : "563e537767df6f4bddd226e8"} , "origin" : false , "loc" : [ 19.7579 , -70.570033] , "airport" : "\"POP\""} , 
            { "_id" : { "$oid" : "563e537767df6f4bddd226e9"} , "origin" : false , "loc" : [ 33.942536 , -118.408075] , "airport" : "\"LAX\""} , 
            { "_id" : { "$oid" : "563e537767df6f4bddd226ea"} , "origin" : false , "loc" : [ 18.040953 , -63.1089] , "airport" : "\"SXM\""} ,
             { "_id" : { "$oid" : "563e537767df6f4bddd226eb"} , "origin" : false , "loc" : [ 36.080056 , -115.15225] , "airport" : "\"LAS\""} ,
              { "_id" : { "$oid" : "563e537867df6f4bddd226ec"} , "origin" : false , "loc" : [ 32.898647 , -80.040528] , "airport" : "\"CHS\""} , 
              { "_id" : { "$oid" : "563e537867df6f4bddd226ed"} , "origin" : false , "loc" : [ 27.975472 , -82.53325] , "airport" : "\"TPA\""} , 
              { "_id" : { "$oid" : "563e537867df6f4bddd226ee"} , "origin" : false , "loc" : [ 18.567367 , -68.363431] , "airport" : "\"PUJ\""} , 
              { "_id" : { "$oid" : "563e537867df6f4bddd226ef"} , "origin" : false , "loc" : [ 12.501389 , -70.015221] , "airport" : "\"AUA\""} , 
              { "_id" : { "$oid" : "563e537867df6f4bddd226f0"} , "origin" : false , "loc" : [ 26.536167 , -81.755167] , "airport" : "\"RSW\""} , 
              { "_id" : { "$oid" : "563e537867df6f4bddd226f1"} , "origin" : false , "loc" : [ 32.733556 , -117.189667] , "airport" : "\"SAN\""} , 
              { "_id" : { "$oid" : "563e537967df6f4bddd226f2"} , "origin" : false , "loc" : [ 13.733194 , -60.952597] , "airport" : "\"UVF\""} , 
              { "_id" : { "$oid" : "563e537967df6f4bddd226f3"} , "origin" : false , "loc" : [ 25.038958 , -77.466231] , "airport" : "\"NAS\""} , 
              { "_id" : { "$oid" : "563e537967df6f4bddd226f4"} , "origin" : false , "loc" : [ 12.188853 , -68.959803] , "airport" : "\"CUR\""} , 
              { "_id" : { "$oid" : "563e537967df6f4bddd226f5"} , "origin" : false , "loc" : [ 21.773625 , -72.265886] , "airport" : "\"PLS\""} , 
              { "_id" : { "$oid" : "563e537967df6f4bddd226f6"} , "origin" : false , "loc" : [ 18.503717 , -77.913358] , "airport" : "\"MBJ\""} , { "_id" : { "$oid" : "563e537a67df6f4bddd226f7"} , "origin" : false , "loc" : [ 10.593289 , -85.544408] , "airport" : "\"LIR\""} , { "_id" : { "$oid" : "563e537a67df6f4bddd226f8"} , "origin" : false , "loc" : [ 26.683161 , -80.095589] , "airport" : "\"PBI\""} , { "_id" : { "$oid" : "563e537a67df6f4bddd226f9"} , "origin" : false , "loc" : [ 19.267 , -69.742] , "airport" : "\"AZS\""} , { "_id" : { "$oid" : "563e537a67df6f4bddd226fa"} , "origin" : false , "loc" : [ 32.364042 , -64.678703] , "airport" : "\"BDA\""} , { "_id" : { "$oid" : "563e537a67df6f4bddd226fb"} , "origin" : false , "loc" : [ 18.450711 , -68.911833] , "airport" : "\"LRM\""} , { "_id" : { "$oid" : "563e537a67df6f4bddd226fc"} , "origin" : false , "loc" : [ 19.292778 , -81.35775] , "airport" : "\"GCM\""} , { "_id" : { "$oid" : "563e537b67df6f4bddd226fd"} , "origin" : false , "loc" : [ 12.004247 , -61.786192] , "airport" : "\"GND\""}];

function GetMap()
{
   Microsoft.Maps.loadModule('Microsoft.Maps.Themes.BingTheme', {callback: function() {
      map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {
         credentials: "AsoF4NMf_8XuII_mgpjlK08E-2rJxG-6-pJbSK7kLmfXTHGtHWDRHv267nDx3jJh",
         theme: new Microsoft.Maps.Themes.BingTheme(),
         enableClickableLogo: false,
         showDashboard: false,
         animate: false,
      });
      var focus = new Microsoft.Maps.Location(crap[crap.length-1].loc[0], crap[crap.length-1].loc[1]);

      map.setView({
         mapTypeId: Microsoft.Maps.MapTypeId.road,
         center: focus,
         zoom: 80,
      });

      var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(34.05, -118.24), null); 
      map.entities.push(pin1); 
      map.entities.push(new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(34.05, -118.24), {title: 'Los Angeles', description: 'description here', pushpin: pin1})); 
      var pin2 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(51.50, -0.127), null); 
      map.entities.push(pin2); 
      map.entities.push(new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(51.50, -0.127), {title: 'London', description: 'description here', pushpin: pin2})); 
      
      createPins(crap);
   }});
}

// locations should be a nested array of the lattitude and longitudinal points for each location that you want a pushpin on.
// text is whatever you want to display inside of the pushpin infobox.
function createPins(locations) {
   for(var i = 0; i < locations.length; i++) {
      var pin1 = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(locations[i].loc[0], locations[i].loc[1]), null); 
      map.entities.push(pin1);
      map.entities.push(new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(locations[i].loc[0], locations[i].loc[1]), {title: locations[i].airport, description: 'mind blown much wow.', pushpin: pin1}));
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

function searchModuleLoaded()
{
   var searchManager = new Microsoft.Maps.Search.SearchManager(map);

   var reverseGeocodeRequest = {location:new Microsoft.Maps.Location(47.5, -121.5), count:10, callback:reverseGeocodeCallback, errorCallback:errCallback};
   searchManager.reverseGeocode(reverseGeocodeRequest);
}

function reverseGeocodeCallback(result, userData)
{
   alert("The first result is " + result.name + ".");
}


function errCallback(request)
{
   alert("An error occurred.");
}