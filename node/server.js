const express = require('express')
const app = express()

// methode get
 app.get('/', function(req, res){ 
    res.send('Salut!')
})

const server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('App listening at', host, port);
})