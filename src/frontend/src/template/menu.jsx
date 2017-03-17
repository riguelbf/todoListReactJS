import React , { Component } from 'react';

module.exports = props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navba-header'>
                <a href="#" className='navba-brand'>
                    <i className='fa fa-calendar-check-o'></i>TodoApp       
                </a>
            </div>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
            <ul className='navbar navbar-nav'>
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