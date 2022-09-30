import React from 'react';
import './App.css';
import {Header} from './comonents/Header/Header';
import {Navbar} from './comonents/Navbar/Navbar';
import {Profile} from './comonents/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './comonents/News/News';
import {Music} from './comonents/Music/Music';
import {Settings} from './comonents/Settings/Settings';
import {storeType} from './Redux/redux-store';
import {DialogsContainer} from './comonents/Dialogs/DialogsContainer';


// type AppPropsType = {
//     store: storeType
// }

const App = () => {
    // const {store} = props

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Settings}/>
            </div>
        </div>

    );
}


export default App;






