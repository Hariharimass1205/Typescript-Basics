let element =  document.getElementById("element1") as HTMLInputElement
element.value = "hello world "

// as means assertion and we just telling ts that its a HTMLinput

let value:any = "hari haran"
let res:number = (value as string).length
console.log(res)

let value1:any = "hello all"
let res2:number = (value1 as string).length
console.log(res2)