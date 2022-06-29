const UserModel = require('../../models/users');
const bcrypt = require('bcryptjs'); //Login

class UsersController{
    login(req, res, next){
        res.send('Loign');
    }

    register(req, res, next) {
        console.log(req.body);

        const {name, email, phone, password, confirmPassword} = req.body;

        let errors = [];

        //check require fields
        if(!name || !email || !phone|| !password || !confirmPassword){
            errors.push({msg: 'Please fill in all fields'});
        }

        // check passwords match
        if(password !== confirmPassword){
            errors.push({ msg: 'password do not match'});
        }

        if(password.length < 6 ) {
            errors.push({ msg: 'Password should be at least 6 characters'});
        }

        console.log(errors.length)

        if(errors.length > 0 ) {
            res.render('pages/index', {
                errors:errors,
                fullname:name,
                email:email,
                phone:phone,
                password:password,
                confirmPassword:confirmPassword,
                title: 'Cổng thông tin đào tạo',
            })
            
        } else {
            // Validation passed
            UserModel.findOne({ email:email})
            .then(user => {
                if(user){
                    //User exists
                    errors.push({msg: 'Email is already registered'});
                    res.render('pages/index', {
                        errors:errors,
                        fullname:name,
                        email:email,
                        phone:phone,
                        password:password,
                        confirmPassword:confirmPassword,
                        title: 'Cổng thông tin đào tạo',
                    });
                } else {
                    const newUser = new UserModel({
                        fullname:name,
                        email:email,
                        phone:phone,
                        password:password,
                    });

                    // Hash Password
                    bcrypt.genSalt(10,(err, salt) => 
                        bcrypt.hash(newUser.password, salt, (err,hash) => {
                            if(err) throw err;
                            //Set password to hashed
                            newUser.password = hash;
                            // Save user
                            newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'You are now register and can login')
                                res.redirect('/');
                            })
                            .catch(err => console.log(err));
                    }))
                }
            });
        }
    }
}

module.exports = new UsersController()