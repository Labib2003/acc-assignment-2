const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const tourRoutes = require('./routes/tourRoutes');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1", tourRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

module.exports = app;