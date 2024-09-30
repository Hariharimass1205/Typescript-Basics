var BankAccount = /** @class */ (function () {
    function BankAccount(initialAmount) {
        this.balance = initialAmount;
    }
    BankAccount.prototype.creditAmount = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("amount credited ".concat(this.balance));
        }
        else {
            console.log("invaid entry");
        }
    };
    BankAccount.prototype.debitAmount = function (amount) {
        if (amount > 0 && amount < this.balance) {
            this.balance -= amount;
            console.log("".concat(amount, " dedected"));
        }
    };
    BankAccount.prototype.getBalance = function () {
        return console.log(this.balance);
    };
    return BankAccount;
}());
var res = new BankAccount(23000);
res.creditAmount(34554);
res.getBalance();
res.debitAmount(234324);
res.debitAmount(324);
res.getBalance();
