const UserModels = require('../../models/users')

class SiteController {
    home(req, res, next){
        UserModels.find( )
        .then((user) => {
            res.render('pages/notLoggedIn/index',{
                title: 'VOCA language',
                user: user,
            });
        }).catch(next)

    }

    method(req, res, next){
        res.render('pages/notLoggedIn/method', {
            title: 'PHƯƠNG PHÁP HỌC TIẾNG ANH'
        })
    }

    instruction(req, res, next){
        res.render('pages/loggedIn/instruction', {
            title: 'PHƯƠNG PHÁP HỌC TIẾNG ANH'
        })
    }
}

module.exports = new SiteController();