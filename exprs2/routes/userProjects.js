const models = require('../models');
async function userProjects(req, res, next) {
    console.log("started");
    try {

        const users = await models.User.findAll({
            include: [{
                model: models.Project, // will create a left join
                where:{id: req.params.userId }
            }]
        });

        res.status(200).json({
            users
        });
    } catch (error) {
        next(error);
    }
}
module.exports = userProjects;