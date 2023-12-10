// models/user.js

'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const { development } = require('../config/config.json');

const sequelize = new Sequelize({
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
  ...development, // Spread the development configuration
});

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'Users', // Make sure this matches your actual table name
});

module.exports = {
  User, // Export the model
  sequelize, // Export the Sequelize instance
};
