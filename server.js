const express = require('express');
const app = express();
const db = require('./db');
const notificationRoutes = require('./routes/notifications');

app.use(express.json());
app.use('/', notificationRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
