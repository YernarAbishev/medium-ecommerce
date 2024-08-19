import express from 'express';
import {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getOrders,
    getOrderById,
    deleteOrder,
} from '../controllers/adminController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - category
 *         - description
 *         - price
 *         - imageUrl
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: The name of the product
 *         category:
 *           type: string
 *           description: The category of the product
 *         description:
 *           type: string
 *           description: The description of the product
 *         price:
 *           type: number
 *           format: float
 *           description: The price of the product
 *         imageUrl:
 *           type: string
 *           description: The image URL of the product
 *       example:
 *         id: 1
 *         name: "Laptop"
 *         category: "Electronics"
 *         description: "A high-performance laptop"
 *         price: 999.99
 *         imageUrl: "https://example.com/laptop.jpg"
 *     Order:
 *       type: object
 *       required:
 *         - customerName
 *         - customerAddress
 *         - items
 *         - totalPrice
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the order
 *         customerName:
 *           type: string
 *           description: The name of the customer
 *         customerAddress:
 *           type: string
 *           description: The address of the customer
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *           description: The items in the order
 *         totalPrice:
 *           type: number
 *           format: float
 *           description: The total price of the order
 *       example:
 *         id: 1
 *         customerName: "John Doe"
 *         customerAddress: "123 Main St, Anytown, USA"
 *         items:
 *           - productId: 1
 *             quantity: 2
 *         totalPrice: 1999.98
 */

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: The admin managing API
 */

/**
 * @swagger
 * /admin/products:
 *   post:
 *     summary: Add a new product
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */
router.post('/products', addProduct);

/**
 * @swagger
 * /admin/products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */
router.get('/products', getProducts);

/**
 * @swagger
 * /admin/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Some server error
 */
router.get('/products/:id', getProductById);

/**
 * @swagger
 * /admin/products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Some server error
 */
router.put('/products/:id', updateProduct);

/**
 * @swagger
 * /admin/products/{id}:
 *   delete:
 *     summary: Remove the product by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product was deleted
 *       404:
 *         description: Product not found
 *       500:
 *         description: Some server error
 */
router.delete('/products/:id', deleteProduct);

/**
 * @swagger
 * /admin/orders:
 *   get:
 *     summary: Returns the list of all the orders
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       500:
 *         description: Some server error
 */
router.get('/orders', getOrders);

/**
 * @swagger
 * /admin/orders/{id}:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The order id
 *     responses:
 *       200:
 *         description: The order description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 *       500:
 *         description: Some server error
 */
router.get('/orders/:id', getOrderById);

/**
 * @swagger
 * /admin/orders/{id}:
 *   delete:
 *     summary: Remove the order by ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The order id
 *     responses:
 *       200:
 *         description: The order was deleted
 *       404:
 *         description: Order not found
 *       500:
 *         description: Some server error
 */
router.delete('/orders/:id', deleteOrder);

export default router;
