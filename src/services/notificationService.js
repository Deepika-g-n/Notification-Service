const Notification = require('../models/notification');
const sendEmail = require('../mailer');

const processNotification = async (data) => {
  try {
    await sendEmail(data);
    const notification = new Notification({
      orderId: data.orderId,
      email: data.email,
      status: 'Sent'
    });
    await notification.save();
    console.log('Notification processed and saved.');
  } catch (err) {
    console.error('Error processing notification:', err);
  }
};

module.exports = processNotification;
