'use strict';
import { Model, UUIDV4 } from 'sequelize';
import { PersonType } from '../types/person'

module.exports = (sequelize:any, DataTypes:any) => {
  class Person extends Model<PersonType> implements PersonType {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: string; 
    firstName!: string;
    secondName!: string; 


    static associate(models:any) {
      Person.hasOne(models.Client);
    }
  };
  Person.init({
    id: {
        type: DataTypes.UUID, 
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false, 
    },
    firstName: {
      type: DataTypes.STRING,
    },
    secondName: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};