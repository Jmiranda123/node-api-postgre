'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Farmer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Farmer.hasOne(models.Address);
      Farmer.hasOne(models.Document);
    }
  }
  Farmer.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Farmer',
  });
  return Farmer;
};