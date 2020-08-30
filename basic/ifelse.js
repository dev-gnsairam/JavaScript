const id = 100;

if(id == 100){
	console.log("It was 100");
} else if(id == 200){
	console.log("It was 200");
} else {
	console.log("It was something else number");
}

/*
	if we use != this means it was not correct or value not correct ....
	while using "==" We are comparing only value
*/

if(id === "100"){
	console.log("Value and Type was correct");
} else {
	console.log("Value and Type Not correct");
}

/*
	if we use !== this means it was not correct or value or type not correct ....
	while using "===" We are comparing only value
*/

// const num = 7;

if(typeof num !== 'undefined'){
	console.log(num + " It was there..");
} else {
	console.log(" It Not there..");
}

if(id < 10){
	console.log("it was greater than " + id);
} else {
	console.log("it was less than " + id);
}


/*

	> : Greater Than
	>= :Greater than or equal to
	< : Less than
	<= : Less than or equal to

	&& : Must Be true all conditions
	|| : Any one condition has to true
*/


// Ternery Operator

console.log(id == 100 ? 'correct' : 'incorrect');