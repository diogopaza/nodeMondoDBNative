var express = require('express');
var router = express.Router();
var mongo = require('../db/utils')
var user = require('../db/users')



/* GET users listing. */
router.get('/',async function(req, res, next) {
  
  
  
   user.getUsers('testando', function(err, result){
    if (err) console.log('deu erro ')
     
      res.render('users', {users: result} )
  })
  
 
  
  
});

router.post('/',async function(req, res, next) {
  
  user.createUser(req.body.nome,req.body.idade)  
  res.send('to no user por post');
});

module.exports = router;
