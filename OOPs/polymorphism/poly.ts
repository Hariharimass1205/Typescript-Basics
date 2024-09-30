export {}

interface Animal{
    speak():void;
}

class cat implements Animal{
    speak():void{
        console.log("cat is meoming")
    }
}

class dog implements Animal{
    speak(): void {
        console.log("dog is barking")
    }
}
function makeAnimalsSPeak(animal:Animal):void{
    animal.speak()
}

let a = new cat()
let b = new dog()

makeAnimalsSPeak(a)
makeAnimalsSPeak(b)