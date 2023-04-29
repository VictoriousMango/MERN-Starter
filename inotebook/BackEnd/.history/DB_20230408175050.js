const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017'

const ConnectToMongo = ()=>{
    mongoose.connect(mongoURI, (err) =>{
        if (!err) console.log('Connected to Mongo Successfully');
        else console.log('Error : ', err)
    })
}

module.exports = ConnectToMongo;