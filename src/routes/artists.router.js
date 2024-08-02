const { getAllArtists, createArtists, getOneArtists, removeArtists, updateArtists } = require('../controllers/artists.controllers');
const express = require('express');

const routerArtists = express.Router();

routerArtists.route('/')
  .get(getAllArtists)
  .post(createArtists);

routerArtists.route('/:id')
  .get(getOneArtists)
  .delete(removeArtists)
  .put(updateArtists);

module.exports = routerArtists;