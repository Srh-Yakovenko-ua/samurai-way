import React from 'react';
import './App.css';
import {Header} from './comonents/Header/Header';
import {Navbar} from './comonents/Navbar/Navbar';
import {Profile} from './comonents/Profile/Profile';
import {Dialogs} from './comonents/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/messages'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;






