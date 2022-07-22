const express = require('express');
const router = express.Router();

// Middlewares
const librariesController = require('../app/controllers/libraries/LibrariesController')


router.get('/library-detail', librariesController.libraryDetail)

// library[GET]:Kỹ năng, lộ trình, giao tiếp, chứng chỉ, học sinh
router.get('/', librariesController.library)



module.exports = router;