const express = require('express');
const tourController = require('../controllers/tour.controller')

const router = express.Router();

router.route("/tours")
    .get(tourController.getAllTours)
    .post(tourController.postNewTour);
router.route("/tours/:id")
    .get(tourController.getTourById);

module.exports = router;