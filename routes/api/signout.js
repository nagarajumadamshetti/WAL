const models = require('../../models');
const jwt = require('jsonwebtoken');
async function signOut(req, res, next) {
    try {
        const users = await models.User.update({
            'jwtToken': null
        }, {
            where: {
                email: req.body.email
            }
        });
        if (users) {
            res.status(200).json({
                message: " logged out successfully"
            });
        }
        else {
            res.status(200).json({
                message: " user not logged in"
            });
        }
    } catch (error) {
        next(error);
    }
}
module.exports = signOut;