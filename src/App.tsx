import React from 'react';
import './App.css';
import {Header} from './comonents/Header/Header';
import {Navbar} from './comonents/Navbar/Navbar';
import {Profile} from './comonents/Profile/Profile';
import {Dialogs} from './comonents/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './comonents/News/News';
import {Music} from './comonents/Music/Music';
import {Settings} from './comonents/Settings/Settings';
import {addPost, RootStateType} from './state';


type AppPropsType = {
    RootState: RootStateType
    addPost: (postMessage: string) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                               dialogs={props.RootState.dialogsPage.dialogs}
                               messages={props.RootState.dialogsPage.messages}/>
                           }/>
                    <Route path={'/profile'} render={() => <Profile posts={props.RootState.profilePage.posts} addPost={props.addPost}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;






