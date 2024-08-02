const express = require('express');
const routerArtists = require('./artis.outer');
const router = express.Router();

router.use('/artists', routerArtists)


module.exports = router;