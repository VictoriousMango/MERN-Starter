const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, (err) =>{
        if (!err) console.log('Connected to Mongo Successfully');
        else console.log('Error : ', err)
    })
}

module.exports = connectToMongo;