const express = require('express');
const router = express.Router();
const {
  getAllTransactions,
  createTransaction
} = require('../controllers/transactionsController');

router.get('/', getAllTransactions);
router.post('/', createTransaction);

module.exports = router;
