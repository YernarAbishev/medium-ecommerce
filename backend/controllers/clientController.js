import { Product, Order } from '../models/index.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
};

export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching product' });
    }
};

export const createOrder = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, city, address, items, totalPrice } = req.body;

        if (!firstName || !lastName || !email || !phoneNumber || !city || !address || !items || !totalPrice) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const order = await Order.create({ firstName, lastName, email, phoneNumber, city, address, items, totalPrice });
        res.status(201).json(order);
    } catch (error) {
        console.error('Error placing order:', error); // Log the error
        res.status(500).json({ error: 'Error placing order' });
    }
};

