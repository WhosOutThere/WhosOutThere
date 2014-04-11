<?php
function addNewUser($name, $id, $email,$con){

	if(empty($name)||empty($id)||empty($email)){
		return -1;
	}

	if(getType($name)!="string" || getType($id)!="integer" || getType($email)!="string"){
		return -1;
	}

	$query = "INSERT INTO Users (Id, Name, Email) Values('$id', '$name', '$email')";

	//User does not exist in db
	if(!mysqli_query($con, $query)){
		die('Error: ' . mysqli_error($con));
	}

	echo $query;
	mysqli_close($con);

}

function addItinerary($param, $con){
	$obj = json_decode($param);
	$title = $obj->{'Title'};
	$meetings = $obj->{'meetings'};
	$user_id = (int)$obj->{'FBid'};

	//insert itinerary into db
	$query = "INSERT INTO Itinerary (title, user_id) VALUES ('$title','$user_id')";

	//User does not exist in db
	if(!mysqli_query($con, $query)){
		die('Error: ' . mysqli_error($con));
	}
	$itineraryid = (int)mysqli_insert_id($con);

	//for each meeting in itinerary, add meeting to db.
	foreach($meetings as $meeting){
		$city = $meeting->{'city'};
		$location = $meeting->{'location'};
		$date = $meeting->{'date'};
		$time = $meeting->{'time'};
		$friend_name = $meeting->{'friends'};
		$friend_id = 0;
		$query = "INSERT INTO Meeting (city,location,time,date,friend_id,friend_name,itinerary_id) VALUES ('$city','$location','$date','$time','$friend_id','$friend_name','$itineraryid')";
		if(!mysqli_query($con, $query)){
			die('Error: ' . mysqli_error($con));
		}
	}
}

function getItinerary($user_id, $con){
	$user_id = (int)$user_id;
	$output = array();
	$query = "SELECT id,title FROM Itinerary WHERE user_id='$user_id'";
	$itineraryresult = mysqli_query($con,$query);
	while($row = mysqli_fetch_array($itineraryresult)){
		$output[$row['id']] = array($row['title'],array());
	}
	
	$query = "SELECT * FROM Meeting WHERE itinerary_id in (SELECT id FROM Itinerary WHERE user_id = '$user_id')";
	$result = mysqli_query($con,$query);
	while($row = mysqli_fetch_array($result)){
		$object = createMeeting($row);
		array_push($output[$row['itinerary_id']][1],$object);
	}
	echo json_encode($output);
}

function createMeeting($row){
	$object = new stdClass();
	$object->location = $row['location'];
	$object->city = $row['city'];
	$object->time = $row['time'];
	$object->date = $row['date'];
	$object->friend_name = $row['friend_name'];
	return $object;
}
?>