const express = require('express');
const routerArtists = require('./artis.outer');
const routerAlbum = require('./albums.router');
const routerSong = require('./songs.router');
const routerGenre = require('./genre.router');
const router = express.Router();

router.use('/artists', routerArtists)
router.use('/albums', routerAlbum)
router.use('/songs', routerSong)
router.use('/genres', routerGenre)

module.exports = router;