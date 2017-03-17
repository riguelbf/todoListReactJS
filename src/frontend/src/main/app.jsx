import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React, { Component } from 'react';
import Todo from './../todo/todo';
import About from './../about/about';

class App extends Component {
    render() {
        return (
            <div>
                <Todo />        
                <About />   
            </div>
        );
    }
}

export default App; 


