// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('bVkQiTTlVFArlVrFvK7tZQ');



//the actual function to send email 
function sendTheMail() {
// Send the email!
    //address stores the email string that user inputs
    var address = document.getElementById("email-address").value;
    //subject stores the email subject that user inputs
    var subject = document.getElementById("email-title").value;
    //content stores the email message that user inputs
    var content = document.getElementById("email-content").value
    
    var emailArray = address.split(";");
    var global_sendlist = new Array();

    //convert the user input address to json format
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