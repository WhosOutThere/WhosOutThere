var friendList;

window.onload = function() {
    this.fbAsyncInit = function() {
        FB.init({
            //appId: '212944075564919', //shuotian's appID
            appId: '359029350906887', //josh's appID
            //appId:'227611927429067',    //josh's localhost appid
            status: true, // check login status
            cookie: true, // enable cookies to allow the server to access the session
            xfbml: true // parse XFBML
        });

        // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
        // for any authentication related change, such as login, logout or session refresh. This means that
        // whenever someone who was previously logged out tries to log in again, the correct case below
        // will be handled.
        FB.Event.subscribe('auth.authResponseChange', function(response) {
            // Here we specify what we do with the response anytime this event occurs.
            if (response.status === 'connected') {
                // The response object is returned with a status field that lets the app know the current
                // login status of the person. In this case, we're handling the situation where they
                // have logged in to the app.
                document.getElementById("facebookLogout").style.display = "block";
                document.getElementById("facebookLogin").style.display = "none";
                // Populate the globalNames and globalLocations arrays
                FB.api('/me', {
                    fields: 'name, email, id'
                }, function(data) {
                    $.post("http://web.engr.illinois.edu/~heng3/whosoutthere/php/addNewUserToDb.php", {
                        name: data.name,
                        email: data.email,
                        id: data.id
                    }).done(function(result) {});
                });
                friendList = new facebookFriends();
                friendList.FBAPIGetFBid();
                friendList.FBAPIFindFriends(friendList.friends, friendList.locationDict);


            } else if (response.status === 'not_authorized') {
                // In this case, the person is logged into Facebook, but not into the app, so we call
                // FB.login() to prompt them to do so.
                // In real-life usage, you wouldn't want to immediately prompt someone to login
                // like this, for two reasons:
                // (1) JavaScript created popup windows are blocked by most browsers unless they
                // result from direct interaction from people using the app (such as a mouse click)
                // (2) it is a bad experience to be continually prompted to login upon page load.
                document.getElementById("facebookLogout").style.display = "none";
                FB.login(function(response) {
                    FB.api('/me', {
                        fields: 'name, email, id'
                    }, function(data) {
                        $.post("http://web.engr.illinois.edu/~heng3/whosoutthere/php/addNewUserToDb.php", {
                            name: data.name,
                            email: data.email,
                            id: data.id
                        }).done(function(result) {});
                    });
                }, {
                    scope: 'email,user_friends,friends_location,publish_stream'
                });

            } else {
                // In this case, the person is not logged into Facebook, so we call the login()
                // function to prompt them to do so. Note that at this stage there is no indication
                // of whether they are logged into the app. If they aren't then they'll see the Login
                // dialog right after they log in to Facebook.
                // The same caveats as above apply to the FB.login() call here.
                document.getElementById("facebookLogout").style.display = "none";
                FB.login(function(response) {
                    FB.api('/me', {
                        fields: 'name, email, id'
                    }, function(data) {
                        $.post("http://web.engr.illinois.edu/~heng3/whosoutthere/php/addNewUserToDb.php", {
                            name: data.name,
                            email: data.email,
                            id: data.id
                        }).done(function(result) {});
                    });
                });
            }
        });
    };

    // Load the SDK asynchronously
    (function(d) {
        var js, id = 'facebook-jssdk',
            ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement('script');
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));
}




/*
 * Adds a new user to the database
 *
 * Uses JQuery to call the php script that adds a new user to the database
 *
 * @param id Facebook ID of the new user
 * @param name Name of the new user
 * @param email Email of the new user
 */
function addNewUsertoDb(id, name, email) {
    $.post("./php/addNewUsertoDb.php", {
        id: id,
        name: name,
        email: email
    }, function(data) {
        $(".result").html(data);
    });

}

/**
 * Check for flagged words
 *
 * Checks if the user has entered any flagged words and throws an alert if they are present
 * @return false if flagged word detected, true otherwise
 */
function postDetector() {
    var input = document.getElementById("description").value;
    if (input.indexOf("Fuck") > -1 || input.indexOf("fuck") > -1 || input.indexOf("shit") > -1 || input.indexOf("devil") > -1 || input.indexOf("dumb") > -1 || input.indexOf("dope") > -1) {
        alert('Red Word Detected!');
        return false;
    } else {
        return true;
    }
}

/** 
 * facebookFriends Class
 * Includes all functionality pertaining to Facebook API calls
 * and Facebook friends data.
 */
function facebookFriends() {
    // Data Elements
    this.FBid = 0; // User's Facebook ID
    this.friends = new Array(); // User's Facebook friends
    this.filterFriends = new Array(); // List of filtered friends for a city
    this.locationDict = {}; // Dictionary for location
    this.selectFbId = 0; // Facebook ID for selected friend
    this.numFriendsInCity = 0; // Number of friends in a city

    // Class Methods
    this.FBAPIGetFBid = FBAPIGetFBid;
    this.FBAPIFindFriends = FBAPIFindFriends;
    this.FBAPILogout = FBAPILogout;
    this.selectFriends = selectFriends;
    this.sendMessage = sendMessage;
    this.showFriendList = showFriendList;
    this.getStatusMessage = getStatusMessage;
    this.postDetector = postDetector;
    this.postToWall = postToWall;


    /**
     * Get the User's Facebook ID
     *
     * Wrapper around the Facebook Graph API function to get the user's Facebook ID
     */
    function FBAPIGetFBid() {
        FB.api('/me', {
            fields: 'id'
        }, function(data) {
            friendList.FBid = data.id;
        });
    }

    /**
     * Find Facebook friends and their locations
     *
     * Uses Facebook Graph API to get a list of user's Facebook friends and their
     * locations then save it into the friends and locationDict arrays
     *
     * @param friends Reference to the friends array for reference during Facebook API Callback
     * @param locationDict Reference to the locationDict array for reference during Facebook API Callback
     */
    function FBAPIFindFriends(friends, locationDict) {
        FB.api(
            "/me/friends", {
                fields: 'name, location,id'
            },
            function(response) {
                if (response && !response.error) {
                    for (var i = 0; i < response.data.length; i++) {
                        var loc = "";
                        if (response.data[i].location) {
                            loc = response.data[i].location.name;
                        } else {
                            loc = "Null";
                        }
                        //stores each friend as a json object. The fields include name, id and location.
                        var friend = {
                            'name': response.data[i].name,
                            'id': response.data[i].id,
                            'location': loc
                        };
                        friends.push(friend);
                        if (loc !== "Null") {
                            locationDict[loc] = loc;
                        }
                    }
                }
            }
        );
    }

    /**
     * Logs the user out of Facebook
     *
     * Wrapper around the Facebook API logout function and reloads the page
     */
    function FBAPILogout() {
        FB.logout(function(response) {
            if (response) {
                document.location.reload();
            }
        });
    }

    /**
     * Gets the selected friend in a particular city
     *
     * Gets the Facebook ID of the friend that the user has selected from the radio buttons for a city
     * @return Facebook ID of the selected friend
     */
    function selectFriends() {
        for (var i = 0; i < this.numFriendsInCity; i++) {
            var selected = document.getElementById("friend" + i).checked;
            if (selected) {
                return this.filterFriends[i].id
            }
        }
    }

    /**
     * Send Facebook Message
     *
     * Sends a Facebook Message to a selected recepient witha a link to the app
     * @param recepient The Facebook ID of the recepient
     * @param url A link to the application
     */
    function sendMessage(recepient, url) {
        FB.ui({
            method: 'send',
            link: url,
            to: recepient
        });
        //'http://web.engr.illinois.edu/~zhang369/wot//trunk/'
    }

    /**
     * Gets the friends who are living in a particular city
     *
     * Finds all the friends living in a paricular city and push them into the filterFriends array
     * @param address The address of the city that the user entered
     */
    function showFriendList(address) {
        var location;
        this.filterFriends = [];
        for (var i = 0; i < this.friends.length; i++) {
            location = this.friends[i].location;
            if (location.indexOf(address) != -1) {
                this.filterFriends.push(this.friends[i]);
            }
        }
    }

    /**
     * Helper function to get the user entered status message
     */
    function getStatusMessage() {
        return document.getElementById("description").value;
    }

    /**
     * Detects flagged words in the user's status message
     *
     * If a flagged word is detected in the status message, prevent the user from posting the message
     *
     * @param message The status message entered by the user
     * @return true if a flagged word is detected, false otherwise
     */
    function postDetector(message) {
        if (message.indexOf("Fuck") > -1 || message.indexOf("fuck") > -1 || message.indexOf("shit") > -1 || message.indexOf("devil") > -1 || message.indexOf("dumb") > -1 || message.indexOf("dope") > -1) {
            alert('Red Word Detected!');
            return true;
        } else {
            return false;
        }
    }

    /**
     * Posts a status message to the user's Facebook wall
     *
     * Allows the user to define his/her own message then post it to the Facebook wall
     *
     * @param statusMessage The message to be posted
     * @return true if status is valid and sent to Facebook API, false otherwise
     */
    function postToWall(statusMessage) {
        if (friendList.postDetector(statusMessage)) {
            return false;
        }

        if (statusMessage.length == 0) {
            alert("Your message cannot be empty");
            return false;
        }

        if (statusMessage.length > 1000) {
            alert("Your message is too long");
            return false;
        }

        facebookStatus = {
            message: statusMessage,
            name: 'Post Title',
            description: 'post description',
        };

        FB.login(function() {
            FB.api('/me/feed', 'post', facebookStatus, function(response) {
                if (!response || response.error) {
                    alert('Posting error occured');
                } else {
                    alert("Your status has been posted");
                }
            });
        }, {
            scope: 'publish_actions'
        });

        return true;
    }
}