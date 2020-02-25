const sgMail = require('@sendgrid/mail');
const models = require('../models');
async function post(req, res, next) {
    try {
        const users = await models.User.create(req.body)

        // using Twilio SendGrid's v3 Node.js Library
        // https://github.com/sendgrid/sendgrid-nodejs

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: 'nagaraj.m@westagilelabs.com',
            from: 'nagaraj.m@westagilelabs.com',
            subject: 'Sending with Twilio SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };  
        (async () => {
            try {
                await sgMail.send(msg);
            } catch (err) {
                console.error(err.toString());
            }
        })();
        res.status(200).json({
            users
        });
    } catch (error) {
        res.status(404);
        next(error);
    }
}
module.exports = post;