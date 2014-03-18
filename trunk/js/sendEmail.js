// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('bVkQiTTlVFArlVrFvK7tZQ');




function sendTheMail() {
// Send the email!
    var address = document.getElementById("email-address").value;
    var subject = document.getElementById("email-title").value;
    var content = document.getElementById("email-content").value
    
    var emailArray = address.split(";");
    var global_sendlist = new Array();

    for (var i=0; i<emailArray.length; i++) {
    	var sendobj = {};
    	sendobj['email'] = emailArray[i];
    	global_sendlist.push(sendobj);
    }
    // create a variable for the API call parameters

    var params = {
    "message": {
        "from_email":"userEmail@gmail.com",
        "to":global_sendlist,
        "subject": subject,
        "text": content
    }
};
    m.messages.send(params);
}