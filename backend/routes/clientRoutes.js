import express from 'express';
import { getAllProducts, getProduct, createOrder } from '../controllers/clientController.js';

const router = express.Router();

/**
 * @swagger
 * /client/products:
 *   get:
 *     summary: Retrieve a list of all products
 *     tags: [Client]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Server error
 */
router.get('/products', getAllProducts);

/**
 * @swagger
 * /client/products/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     tags: [Client]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product ID
 *     responses:
 *       200:
 *         description: The product description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.get('/products/:id', getProduct);
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the product
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
 *           description: The URL of the product image
 *       example:
 *         id: 1
 *         name: "Smartphone"
 *         category: "Electronics"
 *         description: "A high-end smartphone with 128GB storage"
 *         price: 799.99
 *         imageUrl: "https://example.com/products/smartphone.jpg"
 *     Order:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - phoneNumber
 *         - city
 *         - address
 *         - items
 *         - totalPrice
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the customer
 *         lastName:
 *           type: string
 *           description: The last name of the customer
 *         email:
 *           type: string
 *           description: The email address of the customer
 *         phoneNumber:
 *           type: string
 *           description: The phone number of the customer
 *         city:
 *           type: string
 *           description: The city of the customer's address
 *         address:
 *           type: string
 *           description: The full address of the customer
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *                 description: The ID of the product
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the product
 *           description: The list of items in the order
 *         totalPrice:
 *           type: number
 *           format: float
 *           description: The total price of the order
 *       example:
 *         firstName: "John"
 *         lastName: "Doe"
 *         email: "john.doe@example.com"
 *         phoneNumber: "+1234567890"
 *         city: "New York"
 *         address: "123 Main St, Apartment 4B"
 *         items:
 *           - productId: 1
 *             quantity: 2
 *           - productId: 3
 *             quantity: 1
 *         totalPrice: 1599.98
 */
/**
 * @swagger
 * /client/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Client]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: All fields are required.
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Error placing order
 */
router.post('/orders', createOrder);

export default router;
