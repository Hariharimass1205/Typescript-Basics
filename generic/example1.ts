class Stack<T>{
   private item: T[]=[]
    push(item:T){
        this.item.push(item)
    }
    pop(){
       return this.item.pop()
    }
}

let StringStack = new Stack<string>()
 StringStack.push("hari")
 StringStack.push("haran")
 StringStack.push("sasasa")
 console.log(StringStack.pop())

 let numberStack = new Stack<number>()
     numberStack.push(1)
     numberStack.push(2)
     numberStack.push(3)
 console.log(numberStack.pop())