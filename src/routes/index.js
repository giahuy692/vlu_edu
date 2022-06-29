const siteRouter = require('./site')
const usersRouter = require('./users')

function route(app){
    app.use('/user', usersRouter)
    app.use('/',siteRouter)
}

module.exports = route