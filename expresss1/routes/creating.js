const Todo = require('../models/todo');

const createTodo = async (req, res) => {
    try {
        const todo = await Todo.query().insert({
            title: req.body.title,
            description: req.body.description,
        });
        res.json({
            success: true,
            todo,
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = exports = createTodo;