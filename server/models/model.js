var userSchema = mongoose.Schema({
  name:{type:String, required:true, minlength:2}
},{timestamps:true})
var user = mongoose.model('User', userSchema)

var questionSchema = mongoose.Schema({
  text:{type:String, required:true, minlength:2},
  description:{type:String, minlength:2},
  answers:[
    {name:{type:String, required:true, minlength:2},answer:{type:String, required:true, minlength:1},details:{type:String, minlength:1}, likes:Number}
  ]
},{timestamps:true})
var poll = mongoose.model('Question', questionSchema)


// new_question = {name: self.activeUser.name, text: self.name, description: self.description}
