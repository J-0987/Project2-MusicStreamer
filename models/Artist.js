const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Artist extends Model {}

Artist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
         
        artist_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-zA-Z0-9\s\S]+$/ // Allows any type of data - numbers, letters, and special symbols
            }
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'artist',
    }
);

module.exports = Artist;


