findFriends();

  function findOneFriend(str){
    //index = Math.floor(Math.random()*globalNames.length);
    if(str==="Null")
      return null;
    else
      return str;
  }

  function testing(){
    return "1";
  }
var arr = sessionStorage.arr.split(",");
console.log(arr[1]);
test('testing()',function(){
equal(testing(),1,"equal 1");
	strictEqual(findOneFriend(arr[0]),null, "expected value should be null");
	strictEqual(findOneFriend(arr[1]),"Urbana","expected value should be Urbana, Illinois");
});

function saysHi(name) {
	return "Hi, " + name;
};

test('saysHi()', function() {
	equal(saysHi("Jack"), "Hi, Jack", "function outputs string correctly")

});