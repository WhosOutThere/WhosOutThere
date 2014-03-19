/*
var globalFriends = new Array();
var locationDict = {};
var selectFbId;*/

var friendList;

window.onload = function() {
    this.fbAsyncInit = function() {
        FB.init({
            appId: '212944075564919', //shuotian's appID
            //appId:'359029350906887',    //josh's appID
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
                    console.log(data.name + data.email + data.id);
                    $.post("http://web.engr.illinois.edu/~heng3/whosoutthere/php/addNewUserToDb.php", {
                        name: data.name,
                        email: data.email,
                        id: data.id
                    }).done(function(result) {
                        console.log(result);
                    });
                });
                //findFriends();
                friendList = new facebookFriends();
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
                        console.log(data.name + data.email + data.id);
                        $.post("http://web.engr.illinois.edu/~heng3/whosoutthere/php/addNewUserToDb.php", {
                            name: data.name,
                            email: data.email,
                            id: data.id
                        }).done(function(result) {
                            console.log(result);
                        });
                    });
                }, {
                    scope: 'email,user_friends,friends_location'
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
                        console.log(data.name + data.email + data.id);
                        $.post("http://web.engr.illinois.edu/~heng3/whosoutthere/php/addNewUserToDb.php", {
                            name: data.name,
                            email: data.email,
                            id: data.id
                        }).done(function(result) {
                            console.log(result);
                        });
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

// Load the SDK asynchronously





function addNewUsertoDb(id, name, email) {
    $.post("./php/addNewUsertoDb.php", {
        id: id,
        name: name,
        email: email
    }, function(data) {
        $(".result").html(data);
    });

}

function facebookFriends() {
    // Data Elements
    this.friends = new Array();
    this.filterFriends = new Array();
    this.locationDict = {};
    this.selectFbId = 0;
    this.numFriendsInCity = 0;

    // Class Methods
    this.FBAPIFindFriends = FBAPIFindFriends;
    this.FBAPILogout = FBAPILogout;
    this.selectFriends = selectFriends;
    this.sendMessage = sendMessage;
    this.showFriendList = showFriendList;

    function FBAPIFindFriends(friends, locationDict) {
        FB.api(
            "/me/friends",
            {fields: 'name, location,id'},
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
                } else {
                    console.log("Failed to get friend IDs");
                }
            }
        );
    }

    function FBAPILogout() {
        FB.logout(function(response) {
            if (response) {
                document.location.reload();
            }
        });
    }

    function selectFriends() {
        for (var i = 0; i < this.numFriendsInCity; i++) {
            var selected = document.getElementById("friend" + i).checked;
            if (selected) {
                return this.filterFriends[i].id
            }
        }
    }

    function sendMessage(recepient) {
        FB.ui({
            method: 'send',
            link: 'http://web.engr.illinois.edu/~zhang369/wot//trunk/',
            to: recepient
        });
    }

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
}

/**
* Facebook Logout
* Wrapper around Facebook logout API call and refreshes the page automatically
*//*
function facebookLogout() {
    FB.logout(function(response) {
        if (response) {
            document.location.reload();
        }
    });

};*/

/**
* Find Friends
* Wrapper around Facebook API call to request for a list of friends locations, then store
* the response inside the globalNames and globalLocations arrays.
*//*
function findFriends() {
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
                    }
                    globalFriends.push(friend);
                    if (loc !== "Null") {
                        locationDict[loc] = loc;
                    }
                }


            } else {
                console.log("Failed to get friend IDs");
            }
        }
    );
};
*/

/**
* Send Facebook Message
*//*
function sendMessage() {
    console.log("send Facebook Message");
    //selectFriends();
    friendList.selectFriends();
    FB.ui({
        method: 'send',
        link: 'http://web.engr.illinois.edu/~zhang369/wot//trunk/',
        to: selectFbId
    });
}*/

/*
* Get the selected friend FB id
*//*
function selectFriends() {
    console.log("select Friends");
    for (var i = 0; i < numFriendsInCity; i++) {
        var selected = document.getElementById("friend" + i).checked;
        if (selected) {
            selectFbId = filterFriends[i].id;
            console.log("selected " + document.getElementById("friend" + i).value);
        }
    }
}*/
