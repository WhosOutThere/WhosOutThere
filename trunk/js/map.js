var map;
var geocoder;
var markers = [];
var testlatlng;

var numFriendsInCity;

var directionsDisplay;
var directionsService;

function initialize() {
    geocoder = new google.maps.Geocoder();
    var mapOptions = {
        center: new google.maps.LatLng(40.00, 260.000),
        zoom: 4
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    //directionsDisplay.setMap(map);
    //directionsDisplay.setPanel(document.getElementById('directions-panel'));

}
google.maps.event.addDomListener(window, 'load', initialize);

function firstRoute(end,event) {
  
  event.preventDefault();
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directions-panel'));
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var request = {
    origin: pos,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  console.log(request);
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      $("#displyItinerary").modal('hide');
    }
  });
    }, function() {
      handleNoGeolocation(true);
    });
  }
  
  
}


function showAddress(event, fn) {
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
    if (markers.length != 0) {
        markers[0].setMap(null);
        markers = []
    }
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);

            //creates a new marker when we search for a place.
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });

            //adds an onclick listener to the marker. Opens a modal when the marker is clicked.
            google.maps.event.addListener(marker, 'click', function() {
                if (friendList.filterFriends.length === 0) {
                    alert("You do not have any friends living here!");
                } else {

                    //Dynamically adds our filtered list of friends to the modal. It contains their name and Facebook id. We will expand on this some way to  do more interactions.
                    /*
              document.getElementById("filteredFriends").innerHTML="";
              for(var i = 0; i < filterFriends.length;i++){
                var friend = "<li class=\"list-group-item\">"+filterFriends[i].name+" - fbID: "+filterFriends[i].id+"</li>";
                document.getElementById("filteredFriends").innerHTML+=friend;
            }*/

                    document.getElementById("filteredFriends").innerHTML = "";
                    numFriendsInCity = 0;
                    for (var i = 0; i < friendList.filterFriends.length; i++) {
                        var friend = "<label class=\"btn btn-primary\"><input type=\"radio\" value=\"" + friendList.filterFriends[i].name + "\" id=\"friend" + i + "\">" +
                            friendList.filterFriends[i].name +
                            "</label>"
                        document.getElementById("filteredFriends").innerHTML += friend;
                        numFriendsInCity += 1;
                        friendList.numFriendsInCity += 1;
                    }


                    $('#myModal').modal('show');
                }
            });
            markers.push(marker);
            testlatlng = {
                'lat': results[0].geometry.location.k,
                'lon': results[0].geometry.location.A
            }
            console.log(testlatlng);
            fn(testlatlng);
        } else {
            fn(status);
            console.log("Geocode was not successful for the following reason: " + status);
        }
    });

    //showFriendList(address);
    friendList.showFriendList(address);
    document.getElementById("query").value = "";
}
