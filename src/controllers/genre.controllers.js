const catchError = require('../utils/catchError');
const modelName = require('../models/modelName');

const getAll = catchError(async(req, res) => {
    return res.json(/* valor a retornar */)
});

module.exports = {
    getAll
}