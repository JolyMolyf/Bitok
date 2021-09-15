'use strict';

import { UUID } from "sequelize/types";
import { carType } from '../types/car'


const {
  Model
} = require('sequelize');
module.exports = (sequelize:any, DataTypes:any) => {
  class Car extends Model<carType>  implements carType {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id?: string;
    description!: string;
    brand!: string;
    model?: string;
    vin?: string;
    price?: number;
    type?: string;
    market?: string;
    link?: string;
    static associate(models:any) {
      // define association here
    }
  };
  Car.init({
    id: UUID,
    description: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    vin: DataTypes.STRING,
    price: DataTypes.NUMBER,
    type: DataTypes.STRING,
    market: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};