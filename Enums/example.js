// enum Direction{
//     left,
//     rightt,
//     up,
//     down
// }
// function move(direction){
//     console.log(`moving ${Direction[direction].toLowerCase()}`)
// }
// move(Direction.left)
var Ways;
(function (Ways) {
    Ways[Ways["up"] = 0] = "up";
    Ways[Ways["down"] = 1] = "down";
    Ways[Ways["right"] = 2] = "right";
    Ways[Ways["left"] = 3] = "left";
})(Ways || (Ways = {}));
var a = Ways.left;
console.log(a);
