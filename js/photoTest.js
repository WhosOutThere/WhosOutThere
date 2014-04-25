var photo={ "message": '',
           "file":"train.jpg" };       


test('testUploadPhotoWithEmptyDiscription', function () {
    var description = photo['message'];
    if(description.length==0)
    	isEmpty=1
    else isEmpty=0
    equal(isEmpty, 1, "success");
})

var photo2={"message":'Hello World!',
		"url":"http://coeapps.fullerton.edu/ed/sped/SpecialProgram/OnTrack/images/train.jpg"};
		
test('testUploadPhotoWithNonEmptyDiscription', function () {
    var description = photo2['message'];
    if(description.length==0)
    	isEmpty=1
    else isEmpty=0
    equal(isEmpty, 0, "success");
})

test('testUploadPhotoWithValidFile', function () {
	var re = new RegExp("jpg$");
	var file=photo['file'];
	if(file.match(re))
		isValid=1;
	else isValid=0;
    equal(isValid, 1, "success");
})

var photo3={"message":'Hello World!',
		"file":"train.png"};
test('testUploadPhotoWithInvalidFile', function () {
	var re = new RegExp("jpg$");
	var file=photo3['file'];
	if(file.match(re))
		isValid=1;
	else isValid=0;
    equal(isValid, 0, "success");
})		

var photo4={"message":'Hello World!',
		"file":""};
test('testUploadPhotoWithFile', function () {
	
	var file=photo4['file'];
	if(file!='')
		withFile=1;
	else withFile=0;
    equal(withFile,0,'success');
})		