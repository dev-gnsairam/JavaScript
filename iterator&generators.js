function nameIterator(names) {
    let nameIndex = 0;

    return {
        next : function(){
            return nameIndex < names.length ?
            {value: names[nameIndex++], done: "false"} :
            {done: "true"}
        }
    }
}

let namesArr = ['sairam', 'suvarna', 'sachin', 'sehvag'];

let names = nameIterator(namesArr);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());
console.log(names.next());