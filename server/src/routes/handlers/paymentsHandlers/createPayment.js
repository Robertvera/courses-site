const { success, fail } = require('../api-utils')
const stripe = require('stripe')(process.env.STRIPE_SK);

module.exports = (req, res) => {
    const { body } = req

    stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        description: 'pagament de prova!',
        source: body
    })
    .then(payment=> res.json(success(payment)))
    .catch(err => res.json(fail(err.message)))
}