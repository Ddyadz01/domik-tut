import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserRouter from './Controllers/UserController.js';
import Paymentrouter from './Controllers/Payment.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', UserRouter);
app.use('/api', Paymentrouter);

app.listen(4000, () => {
  try {
    mongoose.connect(
      'mongodb+srv://admin:admin@cluster0.knq4ihu.mongodb.net/payment-card?retryWrites=true&w=majority',
    );
    console.log('DB OK');
  } catch (error) {
    console.log('Произошла ошибка при подключении к базе данных');
  }
});
