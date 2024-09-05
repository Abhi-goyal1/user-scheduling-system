// routes/sessions.js
const express = require('express');
const { createSession, getSessions } = require('../controllers/sessionController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createSession);
router.get('/', authMiddleware, getSessions);

module.exports = router;

// controllers/sessionController.js
const Session = require('../models/Session');

exports.createSession = async (req, res) => {
  const { participants, day, startTime, endTime, type } = req.body;
  try {
    const newSession = new Session({ participants, day, startTime, endTime, type });
    await newSession.save();
    res.status(201).json({ message: 'Session created' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ participants: req.user.id });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
