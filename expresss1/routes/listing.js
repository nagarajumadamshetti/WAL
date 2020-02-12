const Todo = require('../models/todo');

const list = async (req, res) =>  {
    try {
        const todos = await Todo.query();
        res.json({
            success: true,
            todos,
        });
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = exports = list;