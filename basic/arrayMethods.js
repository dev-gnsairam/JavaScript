/*
	defining array = [] or new Array()
*/


const Arr = [1,"String", true, {
	state: "AP",
	pincode: 515004
}, null, undefined, new Date];
const num = new Array(1,2,3,4,5,6,7,8);
// console.log(num)
let val;

// Getting an array length
val = Arr.length;

// Check if an Array
val = Array.isArray(Arr);

// Get Signle Value from array
/*Arrays are Zero Based*/
val = Arr[3];

// Insert into Array
Arr[23] = "test"

// FInding Index of Array
val = num.indexOf(5);

// Adding End to Array
num.push(250);

// Add on to front
num.unshift(120);

// Take off from end
num.pop();

// Take off From Front
num.shift();

// Splice from array
num.splice(0,3); // (From Start, To End)

// Reverse Array
num.reverse();

// Concatinate Array
val = num.concat(Arr);

// Sorting Array
val = num.sort(function(x,y) {
	return x - y;
});

// Find In Array
function under50(num) {
	return num < 5;
}
val = num.find(under50);
console.log(num)
console.log(val)
