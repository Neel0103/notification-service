const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /notifications
router.post('/notifications', (req, res) => {
  const { userId, type, message } = req.body;
  db.run(
    `INSERT INTO notifications (userId, type, message) VALUES (?, ?, ?)`,
    [userId, type, message],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
});

// GET /users/:id/notifications
router.get('/users/:id/notifications', (req, res) => {
  const userId = req.params.id;
  db.all(`SELECT * FROM notifications WHERE userId = ?`, [userId], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ notifications: rows });
  });
});

module.exports = router;
