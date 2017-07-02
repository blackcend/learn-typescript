"use strict";
var displayColorsSpread = function (messageSpread) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(messageSpread);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var messageSpread = "Hello";
var colorsSpread = ['red', 'green', 'blue'];
displayColorsSpread.apply(void 0, [messageSpread].concat(colorsSpread));
//# sourceMappingURL=spread-params.js.map