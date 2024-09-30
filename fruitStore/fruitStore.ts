export{}
class FruitShop{
    private fruitStore:object={apple:3,orange:10}
    constructor(){}

    public insertFruit (fruit:string,stock:number){
        if(!this.fruitStore[fruit]){
            this.fruitStore[fruit] = stock
        }else{
            this.fruitStore[fruit] += stock
        }
    }
    getFruitStore(){
        return console.log(this.fruitStore)
    }
}

let fruitSh = new FruitShop()
fruitSh.insertFruit("banana",234)
fruitSh.getFruitStore()
fruitSh.insertFruit("apple",42)
fruitSh.getFruitStore()
