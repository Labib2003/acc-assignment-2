const Tour = require("../models/Tour")

module.exports.getToursService = () => {
    return Tour.find({});
}

module.exports.postNewTourService = (data) => {
    const tour = new Tour({ ...data, views: 0 });
    return tour.save();
}