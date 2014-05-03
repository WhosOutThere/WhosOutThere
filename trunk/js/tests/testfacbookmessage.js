  var friendList= new facebookFriends();
  var roadTripCity=["CHICAGO","NEWYORK"];   

  
 test( "displayItinerary1 not logged in", function() {
  friendList.fbid = -12323; 
    equal(showItinerary(),false, "invalid fb id" );  
});
  
   test( "displayItinerary2 no itineraries", function() {
     showItinerary(); 
     var result=document.getElementById("Itinerary").innerHTML;
     if(result != "")
      equal(result,"No itineraies displayed", "no trips in the database" );
      else
        ok(true, "Has itineraries");
});

 test( "displayItinerary3", function() {
     var trips=["roadtrip"];
     showItinerary(trips); 
     var result=document.getElementById(trips[0]).innerHTML;
     notEqual(result,"fligttrip","wrongTrip");
});
   test( "displayItinerary4", function() {
     var trips=["roadtrip","fligttrip"];
     showItinerary(trips); 
     var result=document.getElementById(trips[0]).innerHTML;
     var result1=document.getElementById(trips[1]).innerHTML;
     notEqual(result,trips[1], "Notsametrip" );  
});

 test( "displayItinerary5", function() {
     var trips=["roadtrip","fligttrip"];
     showItinerary(trips); 
     var result=document.getElementById(trips[0]).innerHTML;
     var result1=document.getElementById(trips[1]).innerHTML;
     notEqual(result1,trips[0],"Notsametrip");
});


 
  
  
  
  
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
  

  