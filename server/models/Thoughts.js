const mongoose = require('mongoose');

const ThoughtsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This fild is required.'
  },
  description: {
    type: String,
    required: 'This fild is required.'
  },
  email: {
    type: String,
    required: 'This fild is required.'
  },
 
  image: {
    type: String,
   
  },
});

ThoughtsSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//ThoughtsSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('Thoughts', ThoughtsSchema);