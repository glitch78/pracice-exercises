/**************************
 * variable and data types
 */

/*
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

*/


/**************************
 * variable mutattion and type  coercion
 */


/*
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
*/

/*******************************
 * Basic operators
 */
/*
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

 */


/************************************
 * Operator Precedence
 */
/*
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
*/

/*****************************
 * If /else statements
 */

/*

var firstName = "John";
var civilStatus = "married";

if (civilStatus === "married"); {
    console.log(firstName + " is married")
}

*/


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










