import React, { Component } from 'react';

import IconButton from './../template/button';

class TotoList extends Component {

    constructor(props) {
        super(props)
    }

    renderBody() {

        const list = this.props.list || [];

        return (
            list.map((item) => (
                <tr key={item._id}>
                    <td>{item.description}</td>
                    <td>
                        <IconButton style='warning'
                            icon='check'
                            onclick={() => this.props.handMarkAsComplete(item._id)} />
                        <IconButton style='success'
                            icon='undo'
                            onclick={() => this.props.handleMarkAsPending(item._id)} />
                        <IconButton style='danger'
                            icon='trash-o'
                            onclick={() => this.props.handleDelete(item._id)} />
                    </td>
                </tr>
            ))
        )
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Descrição</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBody()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TotoList;