'use strict';
import { Model, UUIDV4 } from 'sequelize';
module.exports = (sequelize:any, DataTypes:any) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  };
  Order.init({
    id: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE
    } 
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};