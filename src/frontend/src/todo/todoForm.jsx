import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        return (
            <div role='form' className='todoForm' >
                <div className='col-xs-12 col-sm-9 col-md-10'>
                    <input id='description' className='form-control'  placeholder='Adicione uma tarefa' type="text"/>
                </div>
                <div className='col-xs-12 col-sm-3 col-md-2'>
                    <button className='btn-primary'>
                        <i className='fa fa-plus'></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoForm;