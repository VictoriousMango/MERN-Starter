const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017'

const ConnectToMongo = mongoose.connect(mongoURI, {useNewUrlParser : true, useUnifiedTopology : true}, () =>{
        console.log('Connected to Mongo Successfully');
    });


module.exports = ConnectToMongo;