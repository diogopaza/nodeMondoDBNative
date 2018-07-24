var utilsBD = require('./utils')



exports.createUser = async function(name,age){
    var db = utilsBD.getDbConnection()
    collection = db.collection('testando')
    await collection.insertMany([
      {name: name, age: age}
    ])
    console.log('usuario criado com sucesso')


}

exports.getUsers = async function(myCollection, callback){

    var db = utilsBD.getDbConnection()
   
    
    collection = await db.collection(myCollection)
    await  collection.find({}).toArray(callback)
    
    
}


