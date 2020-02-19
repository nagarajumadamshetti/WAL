const models = require('../models');
async function getUsers (req, res, next) {
    try {
        const users = await models.User.findAll({
            where:{
                softDelete:false
            }
        })
        res.status(200).json({
            users
        });    
    } catch (error) {
        next(error);
    }
}
async function getUserDetails(req, res, next) {
    try {
        const user = await models.User.findOne({
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            user
        });    
    } catch (error) {
        next(error);
    }
}

module.exports= {
    getUsers,
    getUserDetails,
} ;