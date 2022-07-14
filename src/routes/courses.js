const express = require('express');
const router = express.Router();

// Middlewares
const coursesController = require('../app/controllers/courses/CoursesController')


// community: cộng đồng

// scholarship: học bổng

// induct

// fees:Kỹ năng, lộ trình, giao tiếp, chứng chỉ, học sinh
router.get('/', coursesController.course)



module.exports = router;