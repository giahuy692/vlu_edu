class AuthController{
    login(req,res,next){
        res.send('Loign');
    }

    register(req,res,next) {
        res.send('Register');
    }
}


module.exports = new AuthController;