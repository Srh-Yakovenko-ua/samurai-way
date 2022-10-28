import {combineReducers, createStore} from 'redux';
import {profileReducers} from './profile-reducer';
import {dialogsReducers} from './dialogs-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';

export type storeType = typeof store

let reducers = combineReducers({
    profilePage: profileReducers,
    dialogsPage: dialogsReducers,
    usersPage : usersReducer,
    auth : authReducer,
});


export let store = createStore(reducers);
export type RootReducerType = ReturnType<typeof reducers>;
//@ts-ignore
window.store = store