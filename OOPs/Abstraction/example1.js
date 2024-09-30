// abstract method
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return circle;
}(Shape));
var a = new circle(5);
console.log(a.area());
