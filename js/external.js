/*console.log("Hello from external javascript");
alert("welcome to my Website");

var userInput = prompt("what is your favorite color")
var favorite = "blue";

if (userInput === favorite) {
    alert("cool " + favorite + " is my favorite color");
}
else {
    alert("That's a nice color");
}
*/


var  littleMermaidDaysRented, brotherBearDaysRented, herculesDaysRented, pricePerDay;

littleMermaidDaysRented = 3;
brotherBearDaysRented = 5;
herculesDaysRented = 1;
pricePerDay = 3;

//variables and operators lesson from codeup
var mermaidTotal = littleMermaidDaysRented * pricePerDay;
var brotehrBearTotal = brotherBearDaysRented * pricePerDay;
var herculesTotal = herculesDaysRented * pricePerDay;


var rentalTotal = mermaidTotal + brotehrBearTotal + herculesTotal;
console.log( "The video rental total is "  + rentalTotal);

var google, amazon, faceBook, googleHours, amazonHours, faceBookHours, googlePay, amazonPay, faceBookPay, totalPay;
google = 400;
amazon = 380;
faceBook = 350;
googleHours = 6;
amazonHours = 4;
faceBookHours = 10;

googlePay = google * googleHours;

console.log("Google paid me: " + googlePay);

amazonPay = amazon * amazonHours;
console.log("Amazon paid me: " + amazonPay);

faceBookPay = faceBook * faceBookHours;
console.log("Facebook paid me: " + faceBookPay)

totalPay = googlePay + amazonPay + faceBookPay;

console.log("My total pay is: " + totalPay);

var classIsnotFull = true;
var classIsfull = false;
var noSheduleConflict = true;

var studentEnroll = classIsnotFull && noSheduleConflict;

console.log(studentEnroll);

/*alert("There is an open spot in class, I will  " + notFull);

alert("No class spots available, I " + full);

alert("The class date conflicts with my shcedule, I " + conflict);

alert("class does not conflict with my schedule, I will " + noConflict);

 */








//var answer = "yes";



/*var userResponse = prompt("Is there an open slot in class?");

 if (userResponse === answer && notFull) {
     alert("I will enroll");
 }
 else {
     alert("I will not enroll");
 }
 */

var twoOrMore = true;
var notExpired = true;

var offerapplied = twoOrMore || notExpired;
console.log(offerapplied);

var username = "codeup";
var password = "notastrongpassword";

console.log(password.length >= 5);

console.log()
