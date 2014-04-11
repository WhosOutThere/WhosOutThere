     var tripsname=["roadtrip","flighttrip"];
     var roadTripCity=["CHICAGO","NEWYORK"];   
     var roadTripfriendmeetChicago=["Tom","John"];
     var roadTripMeetingChincagoDATE="03/05/2014";
     var roadTripMeetingChincagoTIME="9:00p.m";
     var roadTripMeetingChincagolocation="95 Folsom Ave, Suite 600 San Francisco, CA 94107";

 
  
  function showItinerary(json) {     
      document.getElementById("Itinerary").innerHTML = "";
      if (json.length==0){
            document.getElementById("Itinerary").value = "No itineraies displayed";
      	    document.getElementById("Itinerary").innerHTML = "<div class=\"panel panel-default\"><div class=\"panel-heading\"><strong>No itineraies displayed</strong></div></div>";
      	    }
      else{
	      for(var i=0;i < json.length;i++){
		 var unit=  "<div class=\"panel panel-default\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" id=\""+json[i]+"\" href=\"#collapse"+json[i]+"\">"+json[i]+"</a></h4></div>"+"<div id=\"collapse"+json[i]+"\" class=\"panel-collapse collapse\"><div class=\"panel-body\">";
		var meeting=""
	 	var element=""
	        for (var j=0;j< roadTripCity.length; j++){
	        	meeting=meeting+"<strong>"+roadTripCity[j]+"<strong><dl class=\"dl-horizontal\"><dt>Meeting with</dt><dd>"
	        	
	        	<!--get all friends in the list, if we have a jason object, the friendlist will be coressponded to the correct meeting-->
	        	 var friends= ""
	
	        	for (var k=0;k< roadTripfriendmeetChicago.length-1; k++){
	        	   friends+= roadTripfriendmeetChicago[k]+","     
	        	 }
	        	 friends+=roadTripfriendmeetChicago[roadTripfriendmeetChicago.length-1]
	               	meeting+=friends+"</dd><dt>Date</dt><dd>"+roadTripMeetingChincagoDATE+"</dd><dt>Time</dt><dd>"+roadTripMeetingChincagoTIME+"</dd><dt>Location</dt><dd>"+roadTripMeetingChincagolocation+"</dd></dl><hr>"
	     	
	        }
	        unit+= meeting+"</div></div></div>"
	        document.getElementById("Itinerary").innerHTML += unit;
	
    	  }
      }
 
}