const express = require('express');
const router = express.Router();
const {
  createUser,
  getUsers,
  claimPoints,
  getLeaderboard,
  getHistory
} = require('../controllers/userControllers');

router.post('/newusers', createUser);
router.get('/users', getUsers);
router.post('/claim/:userId', claimPoints);
router.get('/leaderboard', getLeaderboard);
router.get('/history/:userId', getHistory);

module.exports = router;
