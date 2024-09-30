export {}

class Man{
    greet(){
        console.log("hi from boys")
    }
}

class Women extends Man{
    greeet(){
        console.log("hii from girls")
    }
}

let a = new Women()
a.greeet()
a.greet()