import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  res.json(products.find((p) => p._id === req.params.id));
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server runnning in ${process.env.NODE_ENV} mode at port ${PORT}`)
);
