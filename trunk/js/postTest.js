var post={ "description": ''};       
var post2={ "description": 'Hello, world'};
var post3={ "description":'Hello, world'};
/**
 * detect red flag word
 * @param input
 * @return boolean
 */
function postDetecter(input){
	if(input.indexOf("Fuck")>-1||input.indexOf("fuck")>-1||input.indexOf("shit")>-1||input.indexOf("devil")>-1||input.indexOf("dumb")>-1||input.indexOf("dope")>-1)	{
        return false;
	}
	else{
		return true;
	}
}

/**
 * test empty post
 * @param String
 */
test('testEmptyPost', function () {
    var description = post['description'];
    if(description.length==0)
    	isEmpty=1
    else isEmpty=0
    equal(isEmpty, 1, "success");
})       
/**
 * test nonempty post
 * @param String
 */
test('testNonemptyPost', function () {
    var description = post2['description'];
    if(description.length!=0)
    	flag=1
    else flag=0
    equal(flag, 1, "success");
})
/**
 * test post length
 * @param String
 */
test('testPostLength', function () {
    var description = post2['description'];
    if(description.length<=1000)
    	flag=1
    else flag=0
    equal(flag, 1, "success");
})

/**
 * test red flag word
 * @param String
 */
test('testRedFlagWord', function () {
    input="fuck you";
    equal(postDetecter(input), false, "success");
})

/**
 * test repeat post
 * @param String
 */
test('testRepeatPost', function () {  
    var description2=post2['description'];
    var description3=post3['description'];
    if(description3==description2)
    	flag=0;
    else flag=1;
    equal(flag, 0, "success");
})