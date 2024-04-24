// * This document is used to define the relationships between each model
const Artist = require('./Artist');
const Song = require('./Song');
const Playlist = require('./Playlist');


// Define the relationships between each model


// An Artist can have many songs
Artist.hasMany(Song, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE',
});

// A Song belongs to an Artist
Song.belongsTo(Artist, {
    foreignKey: 'artist_id',
});

// A Playlist can have many songs
Playlist.hasMany(Song, {
    foreignKey: 'song_id',
    onDelete: 'CASCADE',
});

// A Song belongs to a Playlist
Song.belongsTo(Playlist, {
    foreignKey: 'song_id',
});

// A Playlist can have many artists
Playlist.hasMany(Artist, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE',
});

// An Artist belongs to a Playlist
Artist.belongsTo(Playlist, {
    foreignKey: 'artist_id',
});





module.exports = { Artist, Song, Playlist};
