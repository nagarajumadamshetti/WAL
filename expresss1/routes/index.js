const express = require('express');
const router = express.Router(); // initialize router 
const addRecord = require('./creating');
const listRecords = require('./listing')
const updateTodo = require('./todosUpdate');
const deleteTodo = require('./deleting');

router.use('/update-todo', updateTodo);

router.get('/', listRecords);

router.post('/', addRecord);

router.delete('/',deleteTodo);

module.exports = router;