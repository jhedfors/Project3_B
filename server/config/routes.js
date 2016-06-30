var user = require('../controllers/users.js')
var question = require('../controllers/questions.js')


module.exports = function(){
  app.get('/users',user.index)
  app.get('/user/:name',user.show)
  app.post('/user', function(req, res){
    console.log('ROUTEs', req);
    user.create(req,res)
  })
  app.get('/question/:id',question.show)
  app.get('/questions',question.index)
  app.post('/question',question.create)
  app.post('/answer',question.add_answer)

  app.post('/like/:question_id/:answer_id',question.like)

}
