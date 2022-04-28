const mongoose = require('mongoose');

const LiveSchema = new mongoose.Schema({

 
  link: {
    type: String,
  }
});

module.exports = mongoose.model('Live', LiveSchema);