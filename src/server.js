const express = require('express')
const app = express()
const path = require('path')
const port = 4000
const morgan= require('morgan')

//route
const route = require('./routes')
route(app);

// Morgan
app.use(morgan('combined'))
// -------------------
app.use(express.static(path.join(__dirname, 'public')));
// View engine EJS
app.set("view engine",".ejs");
app.set("views",path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})