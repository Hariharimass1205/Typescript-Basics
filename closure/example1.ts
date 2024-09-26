function createCounter(){
    let counterValue = 0
    return{
       increment:function(){
        counterValue++;
       },
       getValue:function(){
        return counterValue; 
       },
       decrement:function(){
        counterValue--
       }
    }
}

let data = createCounter()
data.increment()
data.increment()
console.log(data.getValue())
data.decrement()
console.log(data.getValue())
