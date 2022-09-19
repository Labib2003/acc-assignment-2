const Tour = require("../models/Tour")

module.exports.getToursService = () => {
    return Tour.find({});
}

module.exports.postNewTourService = (data) => {
    const tour = new Tour({ ...data, views: 0 });
    return tour.save();
}

module.exports.getTourByIdService = async (id) => {
    await Tour.updateOne({ _id: id }, { $inc: { views: 1 } });
    return Tour.findById(id);
}