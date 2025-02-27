

// const http = require('http');
const def = require('./mymodule.js');

const router = require('express').Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.get('/loancalculator', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

router.get('/loancalculator/:loanAmount/:paymentTerms', (req, res) => {
    let loanAmount = parseFloat(req.params.loanAmount);
    let paymentTerms = parseFloat(req.params.paymentTerms);

    if (isNaN(loanAmount) || isNaN(paymentTerms) || paymentTerms <= 0 || loanAmount <=0){
        return res.status(400).send("Eror: Invalid Input. Please Provide valid values")
    }

    res.send(`
        Interest: ${def.InterestValue(loanAmount, paymentTerms)}<br>
        Total Amount: ${def.TotalAmount(loanAmount, paymentTerms)}<br>
        Amortization: ${def.Amortization(loanAmount, paymentTerms)}<br>
        `
    )
});

module.exports = router;