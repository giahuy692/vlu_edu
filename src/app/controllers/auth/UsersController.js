class UsersController{
    home(req,res,next){
        res.send('users')
    }
}


module.exports = new UsersController()