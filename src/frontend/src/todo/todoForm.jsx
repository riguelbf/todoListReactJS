import React, { Component } from 'react';
import IconButton from './../template/button';

class TodoForm extends Component {

    render() {
        return (
            <div role='form' className='todoForm' >
                <div className='col-xs-12 col-sm-9 col-md-10'>
                    <input id='description' className='form-control' placeholder='Adicione uma tarefa' type="text" />
                </div>
                <div className='col-xs-12 col-sm-3 col-md-2'>
                    <IconButton style='primary' onClick={this.props.handleAdd} icon='plus' />
                </div>
            </div>
        );
    }
}

export default TodoForm;