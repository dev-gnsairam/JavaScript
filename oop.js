function Person(name, dob) { // COnstructor
	this.name = name; // This refere to current Object or class
	this.age = new Date(dob);
	this.birthDay = function() {
		const diff = Date.now() - this.age.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
}

// const person = new Person("Sairam", "8-8-1997");
// console.log(person.birthDay());


/*
	Built In Constructor

	Premitive values can like string and numbers, booleans are actually they created as constructor.
*/

// const name = "John Doe";
const name = new String("JOhn Doe");
name.foo = "bar";
// console.log(name);
// console.log();


/*
	Protytpe :

	Object.prototype
	Person.prototype

*/

function Person(firstName, lastName, dob){
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
}

Person.prototype.calcAge = function(){
	const diff = Date.now() - this.dob.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
	return this.firstName + ' ' + this.lastName;
}

Person.prototype.greeting = function(){
	return `Helo there ${this.firstName} ${this.lastName} welcome to our Website`;
}

Person.prototype.getsMaried = function(newLastName){
	return this.lastName = newLastName;
}

const person = new Person("Sairam", "Gudiputi", "8-8-1997");
const person1 = new Person("Mahitha", "Venoknta", "17-3-1999");
// console.log(person);
// console.log(person.calcAge());
// console.log(person.getFullName());
// console.log(person.greeting());
// console.log(person1.getsMaried("Gudiputi"));
// console.log(person1.getFullName());


function Customer(firstName, lastName, dob, membership, phone){
	Person.call(this, firstName, lastName, dob);
	this.membership = membership;
	this.phone = phone;
}

Customer.prototype.greeting = function(){
	return `Hello Mr ${this.firstName} ${this.lastName} Welcome to our company`;
}


Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const customer = new Customer("James", "Joh", "7-17-1996", "premium", "665-744-6666");

// console.log(customer);
// console.log(customer.greeting());


const personPrototype = {
	greeting: function(){
		return `Welcome to test message`;
	},
	
}

const newPerson = Object.create(personPrototype);
newPerson.name = "test";
newPerson.age = "8-8-1997";
console.log(newPerson.name);