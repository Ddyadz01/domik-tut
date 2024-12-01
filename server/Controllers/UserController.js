import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';
import { chechAuth } from '../utils/CheckAuth.js';

const UserRouter = new Router();

UserRouter.post('/register', async (req, res) => {
  try {
    const { last_name, first_name, phone_number, email, password } = req.body;

    // Проверка, существует ли пользователь с таким email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: 'Логин уже занят',
      });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание нового пользователя
    const newUser = new User({
      last_name,
      first_name,
      phone_number,
      email,
      password: hashedPassword,
    });

    // Генерация JWT
    const token = jwt.sign({ _id: newUser._id }, 'secret1212121212', { expiresIn: '30m' });

    // Сохранение пользователя в базе данных
    await newUser.save();

    // Ответ клиенту
    res.status(201).json({
      user: newUser,
      token,
      message: 'Вы успешно зарегистрировались',
    });
  } catch (error) {
    console.error('Ошибка при регистрации:', error);
    res.status(500).json({
      message: 'Ошибка сервера. Попробуйте позже.',
    });
  }
});

UserRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).populate({
      path: 'favorites',
    });

    if (!user) {
      return res.status(400).json({
        message: 'Пользователь не существует',
      });
    }
    const hashedPassword = await bcrypt.compare(password, user.password);

    if (!hashedPassword) {
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
    return res.status(500).json({
      message: 'Ошибка сервера',
    });
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
UserRouter.put('/favorite/toggle/:id', chechAuth, async (req, res) => {
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
      user.favorites = user.favorites.filter((favoriteId) => favoriteId !== id);
    } else {
      user.favorites.push(id);
    }

    await user.save(); // Сохранение изменений

    return res.json({
      message: isFavorite ? 'Товар удален из избранных' : 'Элемент добавлен в избранное',
      favorites: user.favorites,
    });
  } catch (error) {
    console.error('Ошибка при обновлении избранных:', error);
    return res.status(500).json({
      message: 'Ошибка сервера',
    });
  }
});

export default UserRouter;
