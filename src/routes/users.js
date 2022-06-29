const express = require('express')
const router = express.Router();


const usersController = require('../app/controllers/auth/UsersController')


// Login page
router.post('/login', usersController.login)

// Regiter page
router.post('/register', usersController.register)

module.exports = router;