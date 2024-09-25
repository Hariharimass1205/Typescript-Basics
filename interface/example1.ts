interface User{
    firstName:string,
    lastName:string
    age?:number
}

function greet(user:User){
 return console.log(`hello ${user.firstName} ${user.lastName}`)
}

function greet2(user:User){
    return console.log(`hey dude ${user.firstName} ${user.lastName} ${user.age}`)
}

let user1 = {firstName:"hari",lastName:"haran",age:23}
let user2 = {firstName:"vg",lastName:"dada"}

greet(user2)
greet2(user1)