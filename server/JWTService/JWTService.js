const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config'); // Make sure to destructure JWT_SECRET if it's exported as part of an object

class JwtService {
    static sign(payload, expiry = '1h', secret = JWT_SECRET) {
        return jwt.sign(payload, secret, { expiresIn: expiry });
    }
    static verify(token, secret = JWT_SECRET) {
        return jwt.verify(token, secret);
    }
}

module.exports = JwtService;
