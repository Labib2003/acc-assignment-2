const mongoose = require('mongoose');

//schema
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the tour."],
        trim: true,
        unique: true,
        minLength: [3, "Tour name must at least 3 characters long."],
        maxLength: [100, "Tour name is too long."]
    },
    description: {
        type: String,
        required: [true, "Please provide a description for the tour."],
    },
    price: {
        type: Number,
        required: [true, "Please provide a price for the tour."],
        min: [0, "Price cannot be negative."]
    },
    views: {
        type: Number,
        min: [0, "Views cannot be negative."]
    }
}, {
    timestamps: true
});

//model
const Tour = mongoose.model("Tour", tourSchema);

module.exports.postNewTour = async (req, res) => {
    try {
        const tour = new Tour({ ...req.body, views: 0 });
        const result = await tour.save();
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: e.message
        })
    };
}