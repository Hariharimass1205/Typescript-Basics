var FruitShop = /** @class */ (function () {
    function FruitShop() {
        this.fruitStore = { apple: 3, orange: 10 };
    }
    FruitShop.prototype.insertFruit = function (fruit, stock) {
        if (!this.fruitStore[fruit]) {
            this.fruitStore[fruit] = stock;
        }
        else {
            this.fruitStore[fruit] += stock;
        }
    };
    FruitShop.prototype.getFruitStore = function () {
        return console.log(this.fruitStore);
    };
    return FruitShop;
}());
var fruitSh = new FruitShop();
fruitSh.insertFruit("banana", 234);
fruitSh.getFruitStore();
fruitSh.insertFruit("apple", 42);
fruitSh.getFruitStore();
