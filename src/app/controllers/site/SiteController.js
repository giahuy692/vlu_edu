const UserModels = require('../../models/users')

class SiteController {
    home(req, res, next){
        UserModels.find( )
        .then((user) => {
            res.render('pages/index',{
                title: 'Cổng thông tin đào tạo',
                user: user,
            });
        }).catch(next)

    }
}

module.exports = new SiteController();