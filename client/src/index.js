import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// TODO: Add a comment describing the significance of the ReactDOM.render method
// ReactDOM.render takes a React component, or tree of React components and (eventually) renders them to the DOM.
// The first argument is the component we want to render (<App/>), and second is the target element to render to (#root)
ReactDOM.render(<App />, document.getElementById('root'));
