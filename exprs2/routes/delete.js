const models = require('../models');
async function deleteUser (req, res, next) {
    const deletedUser = await models.User.destroy({
        where: {
            id: req.params.userId
        }
    })
    res.status(200).json({
        deletedUser
    })
}
module.exports=deleteUser;