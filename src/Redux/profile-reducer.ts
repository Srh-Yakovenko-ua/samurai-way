


export type ProfileReducerActionType = ReturnType<typeof ActionCreatorAddPost> | ReturnType<typeof ActionCreatorChangeText>
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}


const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

const initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi,How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my new post', likesCount: 11},
    ]
}

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


export const profileReducers = (state: ProfilePageType = initialState, action: ProfileReducerActionType) : ProfilePageType => {

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



