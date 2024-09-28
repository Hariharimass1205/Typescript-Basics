function adds(a:number,b:number): number {
    return a+b
}
console.log(adds(1,2))

// add(a:number,b:numebr):number this place if u give means u can only return number

function adds2(a:number,b:number): number {
   // return a+b+"" this is wrong
   return a+b+432
}
console.log(adds(1,2))



function checks(num:number):boolean | string{
    if(num<5){
        return true
    }
    return "200 ok"
}
console.log(checks(53))
// "|" is used as and in return part


let arr:number[]=[1,2,3,4,5]
arr.map((a:number):number=>{
    return a
})
//syntex for arr fn