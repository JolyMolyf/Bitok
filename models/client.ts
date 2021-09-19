'use strict';
import { Model, UUID, UUIDV4 } from 'sequelize';
module.exports = (sequelize:any, DataTypes:any) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      Client.belongsTo(models.Person)
    }
  };
  Client.init({
    id: {
     type: UUID, 
     primaryKey: true, 
     allowNull: false,  
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING, 
    },
    address: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};