const { getAll, create, getOne, remove, update } = require('../controllers/artists.controllers');
const express = require('express');

const routerArtists = express.Router();

routerArtists.route('/')
  .get(getAll)
  .post(create);

routerArtists.route('/:id')
  .get(getOne)
  .delete(remove)
  .put(update);

module.exports = routerArtists;