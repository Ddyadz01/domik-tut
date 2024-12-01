import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';
import { chechAuth } from '../utils/CheckAuth.js';

const UserRouter = new Router();

UserRouter.post('/register', async (req, res) => {
  try {
    const { last_name, first_name, phone_number, email, password } = req.body;
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.json({
        message: 'Лоигн уже занят',
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = new User({
      last_name,
      first_name,
      phone_number,
      email,
      password: hash,
    });
    const token = jwt.sign({ _id: user._id }, 'secret1212121212', { expiresIn: '30m' });
    await user.save();
    res.json({
      user,
      token,
      message: 'Вы успешно зарегистрировались',
    });
  } catch (error) {
    console.log(error);
  }
});

UserRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).populate({
      path: 'favorites',
    });
    if (!user) {
      return res.json({
        message: 'Неправильный логин или пароль',
      });
    }
    const isHash = await bcrypt.compare(password, user.password);
    if (!isHash) {
      return res.json({
        message: 'Неправильный логин или пароль',
      });
    }
    const token = jwt.sign({ _id: user._id }, 'secret1212121212', { expiresIn: '30m' });
    res.json({
      user,
      token,
      message: 'Вы успешно вошли',
    });
  } catch (error) {
    console.log(error);
  }
});

UserRouter.get('/me', chechAuth, async (req, res) => {
  const { userID } = req;
  const user = await User.findById({ _id: userID }).populate({
    path: 'favorites',
  });
  if (!user) {
    return res.status(401).json({
      message: 'Ошибка доступа',
    });
  }
  const token = jwt.sign({ _id: user._id }, 'secret1212121212', { expiresIn: '30m' });
  res.json({
    user,
    token,
  });
});

UserRouter.post('/favorite/toggle', chechAuth, async (req, res) => {
  const { userID } = req;
  const { product_id } = req.body;
  const user = await User.findById({ _id: userID }).populate({
    path: 'favorites',
  });
  if (!user) {
    return res.status(401).json({
      message: 'Ошибка доступа',
    });
  }

  const fillterFavorites = user.favorites.filter((favorite) => favorite._id == product_id);

  if (fillterFavorites.length) {
    const newListFavorites = user.favorites.filter((favorite) => favorite._id != product_id);
    user.favorites = newListFavorites;
    await user.save();
    return res.status(200).json({
      favorites: newListFavorites,
    });
  }

  user.favorites.push(product_id);
  await user.save();
  return res.status(200).json({
    favorites: user.favorites,
  });
});

export default UserRouter;
