export{}

class BankAccount{
    private balance:number
    constructor(initialAmount:number){
        this.balance = initialAmount
    }
    creditAmount(amount:number){
        if(amount>0){
            this.balance += amount
            console.log(`amount credited ${this.balance}`)
        }else{
            console.log("invaid entry")
        }
    }
    debitAmount(amount:number){
        if(amount>0 && amount<this.balance){
            this.balance -= amount
            console.log(`${amount} dedected`)
        }else{
            console.log("insufficent balance")
        }
    }
    getBalance(){
        return console.log(this.balance)
    }
}

let res = new BankAccount(23000)
res.creditAmount(34554)
res.getBalance()
res.debitAmount(234324)
res.debitAmount(324)
res.getBalance()