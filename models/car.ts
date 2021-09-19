
import { carType } from '../types/car'
import { UUID, UUIDV4 } from 'sequelize';

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
    price?: string;
    type?: string;
    market?: string;
    link?: string;
    static associate(models:any) {
      // define association here
    }
  };
  Car.init({
    id: {
      primaryKey: true, 
      type: UUID,
      allowNull: false,  

    },
    description: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    vin: DataTypes.STRING,
    price: DataTypes.STRING,
    carType: DataTypes.STRING,
    market: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};