import {Dispatch} from 'redux';
import {authLoginThunkCreator} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


type AppReducerStateType = { initialized: boolean }
type AppReducerActionType = any
const initialState = {initialized: false,}


export const appReducer = (state: AppReducerStateType = initialState, action: AppReducerActionType): AppReducerStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccessAC = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

export const initializeAppThunk = () => (dispatch: Dispatch) => {
    const loginResult = dispatch<any>(authLoginThunkCreator())

    Promise.all([loginResult]).then(()=> {
        dispatch<any>(initializedSuccessAC())
    })



}