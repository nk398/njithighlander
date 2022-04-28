const mongoose = require('mongoose');

const StarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This fild is required.'
  },
  game: {
    type: String,
    required: 'This fild is required.'
  },
  position: {
    type: String,
    required: 'This fild is required.'
  },

  class: {
    type: String,
    required: 'This fild is required.'
  },
  Hometown: {
    type: String,
    required: 'This fild is required.'
  },
  image: {
    data:Buffer,contentType: String
  
  },
  

});

StarSchema.index({ name: 'text' , game: 'text', position: 'text' , class: 'text', Hometown: 'text'});
module.exports = mongoose.model('Star', StarSchema);