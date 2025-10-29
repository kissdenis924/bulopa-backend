const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  type: String,
  member: String,
  recipient: String,
  amount: Number,
  week: Number,
  date: String,
  method: String,
  phone: String,
  status: String
});

module.exports = mongoose.model('Transaction', TransactionSchema);
