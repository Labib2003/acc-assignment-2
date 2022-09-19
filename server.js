const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectToDb = require('./utils/connectToDb.js');

const app = require('./index');
const port = process.env.PORT || 5000;

connectToDb();

app.listen(port, () => {
    console.log("Server is running at port", port);
});