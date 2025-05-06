const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

const sendEmail = async (data) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: 'Order Confirmation',
    text: `Hi, your order ${data.orderId} has been placed successfully.`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent:', info.messageId);
  } catch (error) {
    console.error('❌ Email failed:', error.message);
  }
};

module.exports = sendEmail;
