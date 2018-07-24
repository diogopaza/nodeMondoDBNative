var MongoClient = require('mongodb').MongoClient

var db;

exports.connect = async function(callback){

    await MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, function(err, dbConnection){
    if (err) console.log('erro no instanciar mongo')
        db = dbConnection.db('cursomongonative')
        callback(err, dbConnection)
    })
}


   



exports.getDbConnection = function(){
    return db
}