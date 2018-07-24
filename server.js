var express = require('express')
var app = express()
var mongo = require('./db/utils')


var bodyParser = require('body-parser')
var cors = require('cors')
var index = require('./routes/index')
var users = require('./routes/users')

var corsOptions = {
    origin: true,
    credentials: true
}

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/public', express.static(__dirname + '/public'))
app.use('/', index)
app.use('/users', users)
var routes = require('./routes/index')


mongo.connect(function(err, db){
    if (err) console.log('erro')
        myDB = mongo.getDbConnection()
        console.log('Conectado ao mongodb')

    app.listen(3000, function(){
        console.log('ouvindo na 3000')
    })
})




module.exports = app;
