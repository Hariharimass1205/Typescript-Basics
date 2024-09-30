var Stack = /** @class */ (function () {
    function Stack() {
        this.item = [];
    }
    Stack.prototype.push = function (item) {
        this.item.push(item);
    };
    Stack.prototype.pop = function () {
        return this.item.pop();
    };
    return Stack;
}());
var StringStack = new Stack();
StringStack.push("hari");
StringStack.push("haran");
StringStack.push("sasasa");
//  console.log(StringStack.pop())
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
//  console.log(numberStack.pop())
function get0index(arr) {
    return arr[0];
}
var arr = [1, 2, 3, 4, 5];
var arr2 = ["apple", "orange", "banana"];
console.log(get0index(arr));
console.log(get0index(arr2));
