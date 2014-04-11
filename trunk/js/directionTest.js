/**
 * Created by Yanyan on 14-4-10.
 */
var response = {
    "routes": {
        "legs": {
            "distance": 135,
            "duration": 2
        }
    }
};
var ret = {
    "distance": 135,
    "duration": 2
};

test('test current location to chicago distance', function () {
    distance = response['routes']['legs']['distance'];
    equal(ret['distance'], distance, "success");
})
test('test current location to chicago duration', function () {
    duration = response['routes']['legs']['duration'];
    equal(ret['duration'], duration, "success");
})

//chicago to wisconsin
var route2 = {
    "routes": {
        "legs": {
            "distance": 173,
            "duration": 3
        }
    }
};
var ret2 = {
    "distance": 173,
    "duration": 3
};
test('test chicago to wisconsin distance', function () {
    distance = route2['routes']['legs']['distance'];
    equal(ret2['distance'], distance, "success");
})
test('test chicago to wisconsin distance', function () {
    duration = route2['routes']['legs']['duration'];
    equal(ret2['duration'], duration, "success");
})


//wisconsin to los angeles
var route3 = {
    "routes": {
        "legs": {
            "distance": 2047,
            "duration": 29
        }
    }
};
var ret3 = {
    "distance": 2047,
    "duration": 29
};

test('test wisconsin to los angeles distance', function () {
    distance = route3['routes']['legs']['distance'];
    equal(ret3['distance'], distance, "success");
})
test('test wisconsin to los angeles duration', function () {
    duration = route3['routes']['legs']['duration'];
    equal(ret3['duration'], duration, "success");
})

var route4 = {
    "routes": {
        "leg0": {
            "distance": 173,
            "duration": 3
        },
        "leg1":{
            "distance": 2047,
            "duration": 29
        }

    }
};
var ret4 = {
    "distance": 173,
    "duration": 4
};
var ret5 = {
    "distance": 2047,
    "duration": 30
};

test('test multiple routes distance', function () {
    distance = route4['routes']['leg0']['distance'];
    duration = route4['routes']['leg0']['duration'];
    equal(ret4['distance'], distance, "success");
    notEqual(ret4['duration'], duration, "success");
})
test('test multiple routes duration', function () {
    distance = route4['routes']['leg1']['distance'];
    duration = route4['routes']['leg1']['duration'];
    equal(ret5['distance'], distance, "success");
    notEqual(ret5['duration'], duration, "success");
})

