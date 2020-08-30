// Array Destructuring

let a,b;
[a, b, ...rest] = [100, 200, 300, 400, 500];
// console.log(a)
// console.log(b)
// console.log(rest)

// Object Destructuring

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 })

// console.log(a)
// console.log(b)
// console.log(rest)

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

const {firstName, age, address, hobbies, getBirthDay} = person;
console.log(firstName, age, address, hobbies)
console.log(getBirthDay());