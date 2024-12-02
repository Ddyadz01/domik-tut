import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';
import { checkAuth } from '../utils/CheckAuth.js';

const UserRouter = new Router();

// Функция для генерации JWT
const generateToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: '30m' });
};

UserRouter.post('/register', async (req, res) => {
  try {
    const { last_name, first_name, phone_number, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Логин уже занят' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      last_name,
      first_name,
      phone_number,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = generateToken(newUser._id);

    res.status(201).json({
      user: newUser,
      token,
      message: 'Вы успешно зарегистрировались',
    });
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    res.status(500).json({ message: 'Ошибка сервера. Попробуйте позже.' });
  }
});

UserRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).populate('favorites');

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не существует' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Неправильный логин или пароль' });
    }

    const token = generateToken(user._id);

    res.json({
      user,
      token,
      message: `${user.last_name}, Добро пожаловать.`,
    });
  } catch (error) {
    console.error('Ошибка при входе:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

UserRouter.get('/me', checkAuth, async (req, res) => {
  try {
    const { userID } = req;
    const user = await User.findById(userID).populate('favorites');

    if (!user) {
      return res.status(401).json({ message: 'Ошибка доступа' });
    }

    const token = generateToken(user._id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    console.error('Ошибка при получении данных пользователя:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

UserRouter.put('/favorite/toggle/:id', checkAuth, async (req, res) => {
  const { id } = req.params;
  const { userID } = req;

  try {
    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден',
      });
    }

    const isFavorite = user.favorites.includes(id);

    if (isFavorite) {
      user.favorites = user.favorites.filter((favoriteId) => favoriteId._id != id);
      await user.save();
      return res.json({
        message: 'Товар удален из избранных',
        favorites: user.favorites,
      });
    } else {
      user.favorites.push(id);
      await user.save();
      return res.json({
        message: 'Элемент добавлен в избранное',
        favorites: user.favorites,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Произошла ошибка',
    });
  }
});

export default UserRouter;
