var post = {
    "description": ''
};
var post2 = {
    "description": 'Hello, world'
};
var post3 = {
    "description": 'Hello, world'
};

function postDetecter(input) {
    if (input.indexOf("Fuck") > -1 || input.indexOf("fuck") > -1 || input.indexOf("shit") > -1 || input.indexOf("devil") > -1 || input.indexOf("dumb") > -1 || input.indexOf("dope") > -1) {
        return false;
    } else {
        return true;
    }
}

window.alert = function() {};

test("newtestEmptyPost", function() {
    var message = post['description'];
    equal(friendList.postToWall(message), false, "Message was empty");
})

test("newTestFlaggedWord", function() {
    var message = "Fuck this shit!!!";
    equal(friendList.postToWall(message), false, "Message contains flagged word");
})

test("newTestLongMessage", function() {
    var message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed molestie neque. Nullam malesuada ipsum nec orci accumsan, ut bibendum justo congue. In lorem risus, suscipit vel urna a, interdum dictum mauris. Mauris pellentesque purus eu risus tristique, non posuere mauris commodo. Proin congue ultricies dolor sed commodo. Nunc ac volutpat velit. Duis placerat euismod dui eget venenatis. In at adipiscing dui. Duis posuere euismod purus, non pharetra lorem hendrerit dignissim. Morbi justo nulla, gravida et lobortis sit amet, vestibulum cursus est.Pellentesque ullamcorper mi nec neque hendrerit, quis lacinia felis mattis. Praesent tempus nibh aliquam augue sagittis, ut tincidunt risus iaculis. Sed ante nisi, cursus tempor erat ac, pretium vulputate dui. Proin sapien sapien, elementum ut convallis sed, vestibulum ac lectus. Etiam in feugiat elit. Morbi sed neque vitae dolor hendrerit sollicitudin id in mi. Phasellus sed blandit nunc, et tristique leo. Quisque auctor, nibh eget sollicitudin hendrerit, diam mi vulputate lectus, at sagittis nunc felis sit amet dui. Mauris scelerisque est quis odio accumsan, vel laoreet purus dictum. Suspendisse eu metus congue, mollis est id, mollis est. Duis id quam at tortor auctor vehicula id a sem. Curabitur vulputate, dui facilisis blandit sollicitudin, lorem dui ullamcorper nisl, non sodales erat diam vitae nisl.Aliquam dignissim malesuada nunc, sed ultrices metus iaculis non. Curabitur nec justo metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum laoreet erat a metus bibendum, ut dignissim nisi pulvinar. Suspendisse accumsan velit eros, eu ullamcorper arcu lobortis at. Pellentesque vitae lacus sed quam ornare adipiscing. Cras fermentum justo nisi, et luctus orci aliquam quis.Fusce vitae lacus ante. Fusce blandit sit amet nulla non accumsan. Etiam turpis nibh, laoreet quis porta vitae, venenatis eu est. Praesent gravida enim nisi, nec accumsan lectus consectetur id. Suspendisse non libero nunc. Mauris ac massa id lacus laoreet imperdiet aliquam vitae massa. Fusce tincidunt sem et mattis faucibus. Pellentesque suscipit vitae orci sit amet dignissim. Curabitur ornare condimentum massa, imperdiet venenatis neque sodales sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam id mollis ligula. Praesent sed elit ac dolor aliquam sagittis. Aenean ultrices pretium urna aliquet consectetur. Aenean eget consectetur tellus. Cras quis rutrum est.Curabitur luctus pulvinar pretium. Donec sit amet pretium eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis ligula eu lacinia vestibulum. Morbi lorem lectus, luctus ut quam ac, eleifend tempus tortor. Morbi ut ornare risus, nec tempus metus. Vestibulum ac consequat nulla, sit amet vestibulum mi. Praesent sit amet dolor a velit rutrum rutrum ac et orci. Praesent rhoncus urna vitae consectetur euismod. Nam elementum est nulla, facilisis congue nibh tincidunt at. Pellentesque viverra posuere malesuada.Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pharetra dapibus libero, ac rutrum lectus tempor id. Vestibulum lacinia erat nisl, vitae hendrerit enim sollicitudin a. Phasellus sit amet purus fermentum, lobortis purus et, sollicitudin sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    equal(friendList.postToWall(message), false, "Message is too long");
})

test('testEmptyPost', function() {
    var description = post['description'];
    if (description.length == 0)
        isEmpty = 1
    else isEmpty = 0
    equal(isEmpty, 1, "success");
})

test('testNonemptyPost', function() {
    var description = post2['description'];
    if (description.length != 0)
        flag = 1
    else flag = 0
    equal(flag, 1, "success");
})

test('testPostLength', function() {
    var description = post2['description'];
    if (description.length <= 1000)
        flag = 1
    else flag = 0
    equal(flag, 1, "success");
})

test('testRedFlagWord', function() {
    input = "fuck you";
    equal(postDetecter(input), false, "success");
})


test('testRepeatPost', function() {
    var description2 = post2['description'];
    var description3 = post3['description'];
    if (description3 == description2)
        flag = 0;
    else flag = 1;
    equal(flag, 0, "success");
})