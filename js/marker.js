var map = null;

function GetMap()
{
   // Create a variable to hold the map itself.
   map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {credentials: "AsoF4NMf_8XuII_mgpjlK08E-2rJxG-6-pJbSK7kLmfXTHGtHWDRHv267nDx3jJh", 
      center: new Microsoft.Maps.Location(47.5, -122.3), zoom: 14 });

   // Retrieve the location of the map center 
   var center = map.getCenter();
   console.log(center);
   var pushpinOptions = {width: null, height: null, htmlContent: "<div style='width:8px;height:8px;margin-left:-6px;margin-top:-5px;background-image:none !important;background-color:#29C0F2;border:1px solid #009DD1;border-radius:8px;-moz-border-radius:8px;-webkit-border-radius:8px;-o-border-radius:8px;-webkit-transition:all .1s ease;-moz-transition:all .1s ease;-o-transition:all .1s ease;transition:all .1s ease;-ms-transition:none'></div>"}; 

   var infoboxOptions = {width :100, height :40, showCloseButton: false, showPointer: true, title: "hello"}; 

   var Infobox = new Microsoft.Maps.Infobox(center, infoboxOptions);    
   var pushpin = new Microsoft.Maps.Pushpin(center, pushpinOptions); 
   map.entities.push(pushpin);
   map.entities.push(Infobox);
}

// locations should be a nested array of the lattitude and longitudinal points for each location that you want a pushpin on.
// text is whatever you want to display inside of the pushpin infobox.
function createPins(locations, text) {
   var targetLocations = new Microsoft.Maps.EntityCollection();

   var pushpinOptions = {width: null, height: null, htmlContent: "<div style='width:8px;height:8px;margin-left:-6px;margin-top:-5px;background-image:none !important;background-color:#29C0F2;border:1px solid #009DD1;border-radius:8px;-moz-border-radius:8px;-webkit-border-radius:8px;-o-border-radius:8px;-webkit-transition:all .1s ease;-moz-transition:all .1s ease;-o-transition:all .1s ease;transition:all .1s ease;-ms-transition:none'></div>"}; 
   var infoboxOptions;

   for(var i = 0; i < locations.length; i++) {
      infoboxOptions = {width :100, height :40, showCloseButton: false, showPointer: true, title: text}; 
      targetLocations.push(new Microsoft.Maps.Pushpin(targetLocations[i], pushpinOptions));
      targetLocations.push(new Microsoft.Maps.Infobox(targetLocations[i], infoboxOptions));
   }

   map.entities.push(targetLocations);
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
