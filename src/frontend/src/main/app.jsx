import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React, { Component } from 'react'


export default class App extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
       return (
        <div class='container'>
            <h1>Test ok!</h1>
            <button className='btn-primary'>test </button>     
        </div>
       )
    }
} 


