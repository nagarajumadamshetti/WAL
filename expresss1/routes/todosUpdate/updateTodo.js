const Todo = require('../../models/todo');

const updateTodo = async (req, res, next) => {
    try {
        const updatedTodo = await Todo.query().patch({ 
            ...req.body,
        }).findById(req.params.id).returning('*');

        res.json({
            success:true,
            updatedTodo,
        });

    } catch (error) {
       next(error);
    }
};

module.exports = exports = updateTodo;