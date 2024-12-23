const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'payment-service',
  brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'payment-service-group' })

const run = async () => {
  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'order', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      processPayment(message)
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}

function processPayment(message) {
  console.log('Processing payment for order:', message.value.toString())
  // Payment processing logic here
  return true
}

run().catch(console.error)