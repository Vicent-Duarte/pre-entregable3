const express = require('express');
const routerAlbums = require('./albums.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/albums', routerAlbums)

module.exports = router;