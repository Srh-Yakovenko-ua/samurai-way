
const SET_USER_DATA = 'SET_USER_DATA'

type ActionsType = ReturnType<typeof setUserDataAC>

type authReducerStateType = {
    id : null | number
    email : null | string
    login : null | string
}

const initialState = {
    id: null,
    email: null,
    login: null,

}


export const authReducer = (state: authReducerStateType = initialState, action: ActionsType): authReducerStateType => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload
            }
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