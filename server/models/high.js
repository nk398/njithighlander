const mongoose = require('mongoose');

const HighSchema = new mongoose.Schema({

 
  link: {
    type: String,
  },
  title:{
    type: String,
  }

});

module.exports = mongoose.model('High', HighSchema);