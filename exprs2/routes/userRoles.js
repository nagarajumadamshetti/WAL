const models = require('../models');
async function userRoles(req, res, next) {
    console.log("started");
    try {

        const users = await models.User.findAll({
            include: [{
                model: models.Role, // will create a left join
                where:{roll_id: req.params.userId }
            }]
        });

        res.status(200).json({
            users
        });
    } catch (error) {
        next(error);
    }
}
module.exports = userRoles;