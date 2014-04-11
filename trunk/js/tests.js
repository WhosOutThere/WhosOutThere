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