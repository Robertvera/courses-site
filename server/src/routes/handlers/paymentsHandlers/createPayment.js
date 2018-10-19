const { success, fail } = require('../api-utils')
const stripe = require('stripe')('sk_test_lhxetJ6OjeTXnyaWPXHm2LvW');

module.exports = (req, res) => {
    const { body: { token }} = req

    stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        description: 'pagament de prova!',
        source: token
    })
    .then(payment=> res.json(success(payment)))
    .catch(err => res.json(fail(err.message)))
}