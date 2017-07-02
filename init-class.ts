// let p1 = new Person() =>class ko ho tro hoisting
class Person {
    run(){
        console.log('Person is running ...');
        return true;
    }
}

// person(); // => function ho tro hoisting
// function person(){

// }

let p1 = new Person();

console.log(typeof p1); // => object
console.log(typeof Person); // => function

console.log(p1.run === Person.prototype.run); // => true
console.log(p1.run()); // => Person is running