var filterFriends = new Array();

function showFriendList(address) {
    console.log(address);
    console.log(globalNames);
    console.log(globalLocations);

    var printFriends = "";

    for (var i = 0; i < globalLocations.length; i++) {
        if (globalLocations[i].indexOf(address) >= 0) {
            filterFriends.push(globalNames[i] + " ");
            printFriends = printFriends + globalNames[i] + ", ";
        }
    }
    console.log(filterFriends);
    //document.getElementById("friends_list").innerHTML = filterFriends;
    document.getElementById("friends_list").innerHTML = printFriends;
    filterFriends = [];
}