const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    designation: String,
    email:String,
    phone:Number,
  }, {collection: 'userdata'});

  let user = mongoose.model('user', userSchema)
  //mode export here 
  module.exports = user