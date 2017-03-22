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
        this.refresh = this.refresh.bind(this);
    }


    refresh() {
        this.setState({ ...this.state,  _id: 0, description: '', list: this.todoList });
    }

    handleChange(e) {
        this.setState( { ...this.state,  _id: Math.random(), description: e.target.value });
    }

    handleAdd() {
        this.todoList.push(this.state);
        console.log(this.todoList);
        this.refresh();
    }

    handleDelete(id) {
        console.log('delete');
        this.todoList = this.todoList.filter((item) => { return  item._id != id; });
        this.refresh();
    }

    render() {
        return (
            <div className='container'>
                <PageHeader name='Todo' small='task' />
                <TodoForm handleAdd={this.handleAdd} handleChange={ this.handleChange } />
                <TodoList list={this.state.list} handleDelete={ this.handleDelete } />
            </div>
        );
    }
}

export default Todo;