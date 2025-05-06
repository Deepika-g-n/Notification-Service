require('dotenv').config();
const express = require('express');
const startConsumer = require('./consumer');
const connectDB = require('./config/db');
const Notification = require('./models/notification');
const processNotification = require('./services/notificationService');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => res.send('Notification Service is running!'));

app.listen(PORT, () => {
  console.log(`Notification service running on port ${PORT}`);
  startConsumer();
});


app.use(express.json());

app.post('/notify', async (req, res) => {
  try {
    await processNotification(req.body);
    res.status(200).json({ message: 'Notification sent' });
  } catch (err) {
    res.status(500).json({ error: 'Notification failed' });
  }
});

app.get('/logs/:userId', async (req, res) => {
    try {
      const logs = await Notification.find({ userId: req.params.userId });
      res.json(logs);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch logs' });
    }
  });
  
