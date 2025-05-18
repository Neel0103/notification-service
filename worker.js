// worker/consumer.js
const amqp = require('amqplib');
const db = require('../db');

const queueName = 'notificationQueue';

async function startWorker() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName);

  console.log("Worker waiting for messages...");

  channel.consume(queueName, msg => {
    if (msg !== null) {
      const data = JSON.parse(msg.content.toString());
      console.log("Processing:", data);

      db.run(
        `INSERT INTO notifications (userId, type, message) VALUES (?, ?, ?)`,
        [data.userId, data.type, data.message],
        err => {
          if (err) console.error("DB Insert Error:", err.message);
        }
      );

      channel.ack(msg);
    }
  });
}

startWorker();
