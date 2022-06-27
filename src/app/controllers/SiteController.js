const UserModels = require('../models/users')

class SiteController {
    home(req,res, next){
        UserModels.find( {username: 'giahuy9'} )
        .then((user) => {
            res.render('index',{
                title: 'Cổng thông tin đào tạo',
                user: user,
            });
            console.log(user);
        }).catch(next)

    }
}

module.exports = new SiteController();