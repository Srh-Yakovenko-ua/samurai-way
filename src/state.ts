export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    // changeNewText: (newText: string) => void
    // addPost: (postMessage: string) => void
    _rerenderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
export type ActionsType = ReturnType<typeof ActionCreatorAddPost> | ReturnType<typeof ActionCreatorChangeText>

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'


export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'Hi,How are you?', likesCount: 12},
                {id: 2, message: 'It\'s my new post', likesCount: 11},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'IT-LEARN'},
                {id: 3, message: 'YO'},
                {id: 4, message: 'YO'},
                {id: 5, message: 'YO'},
                {id: 6, message: 'YO'},
            ],
        },

    },
    _rerenderTree() {
        console.log('change state')
    },
    // changeNewText(newText: string) {
    //     store._state.profilePage.newPostText = newText
    //     this._rerenderTree()
    // },
    // addPost(postMessage: string) {
    //     const newPost = {id: 3, message: postMessage, likesCount: 0};
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._rerenderTree()
    // },

    subscribe(observer: () => void) {
        this._rerenderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost = {id: 3, message: action.postMessage, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerenderTree()
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            store._state.profilePage.newPostText = action.newText
            this._rerenderTree()
        }
    }
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






