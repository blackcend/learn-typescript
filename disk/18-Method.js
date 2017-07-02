"use strict";
var Person1 = (function () {
    function Person1(name) {
        this.name = name;
        console.log(this.name + " constructor.");
    }
    Person1.talk = function () {
        console.log('This is static method talk.');
    };
    Person1.prototype.run = function () {
        console.log('This is running ...');
    };
    return Person1;
}());
var p = new Person1("Dat");
p.run();
Person1.talk();
//# sourceMappingURL=18-Method.js.map