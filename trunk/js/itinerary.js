function createItinerary() {
    var itineraryTitle = document.getElementById("itinerary-title").value;
    var cityName = document.getElementById("city-name").value;
    var location = document.getElementById("location").value;
    var time = document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var friends = document.getElementById("friends").value;
    
    //convert the itinerary input to an json object
    var itineraryObj = {};
    itineraryObj = {
    	"title" : itineraryTitle,
    	"city-name" : cityName,
    	"location" : location,
    	"time" : time,
    	"date" : date,
    	"friends" : friends
    }

    console.log("The itinerary JSON object is....");
    console.log(itineraryObj);
    
    //store itinerary JSON object to the backend database
    
}