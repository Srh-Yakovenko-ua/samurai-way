
export type usersActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
export type usersType = {
    id: number
    photoUrl : string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}
type locationType = {
    city: string
    country: string
}
export type stateUsersType = {
    users: usersType[]
}
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}


export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        payload: {
            userID: userID
        }
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID: userID
        }
    } as const
}
export const setUsersAC = (users: usersType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users: users
        }
    } as const
}

export const usersReducer = (state: stateUsersType = initialState, action: usersActionType): stateUsersType => {
    switch (action.type) {
        case FOLLOW :
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed : true} : u)}
        case UNFOLLOW :
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        case SET_USERS :
            return {...state, users: [...state.users, ...action.payload.users]}
        default :
            return state
    }

}