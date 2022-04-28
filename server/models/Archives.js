const mongoose = require('mongoose');

const ArchivesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This fild is required.'
  },
  description:{
    type: String

  },
  image: {
    type: String,
    required: 'This fild is required.'
  
  },
});

module.exports = mongoose.model('Archives', ArchivesSchema);
