import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

// Koneksi Database
mongoose.connect('mongodb://localhost:27017/yourDatabaseName')
  .then(() => {
    console.log('Terhubung ke MongoDB');
    app.listen(port, () => {
      console.log(`Server berjalan di port ${port}`);
    });
  }).catch((error) => {
    console.error('Error koneksi', error);
  });
