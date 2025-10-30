const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    week: 3,
    totalWeeks: 12,
    nextPayout: { name: 'Diana', amount: 1000000 },
    userBalance: 150000,
    groupTotal: 12000000
  });
});

module.exports = router;
