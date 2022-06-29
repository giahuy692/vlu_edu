const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const morgan= require('morgan')
//login
const flash =require('connect-flash')
const session = require('express-session')




// express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');


// View engine EJS
app.use(expressLayouts);
app.set("view engine",".ejs");
//Use express-ejs-layout
app.set('layout', 'layouts/layout.ejs');

// View engine setup
app.set("views",path.join(__dirname, 'resources', 'views'));

// BodyParser
app.use(express.urlencoded({extended: false})); //login

// Express Session (login)
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

//Connect flash (login)
app.use(flash());

//Global Vars
app.use((req,res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// database
const database = require('./config/database');
database.connect();

//route
const route = require('./routes')
route(app);

// Morgan
app.use(morgan('combined'))
// -------------------
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})