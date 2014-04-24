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

    // Clear the itinerary fields
    clearItineraryFields(true);

    itinerary.FBid = friendList.FBid;
    console.log(itinerary);
    $.post("http://web.engr.illinois.edu/~heng3/whosoutthere/php/addNewItinerary.php", {
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
    if (itineraryTitle == "" || cityName == "" || location == "" || friends == "") {
        console.log("cannot add itinerary with empty fields");
        return false;
    }

    // Check that itinerary name is valid. We do not want repeated itinerary names
    var fbid = friendList.FBid;
    if (fbid <= 0) {
        // User is not logged in
        window.alert("Are you logged in?");
    }
    $.get("http://web.engr.illinois.edu/~heng3/whosoutthere/php/getItinerary.php", {
        id: fbid
    }).done(function(data) {
        var result = $.parseJSON(data);
        for (trip in result) {
            if (itineraryTitle == result[trip][0]) {
                window.alert("Trip Already Exists");
                clearItineraryFields(true);
                return false;
            }
        }
        // Test for incorrect time format eg. 123:123 etc. Regex looks for (two digits:two digits)
        var correctTime = /^\d\d:\d\d$/.test(time);
        //console.log(correctTime);

        // Test for incorrect date format. Regex looks for mm/dd/yyyy. mm goes between 00 and 19, dd goes between 00 and 39, yyyy goes between 2000 and 2099.
        var correctDate = /^[01][0-9]\/[0-3][0-9]\/[2][0][0-9][0-9]$/.test(date);
        //console.log(correctDate);

        // This will send a pop up alert and return false
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

        clearItineraryFields(false);

        document.getElementById("added-cities").innerHTML +=
            "<tr>" +
            "<td>" + cityName + "</td>" +
            "<td>" + location + "</td>" +
            "<td>" + time + "</td>" +
            "<td>" + date + "</td>" +
            "<td>" + friends + "</td>" +
            "</tr>";


        return true;

    });

    /*
    // Test for incorrect time format eg. 123:123 etc. Regex looks for (two digits:two digits)
    var correctTime = /^\d\d:\d\d$/.test(time);
    //console.log(correctTime);

    // Test for incorrect date format. Regex looks for mm/dd/yyyy. mm goes between 00 and 19, dd goes between 00 and 39, yyyy goes between 2000 and 2099.
    var correctDate = /^[01][0-9]\/[0-3][0-9]\/[2][0][0-9][0-9]$/.test(date);
    //console.log(correctDate);

    // This will send a pop up alert and return false
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

    clearItineraryFields(false);

    document.getElementById("added-cities").innerHTML +=
        "<tr>" +
        "<td>" + cityName + "</td>" +
        "<td>" + location + "</td>" +
        "<td>" + time + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + friends + "</td>" +
        "</tr>";


    return true;*/
}

function clearItineraryFields(clearTitle) {
    if (clearTitle) {
        document.getElementById("itinerary-title").value = "";
    }
    document.getElementById("city-name").value = "";
    document.getElementById("location").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";
    document.getElementById("friends").value = "";
}

$('#date').datepicker().data('datepicker');

function activateFriendDropdown() {
    var fbfriends = friendList.friends;
    var availableTags = createFriendsDropdownArray("MULTIPLE", fbfriends);
    /*for(var i = 0; i < fbfriends.length; i++){
        var friend = fbfriends[i].name;
        availableTags.push(friend);
    }*/
    //console.log(availableTags);

    function split(val) {
        return val.split(/,\s*/);
    }

    function extractLast(term) {
        return split(term).pop();
    }

    $("#friends")
    // don't navigate away from the field on tab when selecting an item
    .bind("keydown", function(event) {
        if (event.keyCode === $.ui.keyCode.TAB &&
            $(this).data("ui-autocomplete").menu.active) {
            event.preventDefault();
        }
    })
        .autocomplete({
            minLength: 0,
            source: function(request, response) {
                // delegate back to autocomplete, but extract the last term
                response($.ui.autocomplete.filter(
                    availableTags, extractLast(request.term)));
            },
            focus: function() {
                // prevent value inserted on focus
                return false;
            },
            select: function(event, ui) {
                var terms = split(this.value);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the comma-and-space at the end
                terms.push("");
                this.value = terms.join(", ");
                return false;
            }
        });
}