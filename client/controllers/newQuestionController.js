myApp.controller('newQuestionController',function(questionFactory,userFactory,$location,$routeParams){
  console.log('routeParams',$routeParams);
  var self = this
  self.activeUser;
  var getActiveUser = function(){
    userFactory.getActiveUser(function(data){
      if (!data) {
        $location.url('/index')
      }
      self.activeUser = data
    })
  };
  getActiveUser()
  self.create = function(){
    var self = this
    console.log('NQC', self);
    console.log('activeUser', self.activeUser.name);
    var new_question = {name: self.activeUser.name, text: self.name, description: self.description}
    console.log('NEW POLL',new_question);
    questionFactory.create(new_question,function(response_from_server){
      console.log("response_from_server ",response_from_server);
      $location.url('/')
    })
    self = ''
  }
})
