import React, { Component } from 'react';
import PageHeader from './../template/pageHeader';

class Todo extends Component {
    render() {
        return (
            <div className='container'>
                <PageHeader name='Todo' small='task' />
            </div>
        );
    }
}

export default Todo;