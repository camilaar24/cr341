const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            trim: true,
            require: [true, 'Add text']
        },
        amount: {
            type: Number,
            required: [true, 'Add a positive or negative number']
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    });

    module.exports = mongoose.model('transaction', transactionsSchema);