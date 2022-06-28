const express = require('express')
const router = express.Router();


const usersController = require('../app/controllers/auth/UsersController')

router.get('/', usersController.home)

module.exports = router;