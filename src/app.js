import express from 'express';
import morgan from 'morgan';

const app = express();

//IMPORTAR RUTAS
import usersRoutes from './routes/users.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
import productsRoutes from './routes/products.routes.js';
import autenticationRoutes from './routes/autentication.routes.js'

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

//ROUTES
app.use('/api/auth',autenticationRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productsRoutes);

export default app;