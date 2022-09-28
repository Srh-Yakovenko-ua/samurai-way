import {combineReducers, createStore} from 'redux';
import {profileReducers} from './profile-reducer';
import {dialogsReducers} from './dialogs-reducer';

export type storeType = typeof store

let reducers = combineReducers({
    profilePage: profileReducers,
    dialogsPage: dialogsReducers
});


export let store = createStore(reducers);
