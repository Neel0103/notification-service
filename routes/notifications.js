// routes/notifications.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/users/:id/notifications', (req, res) => {
  const userId = req.params.id;
  db.all(`SELECT * FROM notifications WHERE userId = ?`, [userId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ notifications: rows });
  });
});

module.exports = router;
