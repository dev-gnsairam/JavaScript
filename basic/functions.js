function greeting(firstName = "John", lastName = "Doe") {
	return "Hello " + firstName + " " + lastName;
}
console.log(greeting("Steve", "Smith"));


const func = function(x){
	return x*x;
}
console.log(func(2));


// immediatly invokable function expression
(function(){
	console.log("I am just rannn....");
})();


(function(name){
	console.log("I am just rannn...." + name);
})("Test name")