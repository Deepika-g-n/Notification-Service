const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  orderId: String,
  email: String,
  status: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
