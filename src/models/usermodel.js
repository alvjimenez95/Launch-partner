var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  profile: String,
  profilePic : String
});

module.exports = mongoose.model('User', userSchema);