const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/pollingAPI');

const db = mongoose.connection;

//error 
db.on('error',console.error.bind(console,'Error in connecting to db'));

//once the connection is open 
db.once('open', function(){
    console.log('Database Connected');
});

module.exports = db;