# 📬 Notification Service

This is a microservice for sending email notifications. It listens to a RabbitMQ queue and processes notification messages (e.g., order confirmations).

---

## 🚀 Features

- Consumes messages from RabbitMQ queue
- Sends emails via SMTP (Mailtrap supported)
- Built with Node.js and Express
- MongoDB used for logging notifications

---

## 📦 Tech Stack

- Node.js
- Express
- RabbitMQ
- Nodemailer
- MongoDB
- dotenv
- amqplib
- (Optional) Mailtrap for email testing


---

## ⚙️ Setup Instructions

### 1. Clone the repo

``
git clone https://github.com/Deepika-g-n/notification-service.git
cd notification-service

**2.Install dependencies**
npm install

**3. Environment Variables**
Create a .env file:

# RabbitMQ
RABBITMQ_URL=amqp://<rabbitmq-host>:5672
QUEUE_NAME=notifications

# Email
EMAIL_FROM=store@example.com
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_user
SMTP_PASS=your_pass

# MongoDB
MONGODB_URI=mongodb://localhost:27017/notificationdb


**4. Running the Service**
npm start

**5.Testing the Service**
You can simulate message sending using a script or Postman to send data to the RabbitMQ queue:

{
  "email": "customer@example.com",
  "orderId": "12345"
}

**6.Email Output**
Use Mailtrap or Mailhog for local email testing.

Update .env with the correct credentials.

**7.Docker Support**
If using Docker:

docker build -t notification-service .
docker run -p 3000:3000 --env-file .env notification-service

**8.Contributing**
Fork this repo

Create your branch: git checkout -b feature-name

Commit your changes: git commit -m 'Add something'

Push to the branch: git push origin feature-name

Create a pull request

**License**
This project is licensed under the MIT License.



