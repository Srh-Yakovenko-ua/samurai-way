import {ActionsType, ProfilePageType} from './store';

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export const ActionCreatorAddPost = (newPostMessage: string) => ({
        type: ADD_POST,
        postMessage: newPostMessage
    } as const
)
export const ActionCreatorChangeText = (newTextValue: string) => ({
        type: CHANGE_NEW_TEXT,
        newText: newTextValue
    } as const
)


export const profileReducers = (state: ProfilePageType, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 3, message: action.postMessage, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText
            return state
        default : {
            return state
        }
    }
}



