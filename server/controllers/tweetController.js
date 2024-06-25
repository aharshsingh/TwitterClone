const Joi = require('joi');
const Tweet = require('../models/tweet');
const multer = require('multer');
const CustomErrorHandler = require('../customErrorHandler/customErrorHandler')
const path = require('path');

const storage = multer.diskStorage({
    destination : (req,file,cb) => cb(null, 'uploads/'),
    filename : (req,file,cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.round()*1E9)}${path.extname(file.originalname)}`;
        cb(null,uniqueName)
    }
})
const handleMultipartData = multer({ storage, limits:{fileSize: 1000000*5}}).single('image');

const tweetController = {
    async tweetpost(req,res,next){
        handleMultipartData(req,res,async(err) => {
        if(err){
            return next(CustomErrorHandler.serverError(err.message));
        }

        const tweetSchema = Joi.object({
            content : Joi.string().required()
        });

        const { error } = tweetSchema.validate(req.body);
        if(error){
            return next(error);
        }

        const filePath = req.file ? req.file.path : null;
        const { content } = req.body;
        const { userID } = req.params;
        // console.log(filePath);
        const tweet = new Tweet({
            content,
            image : filePath,
            userID
        });
        let result;
        try {
            result = await tweet.save();
            res.json('Tweet posted successfully');
        } catch(err) {
                return next(err);
            }
        });
    },
    
    async showUserTweet(req,res,next) {
        const { userID } = req.params;
        console.log(userID); 
        try {
            const result = await Tweet.find({ userID: userID }) 
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = tweetController;