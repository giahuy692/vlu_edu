const express = require('express')
const router = express.Router();


const usersController = require('../app/controllers/auth/UsersController')

const { ensureAuthenticated } = require('../config/auth/auth');



// Login page
router.post('/login', usersController.login)

// Regiter page
router.post('/register', usersController.register)

// Dashboard
router.get('/dashboard',ensureAuthenticated, usersController.dashboard);

//Logout 
router.get('/logout', usersController.logout)

module.exports = router;