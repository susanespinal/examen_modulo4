import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Products } from './Products.js';

export const Categories = sequelize.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Categories.hasMany(Products, {
    foreignKey: 'categoriaId',
    sourceKey: 'id'
});

Products.belongsTo(Categories, {
    foreignKey: 'categoriaId',
    targetKey: 'id'
})