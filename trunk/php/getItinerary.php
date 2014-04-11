<?php
header('Access-Control-Allow-Origin: *');  
require('connect.php');
require('functions.php');

$user_id = $_REQUEST['id'];
getItinerary( $user_id,$con);
?>