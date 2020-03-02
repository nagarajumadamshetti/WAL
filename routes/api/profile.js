const models = require('../../models');
const verify = require('./verifytoken');


async function profile(req, res, next) {
  
    if (verify(token))
        res.status(200).json({
            message: "profile page"
        })
}
module.exports = profile;