"use strict";
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "Hello";
displayColors(message, "red");
displayColors(message, "red", "green");
displayColors(message, "red", "green", "yellow");
//# sourceMappingURL=rest-param.js.map