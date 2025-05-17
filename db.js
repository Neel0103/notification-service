const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE notifications (id INTEGER PRIMARY KEY AUTOINCREMENT, userId TEXT, type TEXT, message TEXT, status TEXT DEFAULT 'pending')");
});

module.exports = db;
