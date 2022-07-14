module.exports = {
    ensureAuthenticated: function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'Please log in to view this resource');
        req.session.oldUrl = req.url;
        res.redirect('/user/login');
    },
    notLoggedIn: function notLoggedIn(req,res,next){
        if(!req.isAuthenticated()){
            return next();
        }
        res.redirect('/user/login');
    },

}