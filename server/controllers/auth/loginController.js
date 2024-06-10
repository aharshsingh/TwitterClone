const Joi = require('joi');
const customErrorHandler = require('../../customErrorHandler/customErrorHandler')
const bcrypt = require('bcrypt');
const JwtService = require('../../JWTService/JWTService');
const User = require('../../models/user');

const loginController = {
    async login(req,res,next){
        //validation
        const loginSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,16}$')).required()
        });
        //if the entry of the email or password does not match to the given condtitons in the schema then there will be a validation error
        const { error } = loginSchema.validate(req.body);
        if(error){
            return next(error);
        }
        try {
            const user = await User.findOne({ email: req.body.email });
            if(!user)
                return next(customErrorHandler.wrongCredentials('Username or password is wrong'))
            //compare the password
            const match = await bcrypt.compare(req.body.password, user.password)
            if(!match){
                return next(customErrorHandler.wrongCredentials('Username or password is wrong'))
            }
            //token
            const access_token = JwtService.sign({ _id: user._id });
            await access_token.save();
            res.json({ access_token });
        } catch (err) {
            return next(err);
        }
    }
}

module.exports = loginController;