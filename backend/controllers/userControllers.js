const User = require('../models/user');
const ClaimHistory = require('../models/claimHistory');

// Add a new user
exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({message:"error in createUser backend", error: err.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message:"error in getUsers backend",error: err.message });
  }
};

// Claim random points for a user
exports.claimPoints = async (req, res) => {
  try {
    const userId = req.params.userId;
    const points = Math.floor(Math.random() * 10) + 1;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message:"can not find the user in claimPoints backend",error: "User not found" });

    user.totalPoints += points;
    await user.save();

    const history = new ClaimHistory({ userId, pointsClaimed: points });
    await history.save();

    res.json({ message: "Points claimed", points, user });
  } catch (err) {
    res.status(500).json({message:"error in getUsers backend", error: err.message });
  }
};

// Get leaderboard sorted by totalPoints
exports.getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });

    const leaderboard = users.map((user, index) => ({
      rank: index + 1,
      name: user.name,
      totalPoints: user.totalPoints
    }));

    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ message:"error in getLeaderboard backend",error: err.message });
  }
};

// Get claim history for a user
exports.getHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const history = await ClaimHistory.find({ userId }).sort({ claimedAt: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ message:"error in getHistory backend", error: err.message });
  }
};
