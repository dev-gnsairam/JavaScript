/*
	For Loop -> 3 param[declation, condition, increment]
*/

// for(i = 0; i <= 10; i++){
// 	if(i === 2){
// 		console.log("It was my 2");
// 		continue;
// 	}


// 	if(i === 7){
// 		console.log("It was 7");
// 		break;
// 	}

// 	console.log(i);
// }

/*
	While Loop	
*/

let i = 0; // Declaration

while(i < 10){  // Condition
	// console.log(i);
	i++; // Incrementor
}

/*
	DO While loop Runs no matter what
*/

let x = 0;

do {
	// console.log(x);
	x++;
}

while(x < 10);



const cars = ['honda', 'toyota', 'chevy', 'ford'];

cars.forEach(function(cars){
	// console.log(cars);
});


/*
	Map
*/

const students = [
	
	{id: 1 , name: "john"},
	{id: 2 , name: "doe"},
	{id: 3 , name: "kevin"}
]

const ids = students.map(function(user){
	return user.id;
});


// console.log(ids);

/*
	Let in
*/

const user = {
	firstName: "John",
	lastName: "Doe",
	age: 30
}

for(let x in user){
	console.log(x + ' ' + user[x]);
}