  
  src="list.js"
    var map = null;
    var geocoder = null;

    function initialize() {
      if (GBrowserIsCompatible()) {
        map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(37.4419, -122.1419), 1);
        map.setUIToDefault();
        geocoder = new GClientGeocoder();
      }
    }

//a function to run the showAllLocation multiple times in order to load the markers
function warmup(){
	for(var i = 0; i < 70; i++){
		showAllLocation();
		
	}	
}

//this function go through the locations list and print markers
    function showAllLocation() {
      console.log("showAlllocation scope");
      console.log(globalNames);
      console.log(globalLocations);
           
      var localArray = Array();
      for(var i =0;i<globalLocations.length;i++){
      		localArray.push(globalLocations[i]);
      }
      console.log("localArray = ..., index sum = "+i.toString());
      console.log(localArray);      
      
      for(var i = 0; i<localArray.length; i++){
      	
      	console.log("index = "+i.toString());
      	console.log(localArray[i]);
      	
        geocoder.getLatLng(
          localArray[i],
          function(point) {
            
              map.setCenter(point, 1);
              var marker = new GMarker(point, {draggable: true});
              map.addOverlay(marker);
              GEvent.addListener(marker, "dragend", function() {
                marker.openInfoWindowHtml(marker.getLatLng().toUrlValue(3));
              });
              GEvent.addListener(marker, "click", function() {
              	if(marker.getLatLng()!=null){
                   marker.openInfoWindowHtml(marker.getLatLng().toUrlValue(3));
                }
              });
	      GEvent.trigger(marker, "click");
            
          }
        );
     
    }
    
    
    }
    

   // this function is the original function of google map 
   function showAddress(address) {
      if (geocoder) {
        geocoder.getLatLng(
          address,
          function(point) {
            if (!point) {
              alert(address + " not found");
            } else {
              map.setCenter(point, 15);
              var marker = new GMarker(point, {draggable: true});
              map.addOverlay(marker);
              GEvent.addListener(marker, "dragend", function() {
                marker.openInfoWindowHtml(marker.getLatLng().toUrlValue(2));
              });
              GEvent.addListener(marker, "click", function() {
                marker.openInfoWindowHtml(marker.getLatLng().toUrlValue(2));
              });
	      GEvent.trigger(marker, "click");
            }
          }
        );
      }
    }
  