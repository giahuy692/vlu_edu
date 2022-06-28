const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const morgan= require('morgan')
// express-ejs-layouts
var expressLayouts = require('express-ejs-layouts');

// View engine setup
app.set("views",path.join(__dirname, 'resources', 'views'));

// View engine EJS
app.set("view engine",".ejs");
app.use(expressLayouts);
//Use express-ejs-layout
app.set('layout', 'layout.ejs');



// database
const database = require('./config/database')
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