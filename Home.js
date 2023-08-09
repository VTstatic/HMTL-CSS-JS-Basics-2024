// Type Conversion = change the datatype of a value to another
// (string, numbers, booleans)
// view in console

//input, if - else statement and data type

let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);

if (age > 30-74){!
    console.log("You're age is", age, "years old, you're getting older");
} else {
    console.log("You're age is", age, "years old, you're still young!");
} 


// view data type of a variable using typeof

let x;
let y;
let z;

x = Number(age);
y = String(age);
z = Boolean(age);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);