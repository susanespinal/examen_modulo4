import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Categories } from './Categories.js';
import { Products } from './Products.js';

export const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,//false,
        //defaultValue:() => {}
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        Comment: 'nombre del usuario',
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'correo electronico'
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'contraseña'
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        comment: 'activo= true / inactivo= false'
    }

}, {
    timestamps: false,
}
);

Users.hasMany(Categories, {
    foreignKey: 'usuarioId',
    sourceKey: 'id'
});

Users.hasMany(Products, {
    foreignKey: 'usuarioId',
    sourceKey: 'id'
});

Categories.belongsTo(Users, {
    foreignKey: 'usuarioId',
    targetKey: 'id'
})

Products.belongsTo(Users, {
    foreignKey: 'usuarioId',
    targetKey: 'id'
})
