// Request .env the moment it builds and run config on it (require is an older version of import, form node.js)
require('dotenv').config()
// Import stripe method and attach the secret key ot it
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// The event is the request and the response; when the enet is saved, a payment intent to stripe will be made
exports.handler = async event => {
  try {
    // The value is incents, so it has no decimals
    const { amount } = JSON.parse(event.body)
    // Create a payment intent using stripe's own method
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'eur',
      payment_method_types: ['card'],
    })
    // Return succes status and the payment data if it works
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    }
  } catch (error) {
    // Console log error if it doesn't work
    console.log({ error })
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    }
  }
}
