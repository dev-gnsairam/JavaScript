class Person {
	constructor(firstName, lastName, dob){
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}

	greeting(){
		return `Hello There ${this.firstName} ${this.lastName}`;
	}

	getsFullName(){
		return `${this.firstName} ${this.lastName}`;
	}

	calcAge(){
		const diff = Date.now() - this.dob.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	getsMaried(newLastName) {
		return this.lastName = newLastName;s
	}

	static addNum(x, y){
		return x + y;
	}
}

const person = new Person("Sairam", "Gudiputi", "8-8-1989");

// console.log(person);
// console.log(person.greeting());
// console.log(person.getsFullName());
// console.log(person.calcAge());
// console.log(person.getsMaried("Test"));
// console.log(person.getsFullName());
// console.log(person.addNum(8,8));

class Customer extends Person {
	constructor(firstName, lastName, dob, phone, membership){
		super(firstName, lastName, dob);
		this.phone = phone;
		this.membership = membership;
	}

	greeting(){
		return `Hello ${this.firstName} ${this.lastName} Welcome to our company`;
	}
}


const customer = new Customer("John", "doe", "8-8-1997", "77-777-7777", "Standard");
console.log(customer);
console.log(customer.greeting());