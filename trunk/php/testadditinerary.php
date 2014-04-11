<?php
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

	public function testAddItineraryWithNoMeetings(){
		$param = "{\"Title\":\"Roadtrip\",\"meetings\":[],\"FBid\":4234}";
		$con = "";
		$this->assertEquals(addItinerary($param,$con), -1);
	}
}
?>