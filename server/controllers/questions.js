var Question = mongoose.model('Question')
module.exports = (function(){
  return {
    index: function(request, response){
      Question.find({}, function(err,results){
        response.json(results)
      })
    },
    create: function(request, response){
      console.log('server user create', request);
      var new_question = new Question(request.body)
      new_question.save(function(err){
        if(err){
          console.log('server controller', err);
          response.json(err)
        }
        else {
          console.log('server controller', response);
          response.json({'status':true})
        }
      })
    },
    add_answer: function(request, response){
      console.log('=========server user add_answer============', request.body);

      Question.findOne({_id:request.body.question}, function(err,results){
        console.log('results', results);
        results.answers.push(request.body)
        results.save()
        response.json(results)
      })
    },
    show: function(request, response){
      Question.findOne({_id:request.params.id}, function(err,results){
        response.json(results)
      })
    },
    like: function(request,response){
      Question.findOne({_id:request.params.question_id}, function(err,results){
        console.log('results', results);

        for (var i = 0; i < results.answers.length; i++) {
          console.log(results.answers[i]);
          if (results.answers[i]._id == request.params.answer_id) {
            answer = results.answers[i]
            likes = answer.likes +=1
          }
        }


        results.save()
        response.json(results)
      })
    }

  }
})()
