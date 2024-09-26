class person{
    firstName:string
    lastName:string
    age:number
    constructor(firstName:string,lastName:string,age:number){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    greet(){
        return `hello ${this.firstName+this.lastName}`
    }
    getage(){
        return `${this.age}`
    }
}

class  user1 extends person{
    constructor(firstName:string,lastName:string,age:number){
        super(firstName,lastName,age)
    }
    
}
class admin extends person{
    role : string
    constructor(firstName:string,lastName:string,age:number,role:string){
        super(firstName,lastName,age)
        this.role = role
    }
    greet():string{
        return `hello ${this.role}`
    }
}
let a = new user1("hari",'haran',23)
let b = new admin("haha","prea",45,"admin")

console.log(a.greet())
console.log(a.getage())

console.log(b.greet())
console.log(b.getage())