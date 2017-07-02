"use strict";
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log("i: " + i);
    }, 1000);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
for (var y = 1; y <= 10; y++) {
    (function (x) {
        setTimeout(function () { return console.log("y: " + x); }, 1000);
    })(y);
}
//# sourceMappingURL=let-for.js.map