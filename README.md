# 📬 Notification Service with RabbitMQ

A simple Notification Microservice built using **Node.js**, **Express**, **SQLite**, and **RabbitMQ**.  
Supports queuing and processing notifications via a background worker.

---

## 🔧 Features

- Send notifications (Email / SMS / In-App) via a REST API.
- Process notifications asynchronously using RabbitMQ.
- Store notifications in an in-memory SQLite database.
- View all notifications per user.

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Queue:** RabbitMQ (via amqplib)
- **Database:** SQLite (in-memory)
- **Architecture:** Producer-Consumer pattern

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

- Node.js and npm
- RabbitMQ server running locally (`amqp://localhost`)
  - You can use Docker:
    ```bash
    docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
    ```

---

### 2️⃣ Install Dependencies

```bash
npm install express sqlite3 amqplib
