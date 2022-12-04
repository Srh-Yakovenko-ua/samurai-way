import {profileApi} from '../api/profileApi';
import {Dispatch} from 'redux';

export type ProfileReducerActionType = ReturnType<typeof AddPostAC>
    | ReturnType<typeof ChangeTextAC>
    | ReturnType<typeof setUserProfileAC>


type photosType = {
    small: string
    large: string
}
type contactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type ProfileType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: photosType
}


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
}


const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi,How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my new post', likesCount: 11},
    ],
    profile: null,
}


export const profileReducers = (state: ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 3, message: state.newPostText, likesCount: 0};
            const stateCopy = {...state, posts: [...state.posts, newPost]}
            stateCopy.newPostText = ''
            return stateCopy
        case CHANGE_NEW_TEXT:
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE :
            return {...state, profile: action.payload.profile}
        default : {
            return state
        }
    }
}


export const getProfileThunkCreator = (userId: string | undefined) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId)
        .then(data => {
            dispatch(setUserProfileAC(data))
        })
}


export const AddPostAC = () => ({
        type: ADD_POST,
    } as const
)
export const ChangeTextAC = (newTextValue: string) => ({
        type: CHANGE_NEW_TEXT,
        newText: newTextValue
    } as const
)
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile: profile
        }
    } as const
}
