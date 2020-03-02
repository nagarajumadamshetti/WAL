const models = require('../../models');
const jwt = require('jsonwebtoken');
async function verifyToken(req, res, next) {
    try {
        const token = req.headers['access-token'];
        let verified = jwt.verify(token, 'keyboard cat 4 ever');
        if (verified) {
            return true;
        }
        else {
            return false;
        }
    } catch (error) {
        next(error);
    }
}
module.exports = verifyToken;