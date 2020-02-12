const express = require('express');
const router =  express.Router();

const update = require('./updateTodo');

router.put('/:id', update);

module.exports = exports = router;