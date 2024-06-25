const CustomErrorHandler = require("../../customErrorHandler/customErrorHandler");
const AccessToken = require('../../models/JWT');
const logoutController = {
    async logout(req,res,next){
        const token = req.body.jwtToken;
        if (!token){
            return next(CustomErrorHandler.notAuthorized('Invaild access token'))
        }
        try {
            const accessToken = await AccessToken.findOneAndDelete({ token });
            if (!accessToken) {
                return next(CustomErrorHandler.notAuthorized('Invalid token'));
            }
        } catch (err) {
            return next(new Error('Something went wrong, ' + err.message));
        }
        res.json({ message: 'Successfully logged Out' });
    }
}

module.exports = logoutController