const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
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
  

});

EventsSchema.index({ time: 'text' , team1: 'text', team2: 'text'});
module.exports = mongoose.model('events', EventsSchema);