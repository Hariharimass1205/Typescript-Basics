// abstract method

abstract class Shape{
    abstract area():number;
}

class circle extends Shape{
    constructor(private radius:number){
        super()
    }
    public area():number{
        return Math.PI * this.radius * this.radius
    }
}

const a = new circle(5)
console.log(a.area())