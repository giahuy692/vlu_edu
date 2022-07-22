const UserModels = require('../../models/users')

class LibrariesController {
    library(req,res, next){
        res.render('pages/notLoggedIn/library',{
            title: 'THƯ VIỆN KHÓA HỌC'
        })
    }

    libraryDetail(req, res, next) {
        res.render('pages/notLoggedIn/details/library', {
            title: 'CHI TIẾT KHÓA HỌC'
        })
    }
}

module.exports = new LibrariesController();