//slice() = extract a section of a string
//          and returns it as a new string,
//          without modifying the original string
//          spaces can be added at the beginning and end of character count

let fullName = "Vladimir Tabuyo";
let firstName;
let lastName;

lastName = fullName.slice(9);
firstName = fullName.slice(0, 8);

//displaying Firt Name and Last Name using start and spaces
spacesFirst = fullName.slice(0 , fullName.indexOf(" "));
spacesLast = fullName.slice(fullName.indexOf(" ") + 1);

console.log(lastName);
console.log(firstName);
console.log(spacesFirst);
console.log(spacesLast);