//string properties & methods

let username = "Vladimir";
let nagan = "  Vladimir  ";
let telepon = "+63-956-810-4011";

console.log(username.length);
console.log(username.charAt());
console.log(username.indexOf("r"));
console.log(username.lastIndexOf("V"));

nagan = nagan.trim(); //trim spaces
//nagan = nagan.toUpperCase();
//nagan = nagan.toLowerCase();
console.log(nagan);

//replace characters
telepon = telepon.replaceAll("-", " ")
console.log(telepon);