const Tour = require("../models/Tour")

module.exports.getToursService = (filter) => {
    let selection, sorter;
    if (filter.fields) selection = filter.fields.split(",").join(" ");
    if (filter.sort) sorter = filter.sort.split(",").join(" ")
    console.log(selection, sorter)
    return Tour.find({}).select(selection).sort(sorter);
}

module.exports.postNewTourService = (data) => {
    const tour = new Tour({ ...data, views: 0 });
    return tour.save();
}

module.exports.getTourByIdService = async (id) => {
    await Tour.updateOne({ _id: id }, { $inc: { views: 1 } });
    return Tour.findById(id);
}

module.exports.getTopThreeViewedToursService = () => {
    return Tour.find({}).sort({ views: -1 }).limit(3);
}

module.exports.getTopThreeCheapestToursService = () => {
    return Tour.find({}).sort({ price: 1 }).limit(3);
}