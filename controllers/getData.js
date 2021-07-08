let multer = require('multer');
let upload = multer();
const mongoose = require('mongoose');
//change the url to reach your mongoDB
//mongoose.connect('mongodb://user:password.mlab.com:53960/DBnamee');


const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const User = new Schema({

 name: String,
 email: String,
 birthdate: String
});
const UserModel = mongoose.model('Users', User);

module.exports = function(app) {
app.get('/users', function(req, res){
UserModel.find({}, function(err, data){
 if(err){ res.json(err);}
  res.json(data);

})
});

app.post('/users', upload.fields([]), function(req, res){
  let formData = req.body;
   console.log(formData);
   var NewUser = UserModel({
    name: formData.username,
    email: formData.email,
    birthdate: formData.birthdate
   }).save(function(err){
    if(err){ res.json(err); }
    res.json(req.body);

   })

});
app.delete('/users/:userId', function(req, res){
  console.log(req.params.userId)
  UserModel.find({_id: req.params.userId}).remove(function(err, data){
    if(err){ res.json(err); }
    res.json(data);
  });

});
};
