import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const checkAuth = async (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (!token) {
      return res.status(401).json({
        message: 'Ошибка доступа',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById({ _id: decoded._id });
    if (!user) {
      return res.status(401).json({
        message: 'Ошибка доступа',
      });
    }

    req.userID = user._id;

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Ошибка доступа',
    });
  }
};
