const models = require('../models');
async function deleteUser(req, res, next) {
    try {
        const user = await models.User.destroy({
            where: {
                id: req.params.userId
            }
        });
        res.status(200).json({
            user
        });
    } catch (error) {
        next(error);
    }
}
module.exports = deleteUser;
