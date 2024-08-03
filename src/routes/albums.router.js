const { getAll, create, getOne, remove, update } = require('../controllers/albums.controllers');
const express = require('express');

const routerAlbums = express.Router();

routerAlbums.route('/')
    .get(getAll)
    .post(create);

routerAlbums.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerAlbums;