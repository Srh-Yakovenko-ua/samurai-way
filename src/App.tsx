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
import {StoreType} from './state';


type AppPropsType = {
    store: StoreType
    // addPost: (postMessage: string) => void
    // newPostText: string
    // changeNewText: (newText: string) => void
}

function App(props: AppPropsType) {
    let state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                               dialogs={props.store._state.dialogsPage.dialogs}
                               messages={props.store._state.dialogsPage.messages}/>
                           }/>
                    <Route path={'/profile'} render={() => <Profile posts={props.store._state.profilePage.posts}
                                                                    addPost={props.store.addPost.bind(props.store.addPost)}
                                                                    newPostText={props.store._state.profilePage.newPostText}
                                                                    changeNewText={props.store.changeNewText.bind(props.store.changeNewText)}
                    />}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;






