var globalmeetings = {};

/**
*create dropdown list for corresponding friends with first few letter entried  
*@return {output} array contains all the friends 
**/
function createFriendsDropdownArray(type,fbfriends){
	var output = [];
	for(var i = 0; i < fbfriends.length; i++){
		if(type=="SINGLE"){
			var friend = {
			'value':fbfriends[i].id,
			'label':fbfriends[i].name
			};
			output.push(friend);
		}
		else{
			var friend = fbfriends[i].name;
        	output.push(friend);
		}
	}
	return output;	
}



/**
* generate itinearies block to display information of each itinerary
* @return {bool} false to generate
*/
function showItinerary() {
	var fbid = friendList.FBid;
	if(fbid <= 0){
		return false;
	}
	$.get("http://web.engr.illinois.edu/~heng3/whosoutthere/php/getItinerary.php", {
		id: fbid
	}).done(function(data) {
		var result = $.parseJSON(data);
		globalmeetings=result;
		document.getElementById("Itinerary").innerHTML = "";
		if (result.length==0){
			document.getElementById("Itinerary").value = "No itineraies displayed";
			document.getElementById("Itinerary").innerHTML = "<div class=\"panel panel-default\"><div class=\"panel-heading\"><strong>No itineraies displayed</strong></div></div>";
		}
		else{
			for(key in result){
				var tripname = result[key][0];
				var unit=  "<div class=\"panel panel-default\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a onclick=\"renderFbListInDropdown("+key+")\" data-toggle=\"collapse\" data-parent=\"#accordion\" id=\"it"+key+"\" href=\"#collapse"+key+"\">"+tripname+"</a></h4></div>"+"<div id=\"collapse"+key+"\" class=\"panel-collapse collapse\"><div class=\"panel-body\">";
				var meeting=""
				var element=""
				var meetings = result[key][1];
				for (var j=0;j< meetings.length; j++){
					meeting+="<div class=\"well\"><div><h3>"+meetings[j]['city']+"</h3></div><hr>"+"<strong><div>Meeting with: </strong>"

					<!--get all friends in the list, if we have a jason object, the friendlist will be coressponded to the correct meeting-->
					var friends= meetings[j]['friend_name'];
					meeting+=friends+"</div><div><strong>Date: </strong>"+meetings[j]['date']+"</div><div><strong>Time: </strong>"+meetings[j]['time']+"</div><div><strong>Location: </strong>"+meetings[j]['location']+"</div>"
					meeting+="<button class=\"btn btn-default btn-primary modal-buttons\" onclick=\"firstRoute('"+meetings[j]['location']+", "+meetings[j]['city']+"',event)\">Getting there</button>"
				
					var uniqueid = key+meetings[j]['city'];
					meeting+="<button class=\"btn btn-default btn-primary modal-buttons\" onclick=\"getWeather('"+uniqueid+"', '"+meetings[j]['city']+"',event)\">Get Weather</button>";
					meeting+="<div id=\""+uniqueid+"\"></div></div>";	
				}
				//input field for selecting the friend you want to share itinerary with
				meeting+="<div class=\"input-group\"><input class=\"form-control share-itinerary-friend\" id=\"share-itinerary-friend"+key+"\" placeholder=\"Enter friend's name\"></input>";
				//button to share itinerary with
				meeting+="<button class=\"btn btn-default btn-success modal-buttons\" id=\"shareitbtn"+key+"\" onclick=\"shareItinerary("+key+")\">Share Itinerary</button></div>";
				unit+= meeting+"</div></div></div>"
				document.getElementById("Itinerary").innerHTML += unit;
			}
		}
		return false;
	});
}


/**
* render the fb friend list in the dropdown for the meeting we select,
* this prevents us from rendering multiple dropdown lists if we have multiple meetings.
* @param {itineraryid} object contain date needed to displayed
*/

function renderFbListInDropdown(itineraryid){
	var fbfriends = friendList.friends;
	var inputid = "#share-itinerary-friend"+itineraryid;
	var friends = createFriendsDropdownArray("SINGLE",fbfriends);
	
    $( "#share-itinerary-friend"+itineraryid ).autocomplete({
      minLength: 0,
      source: friends,
      focus: function( event, ui ) {
        $( "#share-itinerary-friend"+itineraryid ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#share-itinerary-friend"+itineraryid ).val( ui.item.label );
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


/**
* form meeting information
* @param {meeting} some object contain date needed to be displayed
* @return {output} string , string will be packed in html node
*/

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


/**
*  share a itineray with in Facebook
*  @param {key} some object contain date needed to be displayed
*  @param {fbid} user's facebook id
*  @return {bool} if not success, reuturn false
**/

function shareItinerary(key,fbid){
	if(fbid == null){
			return false;
	}
	if(key < 0){
		return false;
	}
	var sharecontent = formatMeeting(globalmeetings[key]);
	var url = "http://web.engr.illinois.edu/~heng3/whosoutthere/shareditinerary.html?itineraryid="+key+"&fid="+friendList.FBid;
	friendList.sendMessage(fbid,url);
	return "SUCCESS";
}


/**
*  formatWeather create html contain weather data
*  @param {parsed_json} some json oject from the underweather.com
*  @return {content} some html will be displayed in Itinerary block
*/

function formatWeather(parsed_json){
                 	if(parsed_json==null){
                 		return false;   }         
                        var location = parsed_json['location']['city'];
                        if (location==""){
                          return false;
                        }
			var temperature = parsed_json['current_observation']['temperature_string'];
			var weather = parsed_json['current_observation']['weather'];
			var more_info = parsed_json['current_observation']['forecast_url'];
			var content = "<p>Current weather in " + location + " is "+ weather +"<br>" +
				      "The current temperature is " + temperature + "<br>" +
				      "For more information, visit " + "<a href=\"" + more_info + "\" target=\"_blank\">"+location+" weather" +"</a></p>";
        return content;
}


/**
*  getWeather ajax call, generate correct data needed
*  @param {uniqueId} some id corresponding with certain location
*  @param {event} trigger event
*  @param {city} string , the city we want to gain weather information
*/

function getWeather(uniqueId, city, event){
	var cityname = city.split(", ")[0];
	cityname = cityname.replace(" ","_");
	var state = city.split(", ")[1];
	console.log(cityname);
	console.log(state);
	$.ajax({
		async: false,					
		url : "http://api.wunderground.com/api/36d24347ff8d7151/geolookup/conditions/q/"+state+"/"+cityname+".json",
		dataType : "jsonp",
		success : function(parsed_json) {		
			var content= formatWeather(parsed_json);			
			$("#"+uniqueId).html(content);
			}
	});
}