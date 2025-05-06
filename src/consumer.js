// consumer.js
const amqp = require('amqplib');
const processNotification = require('./services/notificationService');

async function startConsumer() {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    const queue = process.env.QUEUE_NAME || 'notifications';

    await channel.assertQueue(queue, { durable: true });

    console.log(`📥 Listening to queue: ${queue}`);

    channel.consume(queue, async (msg) => {
      if (msg !== null) {
        const data = JSON.parse(msg.content.toString());
        console.log('📨 Message received:', data);

        try {
          await processNotification(data); // Your main logic
          channel.ack(msg); // Acknowledge message on success
        } catch (err) {
          console.error('❌ Error processing message:', err);
          // optionally: channel.nack(msg); for requeue
        }
      }
    });
  } catch (err) {
    console.error('❌ RabbitMQ connection error:', err);
  }
}

module.exports = startConsumer;
