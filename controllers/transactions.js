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

//// @desc update transaction
// @route PUT/api/v1/transactions
exports.updateTransaction = (req, res, next) => {
    res.send('PUT transaction');
}

//// @desc Delete transaction
// @route DELETE/api/v1/transactions/:id
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction');
}