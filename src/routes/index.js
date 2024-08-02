const express = require('express');
const routerArtists = require('./artis.outer');
const routerAlbum = require('./albums.router');
const routerSong = require('./songs.router');
const routerGenre = require('./genre.router');
const router = express.Router();

router.use('/artists', routerArtists)
router.use('/albums', routerAlbum)
router.use('/song', routerSong)
router.use('/song', routerGenre)

module.exports = router;