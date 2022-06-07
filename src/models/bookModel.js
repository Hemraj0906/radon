
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:  { 
        type: String,
        required: true
    },
    authorName: String, 
    tags: [String],
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10},
    totalPages:String,
    stockAvailable:Boolean,
    getBooksInYear:String
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books
