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


// method[GET]: phương pháp
router.get('/method',siteController.method)


// HOME[GET]
router.get('/',siteController.home);



module.exports = router;