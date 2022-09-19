const express = require('express');
const tourController = require('../controllers/tour.controller')

const router = express.Router();

router.route("/tours")
    .get(tourController.getAllTours)
    .post(tourController.postNewTour);

module.exports = router;