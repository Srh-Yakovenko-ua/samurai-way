import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from './state';





ReactDOM.render(
    <App RootState={state} addPost={addPost}/>,
    document.getElementById('root')
);
