let val;

let fn = "John";
let ln = "Doe";

let full = fn + ' ' + ln; // Concatination
// console.log(full)

let fi = "Gudiputi";
fi += " Sairam"; // Append A String


// Escaping
val = "this's Awesome i can't wait for that."
val = 'this\'s Awesome i can\'t wait for that.'
length = val.length;
val = fn.concat(" This is my first name " + ln);

// Change Case
val = fn.toLowerCase();
val = fn.toUpperCase();
val = fn[2]; // getting array index


// indexOf
val = fn.indexOf("J");
val = fn.lastIndexOf("h");


val = fn.charAt(3); // To get charecter in position

val = fn.substring(0,4); // Plucking of a string

val = fn.slice(-4);
val = fn.slice(-2);

str = "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolor corrupti!";
val = str.split(" ");

val = str.includes("Lorem");
val = str.includes("foo");


console.log(val);