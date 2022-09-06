import {addPost, RootStateType} from './state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App RootState={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}