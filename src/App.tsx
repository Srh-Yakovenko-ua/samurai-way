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
import {storeType} from './Redux/redux-store';
//import {StoreType} from './Redux/store';


type AppPropsType = {
    store: storeType

}

const App: React.FC<AppPropsType> = (props) => {
    const {store} = props
    const state = store.getState()

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                               dialogs={state.dialogsPage.dialogs}
                               messages={state.dialogsPage.messages}
                               newMessageText={state.dialogsPage.newMessageText}
                               dispatch={store.dispatch}
                           />}/>
                    <Route path={'/profile'} render={() => <Profile posts={state.profilePage.posts}
                                                                    newPostText={state.profilePage.newPostText}
                                                                    dispatch={store.dispatch}

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






