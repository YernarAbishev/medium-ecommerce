import { DataTypes } from 'sequelize';
import {sequelize} from '../config/config.js';

const Order = sequelize.define('Order', {
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
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    items: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
}, {
    tableName: 'orders',
});

export default Order;
