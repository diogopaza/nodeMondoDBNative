var utilsBD = require('./utils')



exports.createUser = async function(name,age){
    var db = utilsBD.getDbConnection()
    collection = db.collection('testando')
    await collection.insertMany([
      {name: name, age: age}
    ])
    console.log('usuario criado com sucesso')


}

exports.getUsers = async function(collection){

    var db = utilsBD.getDbConnection()
    console.log(db)
    
    collection = db.collection('testando')
    myDocs = await  collection.find({}).toArray()
    console.log(myDocs)
    
}


