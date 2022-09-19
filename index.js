const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//schema
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the tour."],
        trim: true,
        unique: true,
        minLength: [3, "Tour name must at least 3 characters long."],
        maxLength: [100, "Tour name is too long."]
    },
    description: {
        type: String,
        required: [true, "Please provide a description for the tour."],
    },
    price: {
        type: Number,
        required: [true, "Please provide a price for the tour."],
        min: [0, "Price cannot be negative."]
    },
    views: {
        type: Number,
        min: [0, "Views cannot be negative."]
    }
}, {
    timestamps: true
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = app;