// server.js
const express = require('express');
const amqp = require('amqplib');
const app = express();

app.use(express.json());

let channel, connection;
const queueName = 'notificationQueue';

async function connectQueue() {
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    await channel.assertQueue(queueName);
    console.log("Connected to RabbitMQ");
  } catch (error) {
    console.error("RabbitMQ connection error:", error);
  }
}
connectQueue();

app.post('/notifications', async (req, res) => {
  const { userId, type, message } = req.body;
  const payload = { userId, type, message };
  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(payload)));
  res.status(202).send({ status: 'queued' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Producer server running on port ${PORT}`);
});

