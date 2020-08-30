const person = {
	firstName : "John",
	age: 23,
	getBirthDay: function() {
		return 1997;
	},
	address: {
		city: "AP",
		capital: "Amaravathi"
	},
	hobbies: ["Coding", "music"]
}

let val;

val = person.firstName;
val = person.getBirthDay();
val = person.address;
val = person.address.city;
val = person.hobbies;
val = person.hobbies[0];
console.log(val);