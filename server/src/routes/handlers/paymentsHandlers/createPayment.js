const { success, fail } = require('../api-utils')
const stripe = require('stripe')(process.env.STRIPE_SK);

module.exports = (req, res) => {
    const { token, item, price } = req.body

    const _price = Number(price)*100

    stripe.charges.create({
        amount: _price,
        currency: 'eur',
        description: item,
        source: token
    })
    .then(payment=> res.json(success(payment)))
    .catch(err => res.json(fail(err.message)))
}