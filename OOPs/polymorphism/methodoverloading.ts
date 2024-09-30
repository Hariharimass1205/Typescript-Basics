export {}
class cal{
    add(a:number,b:number):number
    add(a:string,b:string):string
    add(a:any,b:any):any{
        return a+b
    }
}

const call = new cal()
console.log(call.add(3,5))
console.log(call.add("hari","haran"))
