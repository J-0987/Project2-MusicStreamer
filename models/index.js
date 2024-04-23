// * This document is used to define the relationships between each model
const Artist = require('./Artist');
const Song = require('./Song');
const Playlist = require('./Playlist');
const PlaylistSong = require('./Playlist-Song');

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
Playlist.hasMany(PlaylistSong, {
    foreignKey: 'playlist_id',
    onDelete: 'CASCADE',
});

// A Song can belong to many Playlists
Song.belongsToMany(Playlist, {
    through: PlaylistSong,
    foreignKey: 'song_id',
});

// A Playlist can have many songs
Playlist.belongsToMany(Song, {
    through: PlaylistSong,
    foreignKey: 'playlist_id',
});

module.exports = { Artist, Song, Playlist, PlaylistSong };
