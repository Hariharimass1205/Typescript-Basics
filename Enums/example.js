var Direction;
(function (Direction) {
    Direction[Direction["left"] = 0] = "left";
    Direction[Direction["rightt"] = 1] = "rightt";
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("moving ".concat(Direction[direction].toLowerCase()));
}
move(Direction.left);
