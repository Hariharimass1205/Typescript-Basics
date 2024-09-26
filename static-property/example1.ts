class User{
    name:string
    static userCount:number = 0
    constructor(name:string){
        this.name = name
        User.userCount++
    }
    getName(){
        return this.name
    }
    static getCount(){
        return User.userCount
    }
}
let a = new User("hari")
let b = new User("haran")
console.log(a.getName())
console.log(b.getName())
console.log(User.getCount())