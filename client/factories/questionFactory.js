myApp.factory('questionFactory', function($http,$location){
  var factory = {}
  var questions = []
  var current_question;
  factory.index = function(callback){
    $http.get('/questions').success(function(questions_from_db){
      callback(questions_from_db)
      questions = questions_from_db
    })
  }
  factory.getCurrentQuestion = function(callback){
    callback(current_question)
  }
  factory.create = function(data, callback){
    $http.post('/question', data).success(function(response_from_server){
      if(!data.status){
        callback(response_from_server)
      }
      else {
        callback(response_from_server)
      }
    })
  }
  factory.create_answer = function(data, callback){
    $http.post('/answer', data).success(function(response_from_server){
      if(!data.status){
        callback(response_from_server)
      }
      else {
        callback(response_from_server)
      }
    })
  }
  factory.show = function(id,callback){
    $http.get("/question/"+ id).success(function(data_from_db){
      current_question = data_from_db
      callback(data_from_db)
    })
  }
  factory.like = function(question_id,answer_id,callback){
    $http.post('/like/'+question_id+'/'+answer_id).success(function(data){
      callback()
    })
  }
  return factory
})
