import React from 'react';
import './App.css';
import {Navbar} from './comonents/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {News} from './comonents/News/News';
import {Music} from './comonents/Music/Music';
import {Settings} from './comonents/Settings/Settings';
import {DialogsContainer} from './comonents/Dialogs/DialogsContainer';
import UsersContainer from './comonents/Users/UsersContainer';
import ProfileContainer from './comonents/Profile/ProfileContainer';
import HeaderContainer from './comonents/Header/HeaderContainer';


const App = () => {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/dialogs'} component={DialogsContainer}/>
                <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/users'} component={UsersContainer}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>

    );
}


export default App;






