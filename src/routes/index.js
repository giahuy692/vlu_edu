const siteRouter = require('./site')
const usersRouter = require('./users')
const librariesRouter = require('./libraries')
const coursesRouter = require('./courses')

function route(app){
    app.use('/course', coursesRouter)
    app.use('/library', librariesRouter)
    app.use('/user', usersRouter)
    app.use('/',siteRouter)
}

module.exports = route