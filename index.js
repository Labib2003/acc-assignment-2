const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = app;