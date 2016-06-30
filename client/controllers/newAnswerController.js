myApp.controller('newAnswerController',function(questionFactory,userFactory,$location){
  var self = this
  self.activeUser;
  self.current_question;
  var getActiveUser = function(){
    userFactory.getActiveUser(function(data){
      if (!data) {
        $location.url('/index')
      }
      self.activeUser = data
    })
  };
  getActiveUser()
  var getCurrentQuestion = function(){
    questionFactory.getCurrentQuestion(function(question_from_factory){
      self.current_question = question_from_factory
    })
  }
  getCurrentQuestion()
  self.show = function(info){//called from page
    id = info
    questionFactory.show(id,function(id){
      self.current_question = info
      console.log('info',info);
      $location.url('/question/'+self.current_question)
    })
  }
  self.create = function(){
    var self = this
    var new_answer = {question:self.current_question._id,name: self.activeUser.name, answer: self.answer, details: self.details, likes: 0}
    questionFactory.create_answer(new_answer,function(response_from_server){
      console.log("response_from_server ",response_from_server);
      $location.url('/')

    })
    self = ''
  }
})
