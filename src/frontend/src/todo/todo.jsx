import React, { Component } from 'react';
import PageHeader from './../template/pageHeader';
import TodoForm from './../todo/todoForm';
import TodoList from './../todo/totoList';

class Todo extends Component {
    render() {
        return (
            <div className='container'>
                <PageHeader name='Todo' small='task' />
                <TodoForm />
                <TodoList />
            </div>
        );
    }
}

export default Todo;