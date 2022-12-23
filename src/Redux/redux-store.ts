import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducers} from './profile-reducer';
import {dialogsReducers} from './dialogs-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

//export type storeType = typeof store

let reducers = combineReducers({
    profilePage: profileReducers,
    dialogsPage: dialogsReducers,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});


export const store = createStore(
    reducers,
    applyMiddleware(thunk)
);


export type RootReducerType = ReturnType<typeof reducers>;
//@ts-ignore
window.store = store