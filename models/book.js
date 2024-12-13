const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, unique: true, required: true },
    genre: { type: String },
    publishedYear: { type: Number },
    copiesAvailable: { type: Number, default: 1 },
    totalCopies: { type: Number, default: 1 },
});

module.exports = mongoose.model('Book', bookSchema);
