const models = require('../models');
async function getUsers(req, res, next) {
    try {
        const users = await models.User.findAll({
            where: {
            }
        });
        res.status(200).json({
            users
        });
    } catch (error) {
        next(error);
    }
}
async function getUserDetails(req, res, next) {
    try {
        const users = await models.User.findOne({
            where: {
                email: req.params.emailId,
                password: req.params.passId,
            }
        })
        res.status(200).json({
            users
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getUsers,
    getUserDetails,
};