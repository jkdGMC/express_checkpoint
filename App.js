const express = require('express')

const App = express()

//Adding template engine pug
App.set('views', './views')
App.set('view engine', 'pug')

App.use(timeControl)

// Routes
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
    response.end('404 NOT FOUND !')
})

//Time Controller middleware
function timeControl(request,response,next){

    let time = new Date()

    if(time.getDay() !== 0 && time.getDay() != 6){
        if (time.getHours() > 9 && time.getHours() < 17 )
            next()
        else {
            response.end("L'application est fermée !")
            console.log("L'application est down !")
        }
    }
}

//Server listening port
App.listen(3000, () => {
    console.log('Server running on port 3000 ...')
})
