$( document ).ready(function() {
  var params = location.search;
  params = params.substr(1);
  var itineraryid = params.substring(params.indexOf("=")+1,params.indexOf("&"));
  var nextparam = params.substring(params.indexOf("&")+1);
  var fbid = parseInt(nextparam.substring(nextparam.indexOf("=")+1));
  //get the itinerary that matches the itineraryid.
  $.get("http://web.engr.illinois.edu/~heng3/whosoutthere/php/getItinerary.php", {
		id: fbid
	}).done(function(data) {
		console.log(data);
		var result = $.parseJSON(data);
		console.log(result);
		console.log(result[itineraryid][0]);
		var title = result[itineraryid][0];
		var meetings = result[itineraryid][1];
		$("#itinerary-title").html(title);
		var meeting="";
		for(var i = 0; i < meetings.length; i++){
			meeting+= "<li class=\"list-group-item\">";
			meeting+= "City: "+meetings[i].city +"<br>";
			meeting+= "Date: "+meetings[i].date +"<br>";
			meeting+= "Time: "+meetings[i].time +"<br>";
			meeting+="</li>";
		}
		$("#meetings").html(meeting);
		return false;
	});
});