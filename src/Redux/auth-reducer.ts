import {authApi} from '../api/authApi';
import {Dispatch} from 'redux';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA'

type ActionsType = ReturnType<typeof setUserDataAC>

export type authReducerStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}


export const authReducer = (state: authReducerStateType = initialState, action: ActionsType): authReducerStateType => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth
            }
        default:
            return state
    }
}

export const authLoginThunkCreator = () => (dispatch: Dispatch) => {
    return authApi.setUserData()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                dispatch(setUserDataAC(id, email, login, true))
            }
        });
}
export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authApi.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch<any>(authLoginThunkCreator())

            } else {
                const messages = response.data.messages.length ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: messages}))
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authApi.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false))
            }
        })
}

