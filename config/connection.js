const mongoose = require('mongoose');



mongoose.connect("mongodb://localhost/pizzadb");


mongoose.set('debug', true);



module.exports = mongoose.connection;