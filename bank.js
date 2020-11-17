class Bank {
    constructor() {
        this.accounts = [];
    }

    createAccount(account){
        this.accounts.push(account);
    }

    getAccount(number){
        for (let account of this.accounts) {
            if (account.number == number) return account;
        }
    }

    transfer(amount, fromAccount, toAccount) {
        fromAccount.withdraw(amount);
        toAccount.deposit(amount);
    }
}

class Account {
    constructor(number){
        this.balance = 0;
        this.number = number;
    }
    deposit(amount){
        this.balance += amount
    }
    withdraw(amount){
        this.balance -= amount;
    }
}

module.exports = { Bank, Account };