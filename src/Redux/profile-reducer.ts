export type ProfileReducerActionType =
    ReturnType<typeof AddPostAC>
    | ReturnType<typeof ChangeTextAC>
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

const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi,How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my new post', likesCount: 11},
    ]
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


export const profileReducers = (state: ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {id: 3, message: state.newPostText, likesCount: 0};
            const stateCopy = {...state, posts: [...state.posts, newPost]}
            stateCopy.newPostText = ''
            return stateCopy
        case CHANGE_NEW_TEXT:
            return {...state, newPostText: action.newText}
        default : {
            return state
        }
    }
}



