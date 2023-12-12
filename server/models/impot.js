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

class Impot extends Model {}

Impot.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  departement: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  code_Departement: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  code_INSEE_Commune: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nombre_de_Contribuables: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  moyenne_Actifs_Euros: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  moyenne_Impot_Euros: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  annee: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  code_Region: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
  modelName: 'Impot',
  tableName: 'dataset_final', 
});

module.exports = {
  Impot, 
  sequelize,
};
