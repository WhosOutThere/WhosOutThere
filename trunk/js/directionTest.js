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
distance = response['routes']['legs']['distance'];
duration = response['routes']['legs']['duration'];
test('test current location to chicago distance', function () {
   /* var response = {
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
    };*/
    distance = response['routes']['legs']['distance'];
    duration = response['routes']['legs']['duration'];
    equal(ret['distance'], distance, "success");
})
test('test current location to chicago duration', function () {
    /* var response = {
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
     };*/
    distance = response['routes']['legs']['distance'];
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
    duration = route2['routes']['legs']['duration'];
    equal(ret2['distance'], distance, "success");
})

test('test chicago to wisconsin distance', function () {
    distance = route2['routes']['legs']['distance'];
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
    duration = route3['routes']['legs']['duration'];
    equal(ret3['distance'], distance, "success");
})

test('test wisconsin to los angeles distance', function () {
    distance = route3['routes']['legs']['distance'];
    duration = route3['routes']['legs']['duration'];
    equal(ret3['duration'], duration, "success");
})

