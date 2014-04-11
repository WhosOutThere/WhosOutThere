//Test filtering friends from a list.
//done by xiaoying and samuel
  test('addCityWithEmptyTitle',function(){
      document.getElementById("itinerary-title").value = "";
      equal(addCity(),false,"empty title");   
    });
  test('addCityWithEmptyCityName',function(){
      document.getElementById("city-name").value = "";
      equal(addCity(),false,"empty city name");   
    });
  test('addCityWithEmptyLocation',function(){
      document.getElementById("location").value = "";
      equal(addCity(),false,"empty location");   
    });
  test('addCityWithEmptyFriends',function(){
      document.getElementById("friends").value = "";
      equal(addCity(),false,"empty friends");   
    });
  test('addCityWithInvalidTime',function(){
    document.getElementById("time").value = "1200";
    equal(addCity(),false,"invalid time");   
  });

  test('addCityWithInvalidDate',function(){
    document.getElementById("date").value = "31/2/14";
    equal(addCity(),false,"invalid date");
  });