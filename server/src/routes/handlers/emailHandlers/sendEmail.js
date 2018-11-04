const { success, fail } = require('../api-utils')
const nodemailer = require('nodemailer')

module.exports = (req, res) => {

    const { body: { to, subject, html } } = req

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'robert.vera.roige@gmail.com',
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            accessToken: process.env.GMAIL_ACCESS_TOKEN
        }
    });

    const mailOptions = {
        from: 'Robert <robert.vera.roige@gmail.com>',
        to: to,
        subject: subject,
        html: html
    }

    transporter.sendMail(mailOptions)
    .then(mail=> res.json(success(mail)))
    .catch(err => res.json(fail(err.message)))
}
