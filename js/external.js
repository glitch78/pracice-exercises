console.log("Hello from external javascript");
alert("welcome to my Website");

var userInput = prompt("what is your favorite color")
var favorite = "blue";

if (userInput === favorite) {
    alert("cool " + favorite + " is my favorite color");
}
else {
    alert("That's a nice color");
}

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

var notFull = "enroll";
var full = "can't enroll";
var noConflict = "enroll";
var conflict = "can't enroll";
var answer = "yes";

var userResponse = prompt("Is there an open slot in class?");

 if (userResponse === answer ) {
     alert("I will enroll");
 }


