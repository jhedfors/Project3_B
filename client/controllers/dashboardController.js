myApp.controller('dashboardController',function(questionFactory,userFactory,$location){
  var self = this
  self.questions = []
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
  questionFactory.index(function(data){
    self.questions = data
  })
  var index = function(){
    questionFactory.index(function(questions_from_factory){
      self.questions = questions_from_factory
    })
  }
  self.show = function(info){//called from page
    id = info
    questionFactory.show(id,function(id){
      self.current_question = info
      console.log('info',info);
      $location.url('/question/'+self.current_question)
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
