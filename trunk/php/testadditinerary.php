<?php
//run with phpunit --bootstrap functions.php testadditinerary.php
//done by josh and shuotian
class TestAddItinerary extends PHPUnit_Framework_TestCase{

	public function testAddEmptyItinerary(){
		$param = "";
		$con = "";
		$this->assertEquals(addItinerary($param,$con), -1);
	}

	public function testAddItineraryWithEmptyTitle(){
		$param = "{\"Title\":\"\",\"meetings\":[],\"FBid\":4234}";
		$con = "";
		$this->assertEquals(addItinerary($param,$con), -1);
	}

	public function testAddItineraryWithNonStringTitle(){
		$param = "{\"Title\":34234,\"meetings\":[],\"FBid\":4234}";
		$con = "";
		$this->assertEquals(addItinerary($param,$con), -1);
	}

	public function testAddItineraryWithNoMeetings(){
		$param = "{\"Title\":\"Roadtrip\",\"meetings\":[],\"FBid\":4234}";
		$con = "";
		$this->assertEquals(addItinerary($param,$con), -1);
	}

	public function testGetItineraryWithEmptyUserId(){
		$user_id = "";
		$con = "";
		$this->assertEquals(getItinerary($user_id,$con), -1);
	}

	public function testGetItineraryWithInvalidUserId(){
		$user_id = "dsfsd";
		$con = "";
		$this->assertEquals(getItinerary($user_id,$con), -1);
	}
}
?>