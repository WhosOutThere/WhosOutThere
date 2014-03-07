var filterFriends = new Array();

function showFriendList(address) {
    filterFriends = [];
    var printFriends = "";
    for (var i = 0; i < globalFriends.length; i++) {
        var location = globalFriends[i].location;
        if (location.indexOf(address) != -1) {
            filterFriends.push(globalFriends[i]);
            printFriends = printFriends + globalFriends[i].name + ", ";
        }
    }
    console.log(filterFriends);
    return filterFriends;
}