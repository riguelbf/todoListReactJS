import React, { Component } from 'react';
import PageHeader from './../template/pageHeader';
import TodoForm from './../todo/todoForm';
import TodoList from './../todo/totoList';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        console.log(this);
    }

    render() {
        return (
            <div className='container'>
                <PageHeader name='Todo' small='task' />
                <TodoForm handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        );
    }
}

export default Todo;