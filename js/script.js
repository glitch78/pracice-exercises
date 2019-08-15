/**************************
 * variable and data types
 */


var  firstName = "Lancelot";
console.log(firstName);

var lastName = "Ellis";

var age = 45;
var fullAge = true;
console.log(fullAge);

var  job;
console.log(job);

job = "teacher";
console.log(job);

// practice single line comment




/**************************
 * variable mutattion and type  coercion
 */



var firstName = "Lancelot ";
var age = 45;

// type coercion
console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;
console.log(firstName + " is a " + age + " year old " + job + ". is he married? " + isMarried);

// variable mutation
age = "twenty eight ";
job = "driver";

alert(age + job);

var lastName = prompt("what is his last name ");
console.log(firstName + lastName + age);


/*******************************
 * Basic operators
 */

var year, yearJohn, yearMark;
var now = 2019;
var ageJohn = 28;
var ageMark = 32;


// math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeOf operator
console.log(typeof johnOlder);

var  littleMermaid, brotherBear, hercules, day;

littleMermaid = 3;
brotherBear = 5;
hercules = 1;
day = 3;

//variables and operators lesson from codeup
var mermaidTotal = littleMermaid * day;
var brotehrBearTotal = brotherBear * day;
var herculesTotal = hercules * day;

console.log(mermaidTotal + brotehrBearTotal + herculesTotal);

var rentalTotal = mermaidTotal + brotehrBearTotal + herculesTotal;
alert( "The video rental total is "  + rentalTotal);

var google, amazon, faceBook, googleHours, amazonHours, faceBookHours, googlePay, amazonPay, faceBookPay, totalPay;
google = 400;
amazon = 380;
faceBook = 350;
googleHours = 6;
amazonHours = 4;
faceBookHours = 10;

googlePay = google * googleHours;

alert("Google paid me: " + googlePay);

amazonPay = amazon * amazonHours;
alert("Amazon paid me: " + amazonPay);

faceBookPay = faceBook * faceBookHours;
alert("Facebook paid me: " + faceBookPay)

totalPay = googlePay + amazonPay + faceBookPay;

alert("My total pay is: " + totalPay);




/************************************
 * Operator Precedence
 */

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageMark + ageJohn) / 2;

console.log(average);

// multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // = 26
console.log(x, y);

//more operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);


/*****************************
 * If /else statements
 */



var firstName = "John";
var civilStatus = "married";

if (civilStatus === "married"); {
    console.log(firstName + " is married")
}




/***********************
 * Functions

 */

function calculateAge(birthYear) {
    return 2019 - birthYear
}


var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1931);
var ageJane = calculateAge(1941);

console.log(ageJohn, ageJane, ageMike);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + " " + "retires in" + " " + retirement + " " + "years.");
    } else {
        console.log(firstName + " " + "is already retired.");
    }
}


yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1949, "Mike");
yearsUntilRetirement(1980, "Bill");




/*************************************
 * Loops and iteration
 */
/*
for (var i = 0;  i < 10; i++) {
    console.log(i);
}
 */
/*
function showMultiplicationTable(number) {
    for (var i = 1; i <=10; i++) {

        console.log(i + " X " + number + " = " + (i * number));
    }

}
showMultiplicationTable(7);


function randomOddEven() {
    for (var i = 1; i <=10; i++) {
    var number = Math.floor(Math.random() * 180 + 20);
    if (number % 2 === 0) {
        console.log(number +  " is even ");
    } else {
        console.log(number + " is odd ");
    }

    }

}
randomOddEven();

for(var i = 1; i <= 9; i++){
    var row ="";
    for(var j = 0; j < i; j++){
        row = row + i;
    }
    console.log(row);
}

for (var i = 100; i > 5; i = i - 5) {
    console.log(i);
}

var random = Math.floor((Math.random()*50)+ 1);

console.log("Random odd number to skip is: " + random);

for (var i = 1; i < 50; i++) {
    console.log("here is an odd numb: " + i);
}


 */


(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;




    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     planetsArray = planetsString.split(",");

     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


})();

(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
/*
    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift("The Sun");
    console.log(planets);


    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop("Pluto");
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var indexOfEarth = planets.indexOf("Earth");
    console.log(planets);

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);


 */





})();

