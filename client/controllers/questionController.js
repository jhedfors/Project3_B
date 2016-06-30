myApp.controller('questionController',function(questionFactory,userFactory,$location,$routeParams){
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

  console.log('routeParams',$routeParams);
  console.log(self.current_question);
  self.like = function(answer){
    console.log('like', self.current_question._id, answer._id);
    questionFactory.like(self.current_question._id,answer._id,function(){
      questionFactory.show(self.current_question._id,function(data_from_factory){
        console.log(data_from_factory);
        self.current_question = data_from_factory
      })
    })
  }
  self.answer = function(info){//called from page
    id = info
    questionFactory.show(id,function(id){
      self.current_question = info
      console.log('info',info);
      $location.url('/question/'+self.current_question+'/new_answer')
    })
  }
})
