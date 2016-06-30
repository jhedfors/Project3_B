var User = mongoose.model('User')
module.exports = (function(){
  return {
    index: function(request, response){
      User.find({}, function(err,results){
        console.log('index users', results);
        response.json(results)
      })
    },

    show: function(request, response){
      User.findOne({name:request.params.name}, function(err,results){
        console.log('findOneUser', results);
        response.json(results)
      })
    },
    create: function(request, response){
      console.log('server user create', request);
      var user = new User(request.body)
      user.save(function(err,info){
        if(err) response.json(err)
        else response.json(info)
      })
    },
  }
})()
