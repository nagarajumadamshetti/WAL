// const sgMail = require('@sendgrid/mail');
const nodemailer = require("nodemailer");
const models = require('../../models');
const passwordHash=require('password-hash');
async function sendMail(mail) {
    let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'nagrajumadamshetti@gmail.com', // generated ethereal user
            pass: 'naga@9550' // generated ethereal password
        }
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <nagarajumadamshetti@gmail.com>', // sender address
        to: mail, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

}
async function signUp(req, res, next) {
    try {
        const hashedValue = passwordHash.generate(req.body.password);
        req.body.password = hashedValue;
        const users = await models.User.create(req.body);
        res.status(200).json({
            users,
            message: "SignUp successful"
        });
    } catch (error) {
        res.status(404);
        next(error);
    }
}
module.exports = signUp;