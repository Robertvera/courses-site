const { success, fail } = require('../api-utils')
const nodemailer = require('nodemailer')

module.exports = (req, res) => {

    const { body: { to, content } } = req
    const {subject, html} = content

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_ADDRESS,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
        }
    });

    const mailOptions = {
        from: process.env.GMAIL_ADDRESS_FROM,
        to: to,
        subject: subject,
        html: html,
        auth : {
            user: process.env.GMAIL_ADDRESS,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            accessToken: process.env.GMAIL_ACCESS_TOKEN,
            expires: Date.now()
        }
    }

    transporter.sendMail(mailOptions)
    .then(mail=> res.json(success(mail)))
    .catch(err => res.json(fail(err.message)))
}
