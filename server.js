const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/.env' });

connectDB();

const transactions = require('./routes/transactions');
const AuthRoute = require('./routes/auth')

const app = express();

app.use(express.json());

app.use('/api/v1/transactions', transactions)
app.use('/api', AuthRoute)

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
