/*for (var i = 0;  i < 65536; i++) {
    console.log(i);
}


for(let i = 1; i < 13 ; i++){
    for(let j = 1; j < 13 ; j++){
        console.log(`${j} x ${i} = ${j*i}`)
        7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
 */

function multiplication_table(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(i + " X " + number + " = " + (i * number));
    }
}
multiplication_table(7);


function random_even_odd() {
    for (var i = 0; i < 10; i++) {
       var  number = Math.floor(Math.random() * 180 + 20);
       if (number % 2 == 0) {
           console.log(number + " is even");
       }
       else {
           console.log(number + " is odd");
       }
    }
}

//random_even_odd();

/*
for(var i = 1; i <= 9; i++){
    var row = "";
    for(var j = 0; j < i; j++){
        row = row + i;
    }
    console.log(row);
}

 */
/*
for (var i = 1; i <= 9; i ++) {
    var row = "";
    for(var j = 1; j <=i; j++){
        row = row + i;
    }
    console.log(row); //question 3
}

 */
/*
for (var i = 100; i > 0; i = i - 2) {
    console.log(i);
}

 */

var number = prompt("Enter a number between 1 and 50");

while (number < 1 || 50 < number) {
    number = prompt(" invalid input! Enter a number between 1 and 50");
    if(number < 1 || 50 < number) {
        break;
    }
}
/*
for (var i = 1; i <= 50; i++) {
    if (i % 2 == 1) {
        if (i == number) {
            console.log("YIKES!");
            continue;
        }
        console.log(i);
    }
}

 */

for (var i = 1; i <= 50; i = i + 2) {

        if (i == number) {
            console.log("YIKES! Skipping the number: " + i);
            continue;
        }
        console.log("Here is and odd number " + i);
}