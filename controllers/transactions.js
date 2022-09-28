// @desc Get all transactions
// @route GET/api/v1/transactions
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

//// @desc Add transaction
// @route POST/api/v1/transactions
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction');
}