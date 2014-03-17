<?php
	$con=mysqli_connect("engr-cpanel-mysql.engr.illinois.edu","heng3_wot","whosouttheresp14","heng3_whosoutthere");
		// Check connection
	if (mysqli_connect_errno())
	  {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }
?>