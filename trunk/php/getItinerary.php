<?php
header('Access-Control-Allow-Origin: *');  
require('connect.php');
require('functions.php');

$param = $_REQUEST['param'];
$user_id = $_REQUEST['id'];
addItinerary($param, $user_id,$con);
?>