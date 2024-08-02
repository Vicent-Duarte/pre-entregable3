const catchError = require("../utils/catchError");
const Artist = require("../models/Artist.model");

const getAllArtists = catchError(async (req, res) => {
  const results = await Artist.findAll();
  return res.json(results);
});

const createArtists = catchError(async (req, res) => {
  const result = await Artist.create(req.body);
  return res.status(201).json(result);
});

const getOneArtists = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Artist.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const removeArtists = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Artist.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const updateArtists = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Artist.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAllArtists,
  createArtists,
  getOneArtists,
  removeArtists,
  updateArtists,
};
