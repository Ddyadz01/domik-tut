import mongoose, { Schema } from 'mongoose';

const TransactionsModel = new Schema(
  {
    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    anmout: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Transaction', TransactionsModel);
