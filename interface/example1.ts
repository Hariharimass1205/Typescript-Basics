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

// greet(user2)
// greet2(user1)


interface Person{
    name:string
    age:number
    place:string
    readonly gender : string //  readonly property
    DOB?:number // optional property 
    //greet():string // this method should return string
}

let obj:Person = {
    name:"hari", 
    age:23,
    place:"cbe",
    gender:"male"
}
// obj.gender= "female"


interface add{
    (a:number,b:number):number
}

let res:add= (a,b)=>a+b;
//console.log(res(2,234))


// class to interface means inplements

interface printtable{
    print():void;
}

class doc implements printtable{
    papers:string
    constructor(papers:string){
        this.papers = papers
    }
    print():void{
        console.log(`printing ${this.papers}`)
    }
}

let res1 = new doc("harihari")
res1.print()