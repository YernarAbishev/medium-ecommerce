import Product from './Product.js';
import Order from './Order.js';

Product.sync({ alter: true });
Order.sync({ alter: true });

export { Product, Order };
