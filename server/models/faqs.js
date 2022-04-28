const mongoose = require('mongoose');

const FaqsSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  answer: {
    type: String,
  }
});

FaqsSchema.index({ question: 'text', answer: 'text' });
// WildCard Indexing
//FaqsSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('faqs', FaqsSchema);