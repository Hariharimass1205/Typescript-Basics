class user1{
    firstName:string;
    lastName:string;
    age:number
    constructor(firstName:string,lastName:string,age:number){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    greet(){
        return `hello  "${this.firstName+this.lastName}" sir`
    }
    getAge(){
        return  `are you ${this.age} years old`
    }
}

let a = new user1("hari","haran",23)
console.log(a.greet())
console.log(a.getAge())