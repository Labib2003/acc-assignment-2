const express = require('express');
const tourController = require('../controllers/tour.controller')

const router = express.Router();

router.route("/tours")
    .get(tourController.getAllTours)
    .post(tourController.postNewTour);
router.route("/tours/:id")
    .get(tourController.getTourById);
router.route("/tour/trending")
    .get(tourController.getTopThreeViewedTours);
router.route("/tour/cheapest")
    .get(tourController.getTopThreeCheapestTours);
module.exports = router;