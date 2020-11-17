const Office = require('./bank.js');


class BankService {
    constructor() {
        this.bank = new Office.Bank(); 
    }
    
   createAccount(number){
    const newAccount = new Office.Account(number); 
    this.bank.createAccount(newAccount);
    return newAccount;
   }

   getAccounts() {
    return this.bank.accounts;
   }
}

module.exports = BankService


