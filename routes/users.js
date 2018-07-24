var express = require('express');
var router = express.Router();
var mongo = require('../db/utils')

var UsersDB = 

/* GET users listing. */
router.get('/',async function(req, res, next) {
  
  db = mongo.getDbConnection()
  const collection = db.collection('testando')
  await collection.insertMany([
    {name:'diogo', age:35}
  ])
  
  res.send('respond with a resource');
});

module.exports = router;
