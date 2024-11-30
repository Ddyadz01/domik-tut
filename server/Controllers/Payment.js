import { Router } from 'express';
import { chechAuth } from '../utils/CheckAuth.js';

import User from '../models/User.js';
import Transactions from '../models/Transactions.js';

const Paymentrouter = new Router();

Paymentrouter.post('/payment', chechAuth, async (req, res) => {
  try {
    const { toCard, count } = req.body;

    const fromUserID = req.userID;

    const fromUser = await User.findById({ _id: fromUserID }).populate({
      path: 'transactions',
      populate: [
        {
          path: 'to',
          model: 'User',
        },
        {
          path: 'from',
          model: 'User',
        },
      ],
    });

    if (!fromUser) {
      return res.status(400).json({
        message: 'Ошибка перевода',
      });
    }

    if (fromUser.balance < Number(count)) {
      return res.status(400).json({
        message: 'Недостатчоно средств для перевода',
      });
    }

    const toUser = await User.findOne({ card: toCard });

    if (!toUser) {
      return res.status(400).json({
        message: 'Получатель не найден',
        banalce: fromUser.balance,
      });
    }

    toUser.balance = toUser.balance + Number(count);

    fromUser.balance = fromUser.balance - Number(count);

    const NewTransaction = new Transactions({
      to: toUser._id,
      from: fromUser._id,
      anmout: count,
    });

    toUser.transactions.push(NewTransaction._id);
    fromUser.transactions.push(NewTransaction._id);

    await toUser.save();
    await fromUser.save();
    await NewTransaction.save();

    const user = await User.findById({ _id: fromUserID }).populate({
      path: 'transactions',
      populate: [
        {
          path: 'to',
          model: 'User',
        },
        {
          path: 'from',
          model: 'User',
        },
      ],
    });

    res.status(200).json({
      message: 'Перевод выполнен успешно',
      user,
    });
  } catch (error) {}
});

export default Paymentrouter;
