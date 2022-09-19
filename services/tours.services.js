const Tour = require("../models/Tour")

module.exports.getToursService = async (filter) => {
    let selection, sorter, page = 1, limit = 10;
    if (filter.fields) selection = filter.fields.split(",").join(" ");
    if (filter.sort) sorter = filter.sort.split(",").join(" ")
    page = +filter.page;
    limit = +filter.limit;
    const skip = (page - 1) * limit;

    const data = await Tour
        .find({})
        .skip(skip)
        .limit(limit)
        .select(selection)
        .sort(sorter);
    const count = await Tour.countDocuments();
    const pageCount = Math.ceil(count / limit);

    return { data, pageCount };
}

module.exports.postNewTourService = (data) => {
    const tour = new Tour({ ...data, views: 0 });
    return tour.save();
}

module.exports.getTourByIdService = async (id) => {
    await Tour.updateOne({ _id: id }, { $inc: { views: 1 } });
    return Tour.findById(id);
}

module.exports.updateATourService = (id, data) => {
    return Tour.updateOne({ _id: id }, { $set: data }, { runValidators: true });
}

module.exports.getTopThreeViewedToursService = () => {
    return Tour.find({}).sort({ views: -1 }).limit(3);
}

module.exports.getTopThreeCheapestToursService = () => {
    return Tour.find({}).sort({ price: 1 }).limit(3);
}