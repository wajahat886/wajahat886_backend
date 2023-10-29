const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://wajahat7217:wajahat17@cluster2.fnj8gp4.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
