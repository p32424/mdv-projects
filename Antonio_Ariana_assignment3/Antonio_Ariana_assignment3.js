// alert("JavaScript works!");

// Ariana Antonio
// SDI 1305
// Project 3
// Hiking with objects

//initial variables



//JSON data
var hikingTrails = [
    {
        "easy": {
            "name": "Arroyo Canyon",
            "distanceInMiles": 5,
            "terrain": "mostly hills",
            "hard": false
        }
    },
    {
        "medium": {
            "name": "La Tuna",
            "distanceInMiles": 6,
            "terrain": "flat",
            "hard": false
        }
    },
    {
        "hard": {
            "name": "Malibu Canyon",
            "distanceInMiles": 3,
            "terrain": "very hilly",
            "hard": true
        }
    }
];
//JSON function
var jsonHikingTrails = function(hikingTrails) {
        var trailAnnouncement = "Today you will be hiking the " + hikingTrails[1].medium.name + " trail which is " + hikingTrails[1].medium.distanceInMiles + " miles. The terrain is " + hikingTrails[1].medium.terrain + ".";
        return trailAnnouncement;
};

//procedure fuction
var startTheDay = function(niceWeather) { //conditional
    if (niceWeather === true) {
	console.log("Let's go for a hike!");
    }
    else {
	console.log("Go back to bed.");
    }
};

//object
var hikeLeader = {
    name: "Ariana",
    age: 31,
    hikingExperience: "intermediate",
    favoriteTrails: ["La Tuna", "Chantry Flats", "Mount Wilson"],
    introduceLeader: function() { //method: procedure
        console.log("Your leader today is " + this.name + ", she is " + this.age + ".");
    },
    changeExperience: function(newExperience) { //method: mutator
        this.hikingExperience = newExperience;
    }
};
// Boolean function
var isItSunny = function(temp, skyOutlook) {
    if (temp > 70) {
        if (skyOutlook === "Sunny") { //nested conditional
            console.log("Better put on some sunscreen today.");
            return true;
        }
        else {
            console.log("No need for sunscreen today.");
            return true;
        }
    }
    else if (temp > 50 || skyOutlook === "No chance of rain.") {
	return true; 
    }
    else {
        return false;
    }
};
//otherHikers object
var otherHikers = {
    "Brian" : "beginner",
    "Samantha": "pro",
    "Tim": "intermediate"
};
//announceOtherHikers function
var announceOtherHikers = function() { //for in loop
    for (var key in otherHikers) {
    console.log("Another hiker is " + key + " and they are " + otherHikers[key] + ".");
    }
};

//number function
var howFarHiked = function(distanceHiked) {
        var distanceToGo,
        distance = 5;
	while (distanceHiked < distance) { 
		distanceToGo = distance - distanceHiked;
		console.log("We have hiked " + distanceHiked + " miles and have " + distanceToGo + " to go.");
		distanceHiked++;
}
	return distanceHiked;
};
//supplies object
var whoBringsWhat = {
    hikers: ["Ariana", "Tim", "Samantha", "Brian"],
    supplies: ["water", "pretzels", "sandwiches", "first aid kit"],
    assignSupplies: function() {
        for (var key in this.hikers) {
            for (var key in this.supplies) { //nested loop
                console.log(this.hikers[key] + " is bringing " + this.supplies[key]);
            };
        };
    }
};







//outputs
startTheDay(true);
var sunnyToday = isItSunny(75, "Sunny");
console.log("Today it is " + sunnyToday + " that the weather is great for a hike! Please dress accordingly.");
console.log(jsonHikingTrails(hikingTrails));
hikeLeader.introduceLeader();
hikeLeader.changeExperience("pro");
console.log("Your leader's experience is " + hikeLeader.hikingExperience + ".");
announceOtherHikers();
whoBringsWhat.assignSupplies();
var announceDistance = howFarHiked(0);
console.log("We have gone " + announceDistance + " miles and are finished!");