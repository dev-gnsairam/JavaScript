const map1 = new Map();


const key1 = "Some String",
        key2 = [],
        key3 = function(){};

map1.set(key1, "Value of Key1");
map1.set(key2, "Value of Key2");
map1.set(key3, "Value of Key3");

// console.log(map1.size); // Get Cout No of Values in Map
// console.log(map1.get(key1)); // Gettting values from map
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// For Of Loop

for(let[key, value] of map1){
    console.log(`${key} : ${value}`)
}

for(let key of map1.keys()){
    console.log(key)
}

for(let value of map1.values()){
    console.log(value)
}

// const arr = Array.from(map1);
// const arr = Array.from(map1.values());
const arr = Array.from(map1.keys());
console.log(arr);