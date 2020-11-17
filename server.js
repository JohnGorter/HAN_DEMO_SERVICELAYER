const express = require('express');
const BankService = require('./bankservice.js');

const app = express();

const bankService = new BankService(); 

app.use(express.static('./'));

app.post("/account/:number", (req, res) => {
    console.log("creating a new account");
    let account =  bankService.createAccount(req.params.number);
    res.end(JSON.stringify({balance:account.balance}));
}); 
app.get("/account", (req, res) => {
    const accounts = bankService.getAccounts(); 
    res.end(JSON.stringify(accounts));
})

app.listen(8088, () => { console.log("listening...")});


