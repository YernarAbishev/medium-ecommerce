import { Product, Order } from '../models/index.js';

export const addProduct = async (req, res) => {
    try {
        const { name, category, description, price, imageUrl } = req.body;
        const product = await Product.create({ name, category, description, price, imageUrl });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error adding product' });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
};

export const getProductById = async (req, res) => {
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

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, category, description, price, imageUrl } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (product) {
            product.name = name;
            product.category = category;
            product.description = description;
            product.price = price;
            product.imageUrl = imageUrl;
            await product.save();
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating product' });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy();
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting product' });
    }
};



export const getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching orders' });
    }
};

export const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching order' });
    }
};


export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findByPk(id);
        if (order) {
            await order.destroy();
            res.status(200).json({ message: 'Order deleted successfully' });
        } else {
            res.status(404).json({ error: 'order not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting order' });
    }
};