const mongoose = require('mongoose');

const SportsnewsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image:{
    type: String,
  
  },
  date:{
    type: String,
   
  }
});
module.exports = mongoose.model('Sportsnews', SportsnewsSchema);