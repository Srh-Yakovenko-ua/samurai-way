import React from 'react';
import './App.css';
import {Header} from './comonents/Header/Header';
import {Navbar} from './comonents/Navbar/Navbar';
import {Profile} from './comonents/Profile/Profile';
import {Route} from 'react-router-dom';
import {News} from './comonents/News/News';
import {Music} from './comonents/Music/Music';
import {Settings} from './comonents/Settings/Settings';
import {DialogsContainer} from './comonents/Dialogs/DialogsContainer';
import {Users} from './comonents/Users/Users';


const App = () => {


    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/dialogs'} component={DialogsContainer}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/users'} render={()=><Users/>}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>

    );
}


export default App;






