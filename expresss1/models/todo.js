const Model = require('./index');

class Todo extends Model {
    static get tableName() {
        return 'todos';
    }
}

 module.exports = exports = Todo;