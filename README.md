# Notification Service

## Description
A simple notification service built with Node.js, Express, and SQLite. Supports sending and retrieving notifications.

## Setup Instructions
1. Clone the repo:
   ```bash
   git clone <your-repo-link>
   cd notification-service
   ```
2. Install dependencies:
   ```bash
   npm install express sqlite3
   ```
3. Run the server:
   ```bash
   node server.js
   ```

## API Endpoints
- **POST /notifications**: Send a notification.
  - Body: `{ userId: string, type: 'email' | 'sms' | 'in-app', message: string }`
- **GET /users/:id/notifications**: Get all notifications for a user.

## Notes
This is an in-memory database setup. Data will be lost on server restart.
