import {Dispatch} from 'redux';
import {usersApi} from '../api/usersApi';

export type usersActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>
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
    isFetching: boolean
    followingInProgress: [] | number[]
}
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: stateUsersType = initialState, action: usersActionType): stateUsersType => {
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
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS :
            return {
                ...state, followingInProgress: action.payload.isFetching ?
                    [...state.followingInProgress, action.payload.userID] :
                    state.followingInProgress.filter(id => id !== action.payload.userID)
            }
        default :
            return state
    }
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true))

    usersApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        });
}

export const followUserThunkCreator = (userID: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userID))

    usersApi.followUser(userID)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followAC(userID))
                dispatch(toggleFollowingProgressAC(false, userID))
            }
        })
}
export const unFollowUserThunkCreator = (userID: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgressAC(true, userID))

    usersApi.unFollowUser(userID)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowAC(userID))
                dispatch(toggleFollowingProgressAC(false, userID))
            }
        })
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
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching: isFetching
        }
    } as const
}
export const toggleFollowingProgressAC = (isFetching: boolean, userID: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFetching,
            userID
        }
    } as const
}