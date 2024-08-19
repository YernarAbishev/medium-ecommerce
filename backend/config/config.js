import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('e_commerce', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
});

export const PORT = 8080;



