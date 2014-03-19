  var friendList= new facebookFriends();
   test( "sendMessageTest1", function() {
     var friend0 = {
    'name':"Sherlock Holmes ",
    'location':'London, UK',
    'id':1234567
  }
	 var friend1 = {
    'name':"Harry Potter",
    'location':'London, UK',
    'id':33423523
  }
  
  
   friendList.showFriendList("London");	
   equal(friendList.filterFriends.length, 0, "WithOutPushIntoFriendsArray!");

  
  document.getElementById("friend0").value = "33423523";
  document.getElementById("friend1").value = "Sherlock Holmes";
  friendList.friends.push(friend0);
  friendList.friends.push(friend1);
  friendList.showFriendList("London");
  equal(friendList.filterFriends.length, 2, "PushedTwo!" );
	
  document.getElementById('friend0').checked = "checked";
  friendList.numFriendsInCity=2;
  var result=friendList.selectFriends();
  equal( result,1234567, "CorrectID!" );  
  friendList.friends.pop();
  friendList.friends.pop();

});

 test( "sendMessageTest2", function() {
     var friend0 = {
    'name':"Jame Holmes",
    'location':'Urbana, IL',
    'id':342432432
  }
   var friend1 = {
    'name':"John Smith",
    'location':'New York,New York',
    'id':33423523
  }
   document.getElementById("friend0").value = "Jame Holmes";
   document.getElementById("friend1").value = "John Smith";
   document.getElementById('friend1').checked = "checked";

  friendList.friends.push(friend0);
  friendList.friends.push(friend1);
  friendList.showFriendList("New York");
  friendList.numFriendsInCity=1;
  var resultb=friendList.selectFriends();
  equal( friendList.filterFriends.length, 1, "OneFriendLiveInNewYork!" );
  equal( friendList.friends.length, 2, "Passed!" );

 
}); 
  

  