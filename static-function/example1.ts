class User{
    firstName : string;
    lastName:string
    age:number
    constructor(firstName:string,lastName:string,age:number){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    static ageCheck(age:number){
        return age<=18
    }
}
console.log(User.ageCheck(23))