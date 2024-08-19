import { DataTypes } from 'sequelize';
import {sequelize} from '../config/config.js';

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'products',
});

export default Product;
