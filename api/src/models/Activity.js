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
          type: DataTypes.ENUM(["1","2","3","4","5"]),
        },
        duration: {
          type: DataTypes.TIME,
        },
        season: {
          type: DataTypes.STRING
        }
    });
};