<?php
function addNewUser($name, $id, $email){

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
?>