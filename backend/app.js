import express from 'express';
import cors from 'cors';
import {sequelize, PORT} from './config/config.js';
import adminRoutes from './routes/adminRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import swaggerRoutes from "./docs/swagger.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/client', clientRoutes);
app.use(swaggerRoutes);

app.use(errorHandler);


sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on host  http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
