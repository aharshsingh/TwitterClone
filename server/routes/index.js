const express = require('express');
const { registerController, loginController, logoutController } = require('../controllers');
const router = express.Router();

router.use(express.json());


router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/logout', logoutController.logout);
module.exports = router;
