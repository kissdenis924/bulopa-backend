const Transaction = require('../models/Transaction');

exports.getAllTransactions = async (req, res) => {
  try {
    const txns = await Transaction.find();
    res.json(txns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const txn = new Transaction(req.body);
    await txn.save();
    res.status(201).json(txn);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
