const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

// POST /api/books
router.post('/', protect, (req, res) => {
    console.log('POST /api/books request received');
    bookController.createBook(req, res);
});

// GET /api/books
router.get('/', (req, res) => {
    console.log('GET /api/books request received');
    bookController.getBooks(req, res);
});

// PUT /api/books/:id
router.put('/:id', (req, res) => {
    console.log(`PUT /api/books/${req.params.id} request received`);
    bookController.updateBook(req, res);
});

// DELETE /api/books/:id
router.delete('/:id', (req, res) => {
    console.log(`DELETE /api/books/${req.params.id} request received`);
    bookController.deleteBook(req, res);
});

module.exports = router;

