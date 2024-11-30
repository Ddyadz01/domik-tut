import mongoose, { Schema } from 'mongoose';

const UserModel = new Schema({
  login: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 1000,
  },
  card: {
    type: String,
    default: 0,
  },
  typeTransfer: {
    type: String,
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction',
    },
  ],
});

export default mongoose.model('User', UserModel);
