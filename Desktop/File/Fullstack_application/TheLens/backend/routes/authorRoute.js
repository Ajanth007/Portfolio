const express = require('express');
const router = express.Router();
const { 
    getAuthors,specificAuthors } = require('../context/authorsContext');

router.get('/', getAuthors);

router.get('/:id', specificAuthors);

module.exports = router;

