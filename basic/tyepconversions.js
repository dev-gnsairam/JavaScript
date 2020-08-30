let val;

/*Converting number to string*/
val = "5"; // by puting quotes it can convert to string
val = String(5); // Using string expression

// converting other data types
// 	Boolean,
// 	date
// 	Array
//  Date

val = String(false);
val = String([0, 1, 2, 3, 4, 'test']);

// with this also we have the ()toString() expresssion

val = ([1,2,3,4,5,6,7]).toString();
val = String(new Date);

// console.log(val);
// console.log(typeof val);
// console.log(val.length); // Length will only work on string, to return length of string


/*
	Converting String to Number
*/

val = Number("5"); // String Number

val = Number(true);
// val = Number(null);
val = parseInt("1"); // It was another method to convert string to number
val = parseFloat("1.32"); // It will parse as float, it includes decimals
// All Other Types will be NaN Error
console.log(val)
console.log(typeof val)
console.log(val.toFixed(2)) // toFixed only work on numbers it specifi decimals

/*
	If we add two different types  it will conctinate.. this is example of type corrision
*/