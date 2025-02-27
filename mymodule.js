

exports.myDatetimeFunction = function () {
    return Date();
};

exports.InterestValue = function(loanAmount, paymentTerms) {
    let interest = loanAmount * 0.01 * paymentTerms;
    return interest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

exports.TotalAmount = function(loanAmount, paymentTerms) {
    let interest = loanAmount * 0.01 * paymentTerms;
    let totalamount = loanAmount + interest;
    return totalamount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

exports.Amortization = function(loanAmount, paymentTerms) {
    let interest = loanAmount * 0.01 * paymentTerms;
    let totalamount = loanAmount + interest;
    let amortization = totalamount / paymentTerms;
    return amortization.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}