const mongoose = require('mongoose');

const PeventsSchema = new mongoose.Schema({
  time: {
    type: String,
    required: 'This fild is required.'
  },
  team1: {
    type: String,
    required: 'This fild is required.'
  },
  team2: {
    type: String,
    required: 'This fild is required.'
  },

  team1score: {
    type: String,
    required: 'This fild is required.'
  },
  team2score: {
    type: String,
    required: 'This fild is required.'
  },
  

});

PeventsSchema.index({ time: 'text' , team1: 'text', team2: 'text' , team1score: 'text', team2score: 'text'});
module.exports = mongoose.model('Pevents', PeventsSchema);