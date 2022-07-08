const csrf = require('csurf');
const express = require('express');
const router = express.Router();

// Middlewares
const csrfProtection = csrf({ cookie: true })
router.use(csrfProtection)

const configAuth = require('../config/auth/auth')
const siteController = require('../app/controllers/site/SiteController')


// community: cộng đồng

// scholarship: học bổng

// induct

// fees:Kỹ năng, lộ trình, giao tiếp, chứng chỉ, học sinh

// course[GET]:Kỹ năng, lộ trình, giao tiếp, chứng chỉ, học sinh

// way[GET]: phương pháp

// HOME[GET]
router.get('/',siteController.home)



module.exports = router;