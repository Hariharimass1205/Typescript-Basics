var cat = /** @class */ (function () {
    function cat() {
    }
    cat.prototype.speak = function () {
        console.log("cat is meoming");
    };
    return cat;
}());
var dog = /** @class */ (function () {
    function dog() {
    }
    dog.prototype.speak = function () {
        console.log("dog is barking");
    };
    return dog;
}());
function makeAnimalsSPeak(animal) {
    animal.speak();
}
var a = new cat();
var b = new dog();
makeAnimalsSPeak(a);
makeAnimalsSPeak(b);
