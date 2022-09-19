const Tour = require("../models/Tour")

module.exports.getToursService = (filter) => {
    const selection = filter.fields.split(",").join(" ");
    return Tour.find({}).select(selection).sort({views: -1});
}

module.exports.postNewTourService = (data) => {
    const tour = new Tour({ ...data, views: 0 });
    return tour.save();
}

module.exports.getTourByIdService = async (id) => {
    await Tour.updateOne({ _id: id }, { $inc: { views: 1 } });
    return Tour.findById(id);
}

module.exports.getTopThreeToursService = () => {
    return Tour.find({}).sort({views: -1}).limit(3);
}