const mongoose = require('mongoose');

const CountdownSchema = new mongoose.Schema({
  date:{
      type: String
  }

});

module.exports = mongoose.model('Countdown', CountdownSchema);