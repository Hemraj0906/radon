const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    name:{
        type:String
    },
    author_id:{
        type:String,
        required:true
    },
    prices:{
        type:Number
    },
    rating:Number
},{timestamps:true})

module.exports = mongoose.model('Bookmate', bookSchema) //bookmates
