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
    isAuth: false
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