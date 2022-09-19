const { getToursService, postNewTourService } = require("../services/tours.services");

module.exports.getAllTours = async (req, res) => {
    try {
        const result = await getToursService();
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

module.exports.postNewTour = async (req, res) => {
    try {
        const result = await postNewTourService(req.body);
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