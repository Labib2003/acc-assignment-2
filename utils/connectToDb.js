const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const mongodbAtlasUri = `mongodb+srv://acc2:${process.env.DB_PASS}@cluster0.koyhbqw.mongodb.net/?retryWrites=true&w=majority`;

const connectToDb = async () => {
    const res = await mongoose.connect(mongodbAtlasUri).then(mongoose.connection);
    console.log("Connected to mongodb");
};

module.exports = connectToDb;