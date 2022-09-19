const express = require('express');
const mongoose = require('mongoose');
const tourControllers = require('../controllers/tourControllers')

const router = express.Router();

router.route("/tour").post(tourControllers.postNewTour);

module.exports = router;