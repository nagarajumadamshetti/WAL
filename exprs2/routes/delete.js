const models = require('../models');
async function deleteUser(req, res, next) {
    try {
        const deletedUser = await models.User.destroy({
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            deletedUser
        })
    } catch (error) {
        next(error);
    }

}
module.exports = deleteUser;