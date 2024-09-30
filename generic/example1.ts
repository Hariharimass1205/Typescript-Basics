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
//  console.log(StringStack.pop())

 let numberStack = new Stack<number>()
     numberStack.push(1)
     numberStack.push(2)
     numberStack.push(3)
//  console.log(numberStack.pop())



function get0index<T>(arr:T[]):T{
    return arr[0]
}

let arr=[1,2,3,4,5]
let arr2 = ["apple","orange","banana"]
console.log(get0index(arr))
console.log(get0index(arr2))

export{}