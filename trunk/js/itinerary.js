var itinerary = {
    "Title": "",
    "FBid": 0,
    "meetings": []
};

function createItinerary() {
    /*
    var itineraryTitle = document.getElementById("itinerary-title").value;
    var cityName = document.getElementById("city-name").value;
    var location = document.getElementById("location").value;
    var time = document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var friends = document.getElementById("friends").value;

    //convert the itinerary input to an json object
    var itineraryObj = {};
    itineraryObj = {
        "title": itineraryTitle,
        "city-name": cityName,
        "location": location,
        "time": time,
        "date": date,
        "friends": friends
    }


    console.log("The itinerary JSON object is....");
    console.log(itineraryObj);*/

    itinerary.FBid = friendList.FBid;

    $.post("./php/addNewItinerary.php", {
        param: JSON.stringify(itinerary)
    }).done(function(data) {
        console.log(data);
        return false;
    });

    //store itinerary JSON object to the backend database

}

function addCity() {
    var itineraryTitle = document.getElementById("itinerary-title").value;
    var cityName = document.getElementById("city-name").value;
    var location = document.getElementById("location").value;
    var time = document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var friends = document.getElementById("friends").value;

    var correctTime = /^\d\d:\d\d$/.test(time);
    //console.log(correctTime);

    var correctDate = /^[01][0-9]\/[0-3][0-9]\/[2][0][0-9][0-9]$/.test(date);
    //console.log(correctDate);

    if (!correctTime || !correctDate) {
        window.alert("Invalid Time or Date!");
        return false;
    }

    var curMeeting = {
        "city": cityName,
        "location": location,
        "date": date,
        "time": time,
        "friends": friends
    }

    itinerary.Title = itineraryTitle;
    itinerary.meetings.push(curMeeting);

    //console.log(curMeeting);
    //console.log(itinerary)

    document.getElementById("city-name").value = "";
    document.getElementById("location").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";
    document.getElementById("friends").value = "";

    document.getElementById("added-cities").innerHTML +=
        "<tr>" +
        "<td>" + cityName + "</td>" +
        "<td>" + location + "</td>" +
        "<td>" + time + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + friends + "</td>" +
        "</tr>";


    return true;
}