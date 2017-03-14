const Todo = require('./todo');

Todo.methods(['get', 'put', 'post', 'delete']);
Todo.updateOpotions({ new: true, runValidators: true });

module.exports = Todo;