import { Router } from 'express';

import Products from '../models/Products.js';

const ProductsRouter = new Router();

ProductsRouter.post('/product/add', async (req, res) => {
  try {
    const product = req.body;

    const NewProduct = new Products({
      ...product,
    });

    await NewProduct.save();

    res.status(200).json({
      message: 'Перевод выполнен успешно',
      NewProduct,
    });
  } catch (error) {}
});

ProductsRouter.get('/products', async (req, res) => {
  try {
    const products = await Products.find();

    res.status(200).json({
      products,
    });
  } catch (error) {}
});

export default ProductsRouter;
