

import { UUID } from "sequelize";
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
    generation?:string;
    vin?: string;
    price?: string;
    type?: string;
    market?: string;
    link?: string;
    year!:string;
    milage?:string;
    color?:string
    static associate(models:any) {
      Car.belongsTo(models.Engine)
    }
  };
  Car.init({
    id: {
      type: UUID, 
      primaryKey: true
    },
    description: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    generation: DataTypes.STRING,
    vin: DataTypes.STRING,
    price: DataTypes.STRING,
    type: DataTypes.STRING,
    market: DataTypes.STRING,
    link: DataTypes.STRING,
    year: DataTypes.STRING,
    milage: DataTypes.STRING,
    color:DataTypes.STRING,
    drive: DataTypes.STRING,
    gearBox: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};