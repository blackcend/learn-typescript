"use strict";
var getPercent = function () { return 2; };
var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * getPercent(); }
    console.log(value + tax + " : " + salary);
    console.log(arguments.length);
};
getBonus();
getBonus(40);
getBonus(undefined, 40);
getBonus(30, 50);
getBonus(12, 20, 30);
//# sourceMappingURL=default-params.js.map