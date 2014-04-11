<?php
class TestAddNewUser extends PHPUnit_Framework_TestCase{

	public function testAddInvalidUser(){
		$name = "";
		$id = 0;
		$email = "";
		$con = "";
		$this->assertEquals(addNewUser($name,$id,$email, $con), -1);
	}

	public function testAddInvalidParam(){
		$name = 54353;
		$id = "34324";
		$email = "test@test.com";
		$con = "";
		$this->assertEquals(addNewUser($name,$id,$email, $con), -1);
	}
}
?>