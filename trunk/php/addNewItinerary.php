<?php
header('Access-Control-Allow-Origin: *');  
require('connect.php');
require('functions.php');

$param = $_REQUEST['param'];
addItinerary($param, $con);
?>