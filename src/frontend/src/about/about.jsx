import React, { Component } from 'react';
import PageHeader from './../template/pageHeader';

class About extends Component {
    render() {
        return (
            <div className='container'>
                <PageHeader name='About' small='sobre' />
            </div>
        );
    }
}

export default About;