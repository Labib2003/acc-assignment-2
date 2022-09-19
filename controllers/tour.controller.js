const { getToursService, postNewTourService, getTourByIdService } = require("../services/tours.services");

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

module.exports.getTourById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getTourByIdService(id);
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