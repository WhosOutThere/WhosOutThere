QUnit.test( "sendEmail test", function( assert ) {
 	var sendList="abc@gmail.com;efg@sina.com;test@illinois.edu";
	function test( sendList ) {
		var emailArray = sendList.split(";");
		return emailArray;
	}
	var emailArray = test( sendList );
 	
	assert.equal( String(emailArray[0]).indexOf(".com")==9,true,"Email contains com");
	assert.equal(String(emailArray[2]).indexOf(".edu")==13,true,"Email contains edu");
});

QUnit.test("sendEmail test2",function(assert){
	var sendList="asdf@;werosd@sina.com";
	function test(sendList){
		var emailArray = sendList.split(";");
		return emailArray;
	}
	var emailArray = test( sendList );
	assert.equal(emailArray[0].indexOf(".com")==-1,true,"Email address invalid");
	assert.equal(emailArray[1].indexOf("@")>-1,true,"Valid email address");
});

QUnit.test("sendTheEmail test",function(assert){
	
	function test(){
		var address = "123@163.com;wercool@gmail.com";
	    	
	    
	    	var emailArray = address.split(";");
	    	var global_sendlist = new Array();
	
	    	for (var i=0; i<emailArray.length; i++) {
	    		var sendobj = {};
	    		sendobj['email'] = emailArray[i];
	    		global_sendlist.push(sendobj);
	    	}
	    	return global_sendlist;
    	}
    	var emailArray=test();
    	assert.equal(emailArray[0]['email']=="123@163.com",true,"Success");
    	assert.equal(emailArray[0]['email'].indexOf(".com")>-1,true,"Success");
});