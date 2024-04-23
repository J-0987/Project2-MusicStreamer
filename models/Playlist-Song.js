const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Playlist = require('./Playlist');


class PlaylistSong extends Model {}

PlaylistSong.init(

    {
      playlist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'playlist',
          key: 'id',
        },
      },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
            model: 'song',
            key: 'id',
            },
        },  
    }
    ,
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'playlist_song',
    }
);

module.exports = PlaylistSong;