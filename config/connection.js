const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://imjord:imjord123@cluster0.snso2.mongodb.net/pizza-db?retryWrites=true&w=majority");


mongoose.set('debug', true);



module.exports = mongoose.connection;