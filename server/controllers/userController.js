const Joi = require('joi');
const multer = require('multer');
const path = require('path');
const CustomErrorHandler = require('../customErrorHandler/customErrorHandler');
const Userinfo = require('../models/user');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});

const handleMultipartData = multer({ storage, limits: { fileSize: 1000000 * 5 } }).fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'coverImage', maxCount: 1 }
]);

const userController = {
    async profileUpdate(req, res, next) {
        handleMultipartData(req, res, async (err) => {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }

            const profileSchema = Joi.object({
                bio: Joi.string()
            });

            const { error } = profileSchema.validate(req.body);
            if (error) {
                return next(error);
            }

            const profileImagePath = req.files['profileImage'] ? req.files['profileImage'][0].path : null;
            const coverImagePath = req.files['coverImage'] ? req.files['coverImage'][0].path : null;
            const { bio } = req.body;
            // console.log(profileImagePath);

            const userinfo = { 
                bio,
                profileImage : profileImagePath,
                coverImage : coverImagePath
            }
            try {
                const updatedUser = await Userinfo.findOneAndUpdate({_id : req.params.userID},userinfo, {new : true});
                if (!updatedUser) {
                    return next(CustomErrorHandler.notFound('User not found'));
                }
                res.send("Profile updated.");
            } catch (error) {
                return next(error);
            }
        });
    },

    async showUserProfile(req,res,next) {
        let document;
        let result = {};
        let userID = req.params.userID;
        console.log(userID);
        try {
            document = await Userinfo.findOne({ _id : userID });
            if(!document){
                return next(CustomErrorHandler.notFound('User not found'));
            }
            let followerCount = document.followers.length;
            let followingCount = document.following.length;
            result = {
                userName : document.userName,
                bio : document.bio,
                profileImage : document.profileImage,
                coverImage : document.coverImage,
                followerCount,
                followingCount
            }
            res.json({result});
        } catch (error) {
            return next(error);
        }
    },

    async showUserFeed(req,res,next) {
        let document;
        let itrDoc;
        let result = [];
        let userID = req.params.userID;
        try {
            document = await Userinfo.findOne({ _id : userID });
            for(let i = 0; i < document.following.length; i++){
                itrDoc = await tweet.find({userID : document.following[i]}).limits(5);
                result = [...result, ...itrDoc];
            }
            result.sort((a, b) => b.postDate - a.postDate);
            console.log(result);
            res.json({result});
        } catch (error) {
            return next(error);
        }
    }

};

module.exports = userController;
