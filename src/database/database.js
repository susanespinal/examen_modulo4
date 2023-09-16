import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    'postgres',
    'susan', //user
    'password', //password
    {
        host: 'localhost',
        port: 4000,
        dialect: 'postgres'
    })