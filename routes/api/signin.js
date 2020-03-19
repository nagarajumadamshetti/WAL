const models = require('../../models');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifytoken');

async function signIn(req, res, next) {
    try {
        const token = req.headers['access-token'];
        const users = await models.User.findOne({
            where: {
                email: req.body.email
            }
        });
        // if()
        // console.log(users.password)
        if(token)
        const match = passwordHash.verify(req.body.password, users.password);

        
        if (match) {
            //login
            let token = await jwt.sign({ email: users.email }, 'keyboard cat 4 ever', { expiresIn: '1h' }); // Signing the token
            await users.update({
                jwtToken: token
            });
            // users.jwtToken=token;
            res.status(200).json({
                message: "signin successful",
            });
        }
        else {
            res.status(200).json({
                message: "signin Unsuccessful"
            });
        }
        //...
    } catch (error) {
        next(error);
    }
}
module.exports = signIn;