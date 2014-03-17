<?php
header('Access-Control-Allow-Origin: *');  
require('connect.php');

$name = $_REQUEST['name'];
$id = $_REQUEST['id'];
$email = $_REQUEST['email'];
$query = "INSERT INTO Users (Id, Name, Email) Values('$id', '$name', '$email')";

//User does not exist in db
if(!mysqli_query($con, $query)){
	die('Error: ' . mysqli_error($con));
}

echo $query;
mysqli_close($con);
?>