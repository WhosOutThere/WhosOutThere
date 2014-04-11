function showItinerary() {
	var fbid = friendList.FBid;
	$.get("http://web.engr.illinois.edu/~heng3/whosoutthere/php/getItinerary.php", {
		id: fbid
	}).done(function(data) {
		console.log(data);
		var result = $.parseJSON(data);
		console.log(result);
		document.getElementById("Itinerary").innerHTML = "";
		if (result.length==0){
			document.getElementById("Itinerary").value = "No itineraies displayed";
			document.getElementById("Itinerary").innerHTML = "<div class=\"panel panel-default\"><div class=\"panel-heading\"><strong>No itineraies displayed</strong></div></div>";
		}
		else{
			for(key in result){
				var tripname = result[key][0];
				var unit=  "<div class=\"panel panel-default\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" id=\""+key+"\" href=\"#collapse"+key+"\">"+tripname+"</a></h4></div>"+"<div id=\"collapse"+key+"\" class=\"panel-collapse collapse\"><div class=\"panel-body\">";
				var meeting=""
				var element=""
				var meetings = result[key][1];
				for (var j=0;j< meetings.length; j++){
					meeting=meeting+"<strong>"+meetings[j]['city']+"<strong><dl class=\"dl-horizontal\"><dt>Meeting with</dt><dd>"

					<!--get all friends in the list, if we have a jason object, the friendlist will be coressponded to the correct meeting-->
					var friends= meetings[j]['friend_name'];

					/*for (var k=0;k< meetings.length-1; k++){
						friends+= roadTripfriendmeetChicago[k]+","     
					}
					friends+=roadTripfriendmeetChicago[roadTripfriendmeetChicago.length-1]*/
					meeting+=friends+"</dd><dt>Date</dt><dd>"+meetings[j]['date']+"</dd><dt>Time</dt><dd>"+meetings[j]['time']+"</dd><dt>Location</dt><dd>"+meetings[j]['location']+"</dd></dl>"
					meeting+="<button onclick=\"firstRoute('"+meetings[j]['location']+", "+meetings[j]['city']+"',event)\">Getting there</button><hr>"
				}
				unit+= meeting+"</div></div></div>"
				document.getElementById("Itinerary").innerHTML += unit;

			}
		}
		return false;
	});
}