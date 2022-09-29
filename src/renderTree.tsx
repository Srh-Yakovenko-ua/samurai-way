import {store} from './Redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export const renderTree = () => {

    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

