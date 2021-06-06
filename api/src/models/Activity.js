const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('activity', {
        name: {
          type: DataTypes.STRING,
        },
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        difficulty: {
          type: DataTypes.INTEGER,
        },
        duration: {
          type: DataTypes.INTEGER,
        },
        season: {
          type: DataTypes.STRING
        }
    });
};