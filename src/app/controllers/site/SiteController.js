const UserModels = require('../../models/users')

class SiteController {
    home(req, res, next){
        UserModels.find( )
        .then((user) => {
            res.render('pages/notLoggedIn/index',{
                title: 'Jihui language',
                user: user,
            });
        }).catch(next)

    }

    method(req, res, next){
        res.render('pages/notLoggedIn/method', {
            title: 'PHƯƠNG PHÁP HỌC TIẾNG ANH'
        })
    }

    library(req,res, next){
        res.render('pages/notLoggedIn/library',{
            title: 'THƯ VIỆN KHÓA HỌC'
        })
    }
}

module.exports = new SiteController();