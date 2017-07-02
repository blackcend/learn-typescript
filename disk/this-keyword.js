"use strict";
var Employee = (function () {
    function Employee() {
        var _this = this;
        this.id = 1;
        this.name = "Blackcend";
        this.greet = function () {
            console.log(_this.id);
            setTimeout(function () {
                console.log(_this.name);
            }, 1000);
        };
    }
    return Employee;
}());
var em = new Employee();
em.greet();
var mobile = {
    name: "Iphone",
    price: 3000000,
    mobile: function () {
        var _this = this;
        console.log(this.name);
        setTimeout(function () {
            console.log(_this.price);
        }, 1000);
    }
};
mobile.mobile();
//# sourceMappingURL=this-keyword.js.map