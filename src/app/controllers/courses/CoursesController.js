const UserModels = require('../../models/users')

class CoursesController {
    course(req,res, next){
        res.render('pages/notLoggedIn/course',{
            title: 'HỆ THỐNG KHÓA HỌC TIẾNG ANH'
        })
    }
}

module.exports = new CoursesController();