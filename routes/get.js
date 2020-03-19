const models = require('../models');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
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
module.exports =getUsers;
