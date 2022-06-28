const siteRouter = require('./site')
const usersRouter = require('./users')
const authRouter = require('./auth.js')

function route(app){
    app.use('/users', usersRouter)
    app.use('/auth', authRouter)
    app.use('/',siteRouter)
}

module.exports = route