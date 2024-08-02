const Artist = require("./Artist.model");
const Album = require("./Album.model");
const Song = require("./Song.model");
const Genre = require("./Genre.model");

//de 1 a muchos//
Artist.hasMany(Album)
Album.belongsTo(Artist)

Album.hasMany(Song)
Song.belongsTo(Album)

//de muchos a muchos//
Artist.belongsToMany(Genre, {through: 'genresArtists'})
Genre.belongsToMany(Artist, {through: 'genresArtists'})

Artist.belongsToMany(Song, {through: 'songsArtists'})
Song.belongsToMany(Artist, {through: 'songsArtists'})

Song.belongsToMany(Genre, {through: 'songsGenres'})
Genre.belongsToMany(Song, {through: 'songsGenres'})