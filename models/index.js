// * This document is used to define the relationships between each model
const Artist = require('./Artist');
const Song = require('./Song');
const Playlist = require('./Playlist');
const User = require('./User');
const PlaylistSong = require('./PlaylistSong'); // Import the PlaylistSong model


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



// A playlist belongs to a User
Playlist.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'Cascade',
});

//User can have many playlists
User.hasMany(Playlist, {
    foreignKey: 'user_id',

});

Playlist.belongsToMany(Song, {
    through: {
        model: PlaylistSong,
        foreignKey: 'playlist_id',
    }
});

Song.belongsToMany(Playlist, {
    through: {
        model: PlaylistSong,
        unique: false,
        foreignKey: 'song_id',
    }
});


module.exports = { Artist, Song, Playlist, User, PlaylistSong };
