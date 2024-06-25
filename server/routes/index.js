const express = require('express');
const { registerController, loginController, logoutController, tweetController, userController} = require('../controllers');
const router = express.Router();

router.use(express.json());

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/verify', loginController.verify);
router.post('/logout', logoutController.logout);
router.post('/tweetpost/:userID', tweetController.tweetpost);
router.post('/profileUpdate/:userID', userController.profileUpdate);
router.get('/userTweet/:userID', tweetController.showUserTweet);
router.get('/userProfile/:userID', userController.showUserProfile);
router.get('/userFeed/:userID', userController.showUserFeed);
module.exports = router;
