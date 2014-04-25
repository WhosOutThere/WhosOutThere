initialize();
  document.getElementById("query").value = "Champaign";
  var event, $submitButton = $( "#submit" );
  // trigger event
  var latlng;
  event = $.Event( "click");
  event.keyCode = 9;
  var test;
  var friendList = new facebookFriends();

  //Test finding valid address works
  
  showAddress(event,function(loc){
    var param = loc;
    console.log(param);
    test('showAddress',function(){
      equal(param.lat,40.1164204,"Lat equals");
      equal(param.lon,-88.24338290000003, "Lon equals");
    });
  });

  document.getElementById("query").value = "irhioewhfiosdf";

  //Test finding invalid address doesn't work
  showAddress(event,function(loc){
    var param = loc;
    test('showAddress',function(){
      equal(param,"ZERO_RESULTS","Test invalid address");
    });
  });

  
  //Test filtering friends from a list.
  test('showFriendList',function(){
    var friend = {
    'name':"John Doe",
    'location':'Urbana, IL',
    'fbID':342432432
  }
  var friend2 = {
    'name':"Jane Doe",
    'location':'Austin, TX',
    'fbID':33423523
  }
  friendList.friends.push(friend);
  friendList.friends.push(friend2);
    //Test finding a city with a friend in it.
    friendList.showFriendList("Urbana");
    var filteredFriend = friendList.filterFriends;
    equal(filteredFriend[0].location,"Urbana, IL","Test filterFriend");
    //Test finding a city without a friend in it.
    friendList.showFriendList("London");
    filteredFriend = friendList.filterFriends;
    equal(filteredFriend.length,0,"No friends found");   
  });

  //test formatting the strings for sharing itinerary
  test('formatMeetingWithEmptyMeeting',function(){
    //test empty meeting
    var meeting = [];
    var formattedMeeting = formatMeeting(meeting);
    equal(formattedMeeting,false,"No meetings to be formatted");
  });



 
	

  //test formatting the strings for sharing itinerary
  test('formatProperMeeting',function(){
    //test proper meeting
    
    var meeting = ["Test Itinerary",[
        {
          'city':'Chicago',
          'date':'04/11/2014',
          'time':'12:00'
        }
        ]
    ];
    var formattedMeeting = formatMeeting(meeting);
    var expectedoutput = "Test Itinerary\n\nCity: Chicago\nDate: 04/11/2014\nTime: 12:00\n\n";
    equal(formattedMeeting,expectedoutput,"Meetings to be formatted");
  });

  //test formatting the strings for sharing itinerary
  test('formatMeetingWithIncompleteMeeting',function(){
    //test meeting with missing fields
    var meeting = ["Test Itinerary",[
        {
          'city':'Chicago',
          'date':'04/11/2014',
          'time':""
        }
        ]
    ];
    var formattedMeeting = formatMeeting(meeting);
    equal(formattedMeeting,false,"Meeting is missing a field");
  });

  //test shareItinerary function
  test('shareItineraryWithoutFbId',function(){
    //test meeting with missing fields
    var output = shareItinerary(21);
    equal(output,false,"Missing friend's fbid");
  });

  //test shareItinerary function
  test('shareItineraryWithInvalidKey',function(){
    //test meeting with missing fields
    var output = shareItinerary(-1);
    equal(output,false,"Invalid Key");
  });
  
 //test empty city
    test('formatWeatherWithEmptyCity',function(){
    var city=null;
    var formattedCityWeather = formatWeather(city);
    equal(formattedCityWeather,false,"No weather in empty city to be formatted");
  });


//test correct input
   test('formatWeatherCorrectInput',function(){
    var CityWeather = {"location": {
                     "city": "San Francisco",}, 
 		     "current_observation":{ "temperature_string": "66.3 F (19.1 C)","weather":"Overcast"}}
    var formattedCityWeather = formatWeather(CityWeather);
    var result= "<p>Current weather in San Francisco is Overcast<br>The current temperature is 66.3 F (19.1 C)<br>For more information, visit <a href=\"undefined\" target=\"_blank\">San Francisco weather</a></p>"
    equal(formattedCityWeather,result,"correct weather in city");
  });


   test('formatWeatherInput',function(){
    var CityWeather = {"location": {
                     "city": "Urbana",}, 
 		     "current_observation":{ "temperature_string": "66.3 F (19.1 C)","weather":"Overcast"}}
    var formattedCityWeather = formatWeather(CityWeather);
    var result= "<p>Current weather in Urbana is Overcast<br>The current temperature is 66.3 F (19.1 C)<br>For more information, visit <a href=\"undefined\" target=\"_blank\">Urbana weather</a></p>"
    equal(formattedCityWeather,result,"correct weather in city");
});

test('formatWeatherIncorrectInput',function(){
    var CityWeather = {"location": {
                     "city": "",}, 
                       "weather": "Partly Cloudy",
 		     "current_observation":{ "temperature_string": "66.3 F (19.1 C)"}}
    var formattedCityWeather = formatWeather(CityWeather);
    var result= "<p>Current weather in San Francisco is undefined<br>The current temperature is 66.3 F (19.1 C)<br>For more information, visit <a href=\"undefined\" target=\"_blank\">San Francisco weather</a></p>"
    equal(formattedCityWeather,false,"Incorrect city ");
  });
  
  
  test('formatWeatherWithoutTemp',function(){
    var CityWeather = {"location": {
                     "city": "San Francisco",}, 
 		     "current_observation":{ }}
    var formattedCityWeather = formatWeather(CityWeather);
    var result= "<p>Current weather in San Francisco is undefined<br>The current temperature is undefined<br>For more information, visit <a href=\"undefined\" target=\"_blank\">San Francisco weather</a></p>"
    equal(formattedCityWeather,result,"undefined temperature in a city");
  });