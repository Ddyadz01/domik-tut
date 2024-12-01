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

    const user = await User.findOne({ email });
    // .populate({
    //   path: 'transactions',
    //   populate: [
    //     {
    //       path: 'to',
    //       model: 'User',
    //     },
    //     {
    //       path: 'from',
    //       model: 'User',
    //     },
    //   ],
    // });

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

  const user = await User.findById({ _id: userID });
  // .populate({
  //   path: 'transactions',
  //   populate: [
  //     {
  //       path: 'to',
  //       model: 'User',
  //     },
  //     {
  //       path: 'from',
  //       model: 'User',
  //     },
  //   ],
  // });

  if (!user) {
    return res.status(401).json({
      message: 'Ошибка доступа',
    });
  }

  const token = jwt.sign({ _id: user._id }, 'secret1212121212', { expiresIn: '30m' });

  const AllUsers = await User.find({ _id: { $ne: user._id } });

  res.json({
    user,
    AllUsers,
    token,
  });
});

export default UserRouter;
