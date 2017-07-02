"use strict";
var Person = (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        console.log('Person is running ...');
        return true;
    };
    return Person;
}());
var p1 = new Person();
console.log(typeof p1);
console.log(typeof Person);
console.log(p1.run === Person.prototype.run);
console.log(p1.run());
//# sourceMappingURL=init-class.js.map