const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const morgan= require('morgan');
const passport = require('passport')

// register
const flash =require('connect-flash');
// login
const session = require('express-session');
// Passport config
require('./config/passport/passport')(passport) ;

// CSRF Cookie parsing
const cookieParser = require('cookie-parser'); 
app.use(cookieParser())

// express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');


// View engine EJS
app.use(expressLayouts);
app.set("view engine",".ejs");
//Use express-ejs-layout
app.set('layout', 'layouts/notLoggedIn.ejs');

// View engine setup
app.set("views",path.join(__dirname, 'resources', 'views'));

// BodyParser
app.use(express.urlencoded({extended: false})); // register - login

// Express Session (login)
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

//Passport middleware (login)
app.use(passport.initialize());
app.use(passport.session());

//Connect flash (register)
app.use(flash());

//Global Vars (register)
app.use((req,res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.localuser = req.user;
  next();
});

// database
const database = require('./config/database');
database.connect();

//route
const route = require('./routes');
route(app);

// Morgan
app.use(morgan('combined'));
// -------------------
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});