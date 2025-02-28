

exports.myDatetimeFunction = function () {
    return Date();
};

exports.NumFormat = function (num) {
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

exports.InterestValue = function(loanAmount, paymentTerms) {
    let interest = loanAmount * 0.01 * paymentTerms;
    return interest
}

exports.TotalAmount = function(loanAmount, paymentTerms) {
    let interest = loanAmount * 0.01 * paymentTerms;
    let totalamount = loanAmount + interest;
    return totalamount
}

exports.Amortization = function(loanAmount, paymentTerms) {
    let interest = loanAmount * 0.01 * paymentTerms;
    let totalamount = loanAmount + interest;
    let amortization = totalamount / paymentTerms;
    return amortization
}
