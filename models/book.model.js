const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{type:String},
    author:{type:String},
    description:{type:String}
})

const Book = mongoose.model('Book', BookSchema,'300354149-Regal')

module.exports = Book;