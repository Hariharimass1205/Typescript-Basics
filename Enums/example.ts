enum Direction{
    left,
    rightt,
    up,
    down
}

function move(direction){
    console.log(`moving ${Direction[direction].toLowerCase()}`)
}

move(Direction.left)