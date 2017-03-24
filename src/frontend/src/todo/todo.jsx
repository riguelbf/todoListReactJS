import React, { Component } from 'react';
import PageHeader from './../template/pageHeader';
import TodoForm from './../todo/todoForm';
import TodoList from './../todo/totoList';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.todoList = [];
        this.state = { _id: 0, description: '', list: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending= this.handleMarkAsPending.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    refresh() {
        this.setState({ ...this.state,  _id: 0, description: '', list: this.todoList });
    }

    handleChange(e) {
        this.setState( { ...this.state,  _id: Math.random(), description: e.target.value });
    }

    handleAdd() {
        this.todoList.push(this.state);
        this.refresh();
    }

    handleDelete(id) {
        this.todoList = this.todoList.filter((item) => { item._id != id });
        this.refresh();
    }

    handleMarkAsDone(todo){
        console.log('done');
    }

    handleMarkAsPending(todo){
        console.log('pending');
    }

    render() {
        return (
            <div className='container'>
                <PageHeader name='Todo' small='task' />
                <TodoForm handleAdd={ this.handleAdd } 
                          handleChange={ this.handleChange } />
                <TodoList list={ this.state.list } 
                          handleDelete={ this.handleDelete } 
                          handleMarkAsDone={ this.handleMarkAsDone }
                          handleMarkAsPending={ this.handleMarkAsPending }/>
            </div>
        );
    }
}

export default Todo;