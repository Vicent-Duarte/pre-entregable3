const express = require('express');
const routerArtists = require('./artists.router');
const routerAlbums = require('./albums.router');
const routerSong = require('./songs.router');
const routerGenre = require('./genres.router');
const router = express.Router();

router.use('/artists', routerArtists)
router.use('/albums', routerAlbums)
router.use('/songs', routerSong)
router.use('/genres', routerGenre)

module.exports = router;