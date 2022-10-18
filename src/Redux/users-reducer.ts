export type usersActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
export type usersType = {
    id: number
    followed: boolean
    name: string
    photos: PhotosType
    status: string
    uniqueUrlName: string
}
type PhotosType = {
    small: string
    large: string
}
export type stateUsersType = {
    users: usersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: currentPage
        }
    } as const

}
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            totalCount: totalCount
        }
    } as const
}

export const usersReducer = (state: stateUsersType = initialState, action: usersActionType): stateUsersType => {
    console.log(state)
    switch (action.type) {
        case FOLLOW :
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        case UNFOLLOW :
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        case SET_USERS :
            return {...state, users: action.payload.users}
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.payload.currentPage}
        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.payload.totalCount}
        default :
            return state
    }

}