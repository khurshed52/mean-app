const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarySchema = new Schema({
    _id:String,
    name: String,
    salary: Number
  },{collection: 'salary'});

  module.exports = mongoose.model('salary', salarySchema);