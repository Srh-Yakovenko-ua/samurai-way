import {addPost, changeNewText, state} from './state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export const renderTree = () => {
    ReactDOM.render(
        <App RootState={state}
             addPost={addPost}
             newPostText={state.profilePage.newPostText}
             changeNewText={changeNewText}/>,
        document.getElementById('root')
    );
}