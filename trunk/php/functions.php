<?php
/*
 * Function to add user's name and facebook id to MYSQL database
 * @param $name: Name of the user
 * @param $id: Facebook id of the user
 * @param $email: Email of the user
 * @param $con: connection to our MYSQL DB
 */
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

/*
 * Function to add new itinerary MYSQL database
 * @param $param: JSON object of an itinerary
 * @param $con: connection to our MYSQL DB
 */
function addItinerary($param, $con){
	if(empty($param)){
		return -1;
	}
	$obj = json_decode($param);
	$title = $obj->{'Title'};
	$meetings = $obj->{'meetings'};
	$user_id = (int)$obj->{'FBid'};
	if(empty($title) || empty($meetings)){
		return -1;
	}
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
		$query = "INSERT INTO Meeting (city,location,time,date,friend_id,friend_name,itinerary_id) VALUES ('$city','$location','$time','$date','$friend_id','$friend_name','$itineraryid')";
		if(!mysqli_query($con, $query)){
			die('Error: ' . mysqli_error($con));
		}
	}
}

/*
 * Function to get all itineraries in MYSQL database with $user_id as key
 * @param $user_id: Facebook id of the user
 * @param $con: connection to our MYSQL DB
 */
function getItinerary($user_id, $con){
	if(empty($user_id)){
		return -1;
	}
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

/*
 * Function to create a meeting object
 * @param $row: An array of details for a single meeting
 * @return $object: JSON object of a meeting
 */
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