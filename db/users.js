var utilsBD = require('./utils')

var db = utilsBD.getDbConnection

db.createCollecction('users', function(err, collection){

    if(err) console.log('Erro ao criar collection')
        console.log(collection)
})