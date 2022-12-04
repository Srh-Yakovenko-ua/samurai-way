import {authApi} from '../api/authApi';
import {Dispatch} from 'redux';

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
                isAuth: true
            }
        default:
            return state
    }
}

export const authLoginThunkCreator = () => (dispatch: Dispatch) => {
    authApi.setUserData()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                dispatch(setUserDataAC(id, email, login))
            }
        });
}


export const setUserDataAC = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login
        }
    } as const
}