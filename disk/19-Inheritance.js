"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TeamMU = (function () {
    function TeamMU(name) {
    }
    TeamMU.prototype.getName = function () {
        console.log("Manchester United");
    };
    return TeamMU;
}());
var PersonOfTeamMU = (function (_super) {
    __extends(PersonOfTeamMU, _super);
    function PersonOfTeamMU(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Member of TeamMU");
        return _this;
    }
    PersonOfTeamMU.prototype.getName = function () {
        return _super.prototype.getName.call(this);
    };
    return PersonOfTeamMU;
}(TeamMU));
var pot = new PersonOfTeamMU("Ronaldo");
pot.getName();
//# sourceMappingURL=19-Inheritance.js.map