import React , { Component } from 'react';

module.exports = props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container-fluid'>
            <div className='navbar-header'>
                <a href="#" className='navbar-brand'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp       
                </a>
            </div>
        </div>
        <div id='navbar' className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
                <li>
                    <a href="#/todos">Todo</a>
                </li>
                <li>
                    <a href="#/about">About</a> 
                </li>
            </ul>
        </div>
    </nav>
)