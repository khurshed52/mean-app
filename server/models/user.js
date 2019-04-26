const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    designation: String,
    email:String,
    phone:Number,
  }, {collection: 'userdata'});

  module.exports = mongoose.model('user', userSchema);