var cal = /** @class */ (function () {
    function cal() {
    }
    cal.prototype.add = function (a, b) {
        return a + b;
    };
    return cal;
}());
var call = new cal();
console.log(call.add(3, 5));
console.log(call.add("hari", "haran"));
