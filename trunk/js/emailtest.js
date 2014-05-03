/**
 * Split the sendList
 * @param sendList
 * @return emailArray
 */
function splitString( sendList ) {
		var emailArray = sendList.split(";");
		return emailArray;
	}
/**
 * Split sendList and add to JSON format
 * @param sendList
 * @return global_sendlist
 */
function splitAsJson(sendList){
    	var emailArray = address.split(";");
    	var global_sendlist = new Array();

    	for (var i=0; i<emailArray.length; i++) {
    		var sendobj = {};
    		sendobj['email'] = emailArray[i];
    		global_sendlist.push(sendobj);
    	}
    	return global_sendlist;
	}
/**
 * Test for valid email address
 * @param String
 */
test( "testValidAddress", function()) {
 	var sendList="abc@gmail.com;efg@sina.com;test@illinois.edu";
	var emailArray = splitString( sendList );
	equal( String(emailArray[0]).indexOf(".com")==9,true,"Email contains com");
	equal(String(emailArray[2]).indexOf(".edu")==13,true,"Email contains edu");
});
/**
 * Test for valid and invalid addresses
 * @param String
 */
test("testValidandInvalidAddress",function(){
	var sendList="asdf@;werosd@sina.com";
	var emailArray = splitString( sendList );
	equal(emailArray[0].indexOf(".com")==-1,true,"Email address invalid");
	equal(emailArray[1].indexOf("@")>-1,true,"Valid email address");
});
/**
 * Test email address in JSON format
 * @param String
 */
test("testJSONFormat",function(){
	var address = "123@163.com;wercool@gmail.com";
    var emailArray=splitAsJson(address);
    equal(emailArray[0]['email']=="123@163.com",true,"Success");
    equal(emailArray[0]['email'].indexOf(".com")>-1,true,"Success");
});