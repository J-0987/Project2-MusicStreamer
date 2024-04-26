const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Playlist extends Model {}

Playlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        playlist_name: {
            type: DataTypes.STRING(200), // Limit playlist_name to 200 characters
            allowNull: false,
            validate: {
                is: /^[a-zA-Z0-9\s\S]+$/ // Allows any type of data - numbers, letters, and special symbols
            }
        },
     description: {
            type: DataTypes.STRING(500), // Limit description to 500 characters
            allowNull: true,
            validate: {
                is: /^[a-zA-Z0-9\s\S]+$/ // Allows any type of data - numbers, letters, and special symbols
            }
        },  
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'song',
                key: 'id',
            },
        },
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'artist',
                key: 'id',
            },
        },
    },
        {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'playlist',

        },
    
    
);

module.exports = Playlist;