import React from 'react';

export type usersActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

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

let initialState: stateUsersType = {
    users: [
        {
            id: 1,
            photoUrl : 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
            followed: false,
            fullName: 'Alexandr',
            status: 'i am a boss',
            location: {city: 'Florida', country: 'USA'}
        },
        {
            id: 2,
            photoUrl : 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
            followed: true,
            fullName: 'Andrew',
            status: 'i am a boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 3,
            photoUrl : 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
            followed: false,
            fullName: 'Dmitriy',
            status: 'i am a boss too',
            location: {city: 'Augsburg', country: 'Germany'}
        },

    ]
}


export const followAC = (userID: any) => {
    return {
        type: FOLLOW,
        payload: {
            userID: userID
        }
    } as const
}
export const unfollowAC = (userID: any) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID: userID
        }
    } as const
}
export const setUsersAC = (users: any) => {
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
            return {...state, users: state.users.map(u => u === action.payload.userID ? {...u, followed: true} : u)}
        case UNFOLLOW :
            return {...state, users: state.users.map(u => u === action.payload.userID ? {...u, followed: false} : u)}
        case SET_USERS :
            return {...state, users: [...state.users, ...action.payload.users]}
        default :
            return state
    }

}