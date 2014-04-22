var globalmeetings = {};

function showItinerary() {
	var fbid = friendList.FBid;
	if(fbid <= 0){
		return false;
	}
	$.get("http://web.engr.illinois.edu/~heng3/whosoutthere/php/getItinerary.php", {
		id: fbid
	}).done(function(data) {
		console.log(data);
		var result = $.parseJSON(data);
		console.log(result);
		globalmeetings=result;
		document.getElementById("Itinerary").innerHTML = "";
		if (result.length==0){
			document.getElementById("Itinerary").value = "No itineraies displayed";
			document.getElementById("Itinerary").innerHTML = "<div class=\"panel panel-default\"><div class=\"panel-heading\"><strong>No itineraies displayed</strong></div></div>";
		}
		else{
			for(key in result){
				var tripname = result[key][0];
				var unit=  "<div class=\"panel panel-default\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a onclick=\"renderFbListInDropdown("+key+")\" data-toggle=\"collapse\" data-parent=\"#accordion\" id=\""+key+"\" href=\"#collapse"+key+"\">"+tripname+"</a></h4></div>"+"<div id=\"collapse"+key+"\" class=\"panel-collapse collapse\"><div class=\"panel-body\">";
				var meeting=""
				var element=""
				var meetings = result[key][1];
				for (var j=0;j< meetings.length; j++){
					meeting=meeting+"<strong>"+meetings[j]['city']+"<strong><dl class=\"dl-horizontal\"><dt>Meeting with</dt><dd>"

					<!--get all friends in the list, if we have a jason object, the friendlist will be coressponded to the correct meeting-->
					var friends= meetings[j]['friend_name'];
					meeting+=friends+"</dd><dt>Date</dt><dd>"+meetings[j]['date']+"</dd><dt>Time</dt><dd>"+meetings[j]['time']+"</dd><dt>Location</dt><dd>"+meetings[j]['location']+"</dd></dl>"
					meeting+="<button onclick=\"firstRoute('"+meetings[j]['location']+", "+meetings[j]['city']+"',event)\">Getting there</button><hr>"
				}
				//input field for selecting the friend you want to share itinerary with
				meeting+="<input class=\"share-itinerary-friend\" id=\"share-itinerary-friend"+key+"\" placeholder=\"Enter friend's name\"></input>";
				//button to share itinerary with
				meeting+="<button id=\"shareitbtn"+key+"\" onclick=\"shareItinerary("+key+")\">Share Itinerary</button>";
				unit+= meeting+"</div></div></div>"
				document.getElementById("Itinerary").innerHTML += unit;
			}
		}
		return false;
	});
}

//function to render the fb friend list in the dropdown for the meeting we select. This prevents us from rendering multiple dropdown lists if we have multiple meetings.
function renderFbListInDropdown(itineraryid){
	var fbfriends = friendList.friends;
	var inputid = "#share-itinerary-friend"+itineraryid;
	console.log(inputid);
	console.log(fbfriends);
	var friends = [];
	for(var i = 0; i < fbfriends.length; i++){
		var friend = {
			'value':fbfriends[i].id,
			'label':fbfriends[i].name
		};
		friends.push(friend);
	}
    $( "#share-itinerary-friend"+itineraryid ).autocomplete({
      minLength: 0,
      source: friends,
      focus: function( event, ui ) {
        $( "#share-itinerary-friend"+itineraryid ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#share-itinerary-friend"+itineraryid ).val( ui.item.label );
        console.log(ui.item.value );
 		for(key in globalmeetings){
 			if(key==parseInt(itineraryid)){
 				$("#shareitbtn"+key).attr('onclick',"shareItinerary("+key+","+ui.item.value+")");
 				//$("#feedform_user_message").html(sharecontent);
 			}
 		}
        return false;
      }
    })
    .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
      return $( "<li>" )
        .append( "<a>" + item.label +"</a>" )
        .appendTo( ul );
    };
}

function formatMeeting(meeting){
	if(meeting.length==0){
		return false;
	}
	var title = meeting[0];
	var meetings = meeting[1];
	var output = ""
	output += title + "\n\n";
	for(var i = 0; i < meetings.length; i++){
		if(meetings[i].city==""||meetings[i].date==""||meetings[i].time==""){
			return false;
		}
		output+="City: " + meetings[i].city + "\n";
		output+="Date: " + meetings[i].date + "\n";
		output+="Time: " + meetings[i].time + "\n";
		output+="\n";
	}
	return output;
}

function shareItinerary(key,fbid){
	if(fbid == null){
		console.log("No Fbid");
		return false;
	}
	if(key < 0){
		return false;
	}
	var sharecontent = formatMeeting(globalmeetings[key]);
	console.log(sharecontent);
	console.log(fbid);
	var url = "http://web.engr.illinois.edu/~heng3/whosoutthere/shareditinerary.html?itineraryid="+key+"&fid="+friendList.FBid;
	friendList.sendMessage(fbid,url);
	console.log("SUCCESS");
	return "SUCCESS";
}