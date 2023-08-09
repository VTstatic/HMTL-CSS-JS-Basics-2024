// const =  variable that can't be changed
            //make your variables all CAPS for a good practice

// let = is a hackable variable declaration code

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);


circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);