const express = require('express');
const cors = require('cors');
const tourRoutes = require('./routes/tour.routes');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/", tourRoutes);

app.get("/", (req, res) => {
    res.send("Hello world!");
});

module.exports = app;