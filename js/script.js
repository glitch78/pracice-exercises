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
console.log(rentalTotal);

var google, amazon, faceBook, googleHours, amazonHours, faceBookHours, googlePay, amazonPay, faceBookPay, totalPay;
google = 400;
amazon = 380;
faceBook = 350;
googleHours = 6;
amazonHours = 4;
faceBookHours = 10;

googlePay = google * googleHours;

console.log(googlePay);

amazonPay = amazon * amazonHours;

faceBookPay = faceBook * faceBookHours;

totalPay = googlePay + amazonPay + faceBookPay;

console.log(totalPay);


















