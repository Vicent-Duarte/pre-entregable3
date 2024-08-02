const catchError = require('../utils/catchError');
const Genre = require('../models/Genre.model');

const getAll = catchError(async(req, res) => {
    const getAll = await Genre.findAll()
    return res.json(getAll)
});

const createGenre = catchError(async(req, res) => {
    const createGenre = await Genre.create(req.body)
    return res.json(createGenre)
})

module.exports = {
    getAll,
    createGenre
}