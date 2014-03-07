<<<<<<< HEAD
findFriends();

  function findOneFriend(str){
    //index = Math.floor(Math.random()*globalNames.length);
    if(str==="Null")
      return null;
    else
      return str;
  }

  function testing(){
    return "1";
  }
var arr = sessionStorage.arr.split(",");
console.log(arr[1]);
test('testing()',function(){
equal(testing(),1,"equal 1");
	strictEqual(findOneFriend(arr[0]),null, "expected value should be null");
	strictEqual(findOneFriend(arr[1]),"Urbana","expected value should be Urbana, Illinois");
});

function saysHi(name) {
	return "Hi, " + name;
};

test('saysHi()', function() {
	equal(saysHi("Jack"), "Hi, Jack", "function outputs string correctly")

});
=======
  initialize();
  document.getElementById("query").value = "Champaign";
  var event, $submitButton = $( "#submit" );
  // trigger event
  var latlng;
  event = $.Event( "click");
  event.keyCode = 9;
  var test;

  //Test finding valid address works
  showAddress(event,function(loc){
    var param = loc;
    test('showAddress',function(){
      equal(param.lat,40.1164204,"Lon equals");
      equal(param.lon,-88.24338290000003, "Lat equals");
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
  globalFriends.push(friend);
  globalFriends.push(friend2);
    //Test finding a city with a friend in it.
    var filteredFriend = showFriendList("Urbana");
    equal(filteredFriend[0].location,"Urbana, IL","Test filterFriend");
    //Test finding a city without a friend in it.
    filteredFriend = showFriendList("London");
    equal(filteredFriend.length,0,"No friends found");   
  });
>>>>>>> origin/joshuashuotianiteration3
