const { getToursService, postNewTourService, getTourByIdService, getTopThreeViewedToursService, getTopThreeCheapestToursService, updateATourService } = require("../services/tours.services");

module.exports.getAllTours = async (req, res) => {
    try {
        const result = await getToursService(req.query);
        res.status(200).json({
            success: true,
            pages: result.pageCount,
            data: result.data
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

module.exports.updateATour = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await updateATourService(id, data);
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

module.exports.getTopThreeViewedTours = async (req, res) => {
    try {
        const result = await getTopThreeViewedToursService();
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

module.exports.getTopThreeCheapestTours = async (req, res) => {
    try {
        const result = await getTopThreeCheapestToursService();
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