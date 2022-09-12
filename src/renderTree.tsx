import {addPost, changeNewText, RootStateType} from './state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App RootState={state}
             addPost={addPost}
             newPostText={state.profilePage.newPostText}
             changeNewText={changeNewText}/>,
        document.getElementById('root')
    );
}