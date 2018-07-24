var utilsBD = require('./utils')



exports.createUser = async function(name,age){
    var db = utilsBD.getDbConnection()
    const collection = db.collection('testando')
    await collection.insertMany([
      {name: name, age: age}
    ])
    console.log('usuario criado com sucesso')


}
