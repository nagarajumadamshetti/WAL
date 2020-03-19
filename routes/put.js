const models = require('../models');
async function putUser(req, res, next) {
    try {
        const users = await models.User.update(req.body, {
            where: {
                id: req.params.userId
            }
        });
        res.status(200).json({
            users
        });
    } catch (error) {
        next(error);
    }
    
}
module.exports=putUser;
