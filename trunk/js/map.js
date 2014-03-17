var map;
    var geocoder;
    var markers = [];
    var testlatlng;

    var numFriendsInCity;

    function initialize() {
     /*if (GBrowserIsCompatible()) {
        map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(37.4419, -122.1419), 1);
        map.setUIToDefault();
        geocoder = new GClientGeocoder();
      }*/
      geocoder = new google.maps.Geocoder();
      var mapOptions = {
        center: new google.maps.LatLng(40.00, 260.000),
        zoom: 4
      };
      map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

    }
    google.maps.event.addDomListener(window, 'load', initialize);


    function showAddress(event,fn) {
      /*var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
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
                marker.openInfoWindowHtml(marker.getLatLng().toUrlValue(3));
              });
              GEvent.addListener(marker, "click", function() {
                marker.openInfoWindowHtml(marker.getLatLng().toUrlValue(3));
              });
	      GEvent.trigger(marker, "click");
            }
          }
        );
      }*/
      console.log(event);
      event.preventDefault();

      //gets the input address from the search box.
      var address = document.getElementById("query").value.split(", ")[0];
      console.log(address);
      if(markers.length!=0){
        markers[0].setMap(null);
        markers=[]
      }
      geocoder.geocode( { 'address': address}, function(results, status)
      {
        if (status == google.maps.GeocoderStatus.OK)
        {
            map.setCenter(results[0].geometry.location);

            //creates a new marker when we search for a place.
            var marker = new google.maps.Marker(
            {
                map: map,
                position: results[0].geometry.location
            });

            //adds an onclick listener to the marker. Opens a modal when the marker is clicked.
            google.maps.event.addListener(marker, 'click', function() {
             if(filterFriends.length===0){
              alert("You do not have any friends living here!");
             }
             else{

              //Dynamically adds our filtered list of friends to the modal. It contains their name and Facebook id. We will expand on this some way to  do more interactions.
              /*
              document.getElementById("filteredFriends").innerHTML="";
              for(var i = 0; i < filterFriends.length;i++){
                var friend = "<li class=\"list-group-item\">"+filterFriends[i].name+" - fbID: "+filterFriends[i].id+"</li>";
                document.getElementById("filteredFriends").innerHTML+=friend;
            }*/

              document.getElementById("filteredFriends").innerHTML="";
              numFriendsInCity = 0;
              for (var i = 0; i < filterFriends.length; i++) {
                  var friend = "<label class=\"btn btn-primary\"><input type=\"checkbox\" value=\""+filterFriends[i].name+"\" id=\"friend"+i+"\">"+
                  filterFriends[i].name+
                  "</label>"
                  document.getElementById("filteredFriends").innerHTML+=friend;
                  numFriendsInCity += 1;
              }


              $('#myModal').modal('show');
             }
            });
            markers.push(marker);
            testlatlng = {
              'lat':results[0].geometry.location.d,
              'lon':results[0].geometry.location.e
            }
            console.log(testlatlng);
            fn(testlatlng);
        }
        else
        {
            fn(status);
            console.log("Geocode was not successful for the following reason: " + status);
        }
    });

      showFriendList(address);
      document.getElementById("query").value = "";
    }

