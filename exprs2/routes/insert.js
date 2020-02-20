const models = require('../models');
async function createUser (req, res, next) {
    try {
        const users = await models.User.create(req.body,{'softDelete':false})
        res.status(200).json({
            users
        })
    } catch (error) {
        res.status(404);
        next(error);
    }
}
module.exports=createUser;