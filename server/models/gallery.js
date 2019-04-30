const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    url: String,
    title: String
  }, {collection: 'albumdata'});

  module.exports = mongoose.model('album', gallerySchema);
