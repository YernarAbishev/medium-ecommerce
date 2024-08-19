import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Simple E-commerce API',
            version: '1.0.0',
            description: 'A simple e-commerce API',
        },
    },
    apis: ['./routes/*.js'], // Указываем путь к файлам, содержащим документацию Swagger
};

const swaggerSpec = swaggerJsDoc(options);

const router = express.Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
