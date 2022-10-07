import {combineReducers, createStore} from 'redux';
import {profileReducers} from './profile-reducer';
import {dialogsReducers} from './dialogs-reducer';
import {usersReducer} from './users-reducer';

export type storeType = typeof store

let reducers = combineReducers({
    profilePage: profileReducers,
    dialogsPage: dialogsReducers,
    usersPage : usersReducer,
});


export let store = createStore(reducers);
export type RootReducerType = ReturnType<typeof reducers>;
