const csrf = require('csurf');
const express = require('express')
const router = express.Router();

const configAuth = require('../config/auth/auth')
const usersController = require('../app/controllers/auth/UsersController');

// Middlewares
const csrfProtection = csrf({ cookie: true })
router.use(csrfProtection)

// Loading form login
router.get('/login',csrfProtection,configAuth.notLoggedIn, usersController.pageLogin)

// Loading form register
router.get('/register',csrfProtection,configAuth.notLoggedIn, usersController.pageRegister)


// Login page
router.post('/login',configAuth.notLoggedIn, usersController.login)

// Regiter page
router.post('/register',configAuth.notLoggedIn, usersController.register)

// Dashboard
router.get('/dashboard',configAuth.ensureAuthenticated, usersController.dashboard);

//Logout 
router.get('/logout',configAuth.ensureAuthenticated, usersController.logout)

router.use('/', configAuth.notLoggedIn, (req, res, next) => {
    next();
})


module.exports = router;