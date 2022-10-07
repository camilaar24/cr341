const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, updateTransaction, deleteTransaction} = require('../controllers/transactions');

router
.route('/')
.get(getTransactions)
.post(addTransaction)
.put(updateTransaction);

router
.route('/:id')
.delete(deleteTransaction);

module.exports = router;