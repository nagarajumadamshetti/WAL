const models = require('../models');
async function updateUser (req, res, next) {
    try {
        const user = await models.User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        
    } catch (error) {
        next(error)
    }
}
module.exports=updateUser;