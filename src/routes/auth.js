const express = require('express');
const router = express.Router();


// Controller File
const authController = require('../app/controllers/auth/AuthController')

// Login page
router.get('/login', authController.login)

// Regiter page
router.get('/register', authController.register)


module.exports = router;