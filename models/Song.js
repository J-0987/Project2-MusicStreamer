const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { release } = require('os');

class Song extends Model {}


Song.init(
    {
    id: {   
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    song_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z0-9\s\S]+$/ // Allows any type of data - numbers, letters, and special symbols
        }
    },
    album: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z0-9\s\S]+$/ // Allows any type of data - numbers, letters, and special symbols
        }
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[a-zA-Z0-9\s\S]+$/ // Allows any type of data - numbers, letters, and special symbols
        }
    },
    artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'artist',
            key: 'id',
        },
    },
    },
    {
    sequelize,
    timestamps: false,
    // prevent Sequelize from transforming the model name into plural form.
    freezeTableName: true,
    //  use snake_case for automatically generated fields
    underscored: true,
    modelName: 'song',

}
);

module.exports = Song;