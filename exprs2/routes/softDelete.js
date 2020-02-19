const models = require('../models');
async function softDelete(req, res, next) {
    try {
        const softDelete = await models.User.update(
            {
                'softDelete': true
            },
            {
                where: {
                    id: req.params.userId
                }
            });
        res.status(200).json({
            softDelete
        });
    } catch (error) {
        next(error);
    }
}
module.exports = softDelete;