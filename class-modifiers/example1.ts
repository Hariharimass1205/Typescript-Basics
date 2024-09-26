class user1{
    private firstName:string;
    private lastName:string
    private age:number
    constructor(firstName:string,lastName:string,age:number){
        this.firstName = firstName 
        this.lastName = lastName 
        this.age = age 
    }
    getfirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getAge(){
        return this.age
    }
    public setFirstName(val){
        this.firstName = val
    }
    public setLastName(val){
        this.lastName = val
    }
    public setAge(val){
        this.age = val
    }
}

let a = new user1("hari","haran",23)
console.log(a.getfirstName()+a.getLastName())
a.setAge(34)
console.log(a.getAge())