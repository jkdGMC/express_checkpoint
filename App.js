const express = require('express')

const App = express()

App.set('views', './views')
App.set('view engine', 'pug')

App.get('/', (request,response) => {
    response.render('index')
})

App.get('/services', (request,response) => {
    response.render('services')
})

App.get('/contact', (request,response) => {
    response.render('contact')
})

App.get('*', (request,response) => {
    response.end('NOT FOUND !')
})

App.listen(3000, () => {
    console.log('Server running on port 3000 ...')
})
