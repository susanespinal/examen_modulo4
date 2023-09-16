import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Products = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio_unitario: {
        type: DataTypes.DOUBLE,
        defaultValue:0
        //allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});