var filterFriends = new Array();

function showFriendList(address){
    	console.log(address);
    	console.log(globalNames);
    	console.log(globalLocations);
    	
	for(var i = 0; i<globalLocations.length; i++){
		if(globalLocations[i].indexOf(address)>=0){
			filterFriends.push(globalNames[i]);
		}
	}
	console.log(filterFriends);	
	filterFriends=[];
	return false;
}