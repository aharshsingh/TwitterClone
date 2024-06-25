const registerController = require('./auth/registerController');
const loginController = require('./auth/loginController');
const logoutController = require('./auth/logoutController');
const tweetController = require('./tweetController');
const userController = require('./userController')
module.exports = { registerController, loginController, logoutController, tweetController, userController};
