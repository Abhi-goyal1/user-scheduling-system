// routes/availability.js
const express = require('express');
const { addAvailability, getAvailability } = require('../controllers/availabilityController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, addAvailability);
router.get('/', authMiddleware, getAvailability);

module.exports = router;

// controllers/availabilityController.js
const Availability = require('../models/Availability');

exports.addAvailability = async (req, res) => {
  const { userId, availability } = req.body;
  try {
    await Availability.insertMany(availability.map(slot => ({ ...slot, userId })));
    res.status(201).json({ message: 'Availability added' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAvailability = async (req, res) => {
  try {
    const availability = await Availability.find({ userId: req.user.id });
    res.json(availability);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
