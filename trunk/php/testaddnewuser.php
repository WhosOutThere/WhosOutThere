<?php
class TestAddNewUser extends PHPUnit_Framework_TestCase{

	public function testAddInvalidUser(){
		$name = "";
		$id = 0;
		$email = "";
		$this->assertEquals(addNewUser($name,$id,$email), -1);
	}

	public function testAddInvalidParam(){
		$name = 54353;
		$id = "34324";
		$email = "test@test.com";
		$this->assertEquals(addNewUser($name,$id,$email), -1);
	}
}
?>