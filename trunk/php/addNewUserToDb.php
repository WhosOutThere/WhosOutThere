<?php
header('Access-Control-Allow-Origin: *');  
require('connect.php');
require('functions.php');

$name = $_REQUEST['name'];
$id = $_REQUEST['id'];
$email = $_REQUEST['email'];
addNewUser($name, $id, $email);
?>