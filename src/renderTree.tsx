import {store} from './state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export const renderTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}


