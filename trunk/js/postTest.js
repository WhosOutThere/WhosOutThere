var post={ "description": ''
            };       


test('testEmptyPost', function () {
    var description = post['description'];
    if(description.length==0)
    	isEmpty=1
    else isEmpty=0
    equal(isEmpty, 1, "success");
})


var post2={ "description": 'Hello, world'
            };       

test('testNonemptyPost', function () {
    var description = post2['description'];
    if(description.length!=0)
    	flag=1
    else flag=0
    equal(flag, 1, "success");
})

test('testPostLength', function () {
    var description = post2['description'];
    if(description.length<=1000)
    	flag=1
    else flag=0
    equal(flag, 1, "success");
})


function postDetecter(input){
	
	if 			 	(input.indexOf("Fuck")>-1||input.indexOf("fuck")>-1||input.indexOf("shit")>-1||input.indexOf("devil")>-1||input.indexOf("dumb")>-1||input.indexOf("dope")>-1)	{
        
        return false;
	}
	else{
		return true;
	}
}
test('testRedFlagWord', function () {
    input="fuck you";
    
    equal(postDetecter(input), false, "success");
})


test('testRepeatPost', function () {
    
    var post3={"description":'Hello, world'};
    var description2=post2['description'];
    var description3=post3['description'];
    if(description3==description2)
    	flag=0;
    else flag=1;
    equal(flag, 0, "success");
})