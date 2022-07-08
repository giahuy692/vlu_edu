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
}

module.exports = new SiteController();