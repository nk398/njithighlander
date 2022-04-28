const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nehakazi:test123@cluster0.ksjdz.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Database is connected')
});

// Models
require('./Archives');
require('./Thoughts');
require('./Countdown');
require('./faqs');
require('./sportsnews')
require('./events');
require('./pevents');
require('./high');
require('./star');
require('./live')



