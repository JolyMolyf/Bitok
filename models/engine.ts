'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize:any, DataTypes:any) => {
  class Engine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
     Engine.hasOne(models.Car)
    }
  };
  Engine.init({
    name: DataTypes.STRING,
    volume: DataTypes.STRING,
    power: DataTypes.STRING,
    fuelType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Engine',
  });
  return Engine;
};