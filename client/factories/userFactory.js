myApp.factory('userFactory', function($http,$location){
  var self = this
  var factory = {}
  self.activeUser = '';
  factory.getActiveUser = function(callback){
    callback(self.activeUser)
  }
  factory.login = function(user,callback){
    var new_user= {name:user}
    $http.get('/user/'+user).success(function(data){
      self.activeUser = data
      if(data == null){
        $http.post('/user',new_user).success(function(data){
          self.activeUser = data
          callback(self.activeUser)
        })
      }
      else{
        callback(self.activeUser)
      }
    })
  }
  factory.logout = function(callback){
    self.activeUser = ''
    callback()
  }
  return factory
})
